import Subtitle from '../../Components/Body/Home/Subtitle';
import BannerCategory from '../../Components/Body/Home/Books/Banner-Category';
import SwiperCardCategory from '../../Components/Body/Home/Swiper-Card-Category';
import { useState, useEffect } from 'react';
import axios from '../../Utils/Sevices/Axios';

function Favourites() {
    const [favourites, setFavourites] = useState([]);

    const getBooks = async () => {
        const response = await axios.get('/api/books/best-seller');
        setFavourites(response.data.books);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>
            <div className="mt-8 lg:mt-12 container mx-auto">
                <Subtitle title="Buku Terlaris" expand={true} />
                <div>
                    <SwiperCardCategory listBooks={favourites}>
                        <BannerCategory image="./public/banner/fiksi-favorit.png" alt="Populars" />
                    </SwiperCardCategory>
                </div>
            </div>
        </>
    );
}

export default Favourites;
