import Subtitle from '../../Components/Body/Home/Subtitle';
import SwiperCard from '../../Components/Body/Home/Swiper-Card';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from '../../Utils/Sevices/Axios';

function Recomendations({ background }) {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await axios.get('/api/books/recommendations');
        setBooks(response.data.books);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>
            <div className={`${background} mt-6 lg:mt-12 container mx-auto py-5`}>
                <Subtitle title="Rekomendasi Untukmu" expand={true} />
                <div>
                    <SwiperCard list={books} />
                </div>
            </div>
        </>
    );
}

Recomendations.propTypes = {
    background: propTypes.string,
};
export default Recomendations;
