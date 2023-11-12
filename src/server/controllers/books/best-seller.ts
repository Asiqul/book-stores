import prisma from '../../db/connection';

const bestSeller = async (page?: number, limit?: number) => {
    try {
        let randomNumber;
        let offset;

        if (limit && page) {
            randomNumber = 0;
            offset = (Number(page) - 1) * Number(limit);
        } else {
            randomNumber = Math.ceil(Math.random() * 7);
            offset = 0;
        }

        const total_count = await prisma.books.count({
            orderBy: [
                {
                    purchased: 'desc',
                },
            ],
        });
        const books = await prisma.books.findMany({
            skip: randomNumber || offset,
            take: limit ? limit : 10,
            orderBy: [
                {
                    purchased: 'desc',
                },
            ],
            select: {
                id: true,
                title: true,
                author: {
                    select: {
                        name: true,
                    },
                },
                price: true,
                rating: true,
                cover: {
                    take: 1,
                    select: {
                        cover: true,
                    },
                },
            },
        });
        if (total_count === 0) {
            return null;
        }
        const page_count = Math.ceil(total_count / Number(limit));
        return { books, total_count, page_count };
    } catch (error) {
        throw error;
    }
};

export default bestSeller;
