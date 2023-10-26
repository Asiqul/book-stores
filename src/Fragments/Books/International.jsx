import Subtitle from '../../Components/Body/Home/Subtitle';
import BannerCategory from '../../Components/Body/Home/Books/Banner-Category';
import SwiperCardCategory from '../../Components/Body/Home/Swiper-Card-Category';
import { useEffect, useState } from 'react';
import axios from '../../Utils/Sevices/Axios';

function International() {
    const [internasional, setInternational] = useState([]);

    const getBooks = async () => {
        const response = await axios.get('/api/books/international');
        setInternational(response.data.books);
    };

    useEffect(() => {
        getBooks();
        console.log(internasional);
    }, []);

    return (
        <>
            <div className="mt-8 lg:mt-12 container mx-auto">
                <Subtitle title="Buku Internasional" expand={true} />
                <div>
                    <SwiperCardCategory listBooks={internasional}>
                        <BannerCategory image="./public/banner/buku-internasional.png" alt="Populars" />
                    </SwiperCardCategory>
                </div>
            </div>
        </>
    );
}

export default International;
