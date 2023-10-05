const Category = [
    {
        id: 1,
        name: 'Internatinal Books',
    },
    {
        id: 2,
        name: 'Agama',
    },
    {
        id: 3,
        name: 'Alam',
    },
    {
        id: 4,
        name: 'Aliran & Gaya Bahasa',
    },
    {
        id: 5,
        name: 'Arsitektur',
    },
    {
        id: 6,
        name: 'Barang Antik',
    },
    {
        id: 7,
        name: 'Bisnis & Ekonomi',
    },
    {
        id: 8,
        name: 'Desain',
    },
];

function CategoryItems() {
    return (
        <>
            {Category.map((category) => (
                <li key={category.id} className="hover:text-second transition duration-100 ease-in cursor-pointer">
                    {category.name}
                </li>
            ))}
        </>
    );
}

export default CategoryItems;
