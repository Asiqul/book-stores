import Subtitle from '../../Components/Body/Home/Subtitle';
import BannerCategory from '../../Components/Body/Home/Books/Banner-Category';
import SwiperCardCategory from '../../Components/Body/Home/Swiper-Card-Category';
import { useState, useEffect } from 'react';
import axios from '../../Utils/Sevices/Axios';

function Populars() {
    const [populars, setPopulars] = useState([]);

    const getBooks = async () => {
        const response = await axios.get('/api/books/populars');
        setPopulars(response.data.books);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>
            <div className="mt-8 lg:mt-12 container mx-auto">
                <Subtitle title="Buku-Buku Populer" expand={true} />
                <div>
                    <SwiperCardCategory listBooks={populars}>
                        <BannerCategory image="./public/banner/buku-populer.png" alt="Populars" />
                    </SwiperCardCategory>
                </div>
            </div>
        </>
    );
}

export default Populars;
