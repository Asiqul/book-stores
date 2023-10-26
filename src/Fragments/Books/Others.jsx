import Subtitle from '../../Components/Body/Home/Subtitle';
import SwiperCard from '../../Components/Body/Home/Swiper-Card';
import { useEffect, useState } from 'react';
import axios from '../../Utils/Sevices/Axios';

function Others() {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await axios.get('/api/books/best-seller');
        setBooks(response.data.books);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>
            <div className="mt-3 lg:mt-12 container mx-auto bg-cards_wrapper rounded-xl py-5">
                <Subtitle title="Produk Lainnya" expand={true} />
                <div>
                    <SwiperCard list={books} />
                </div>
            </div>
        </>
    );
}

export default Others;
