import Subtitle from '../../Components/Body/Home/Subtitle';
import SwiperCard from '../../Components/Body/Home/Swiper-Card';
import { books } from '../../../public/books/books';
import propTypes from 'prop-types';

function Recomendations({ background }) {
    return (
        <>
            <div className={`${background} mt-6 lg:mt-12 container mx-auto py-5`}>
                <Subtitle title="Rekomendasi Untukmu" expand={true} />
                <div>
                    <SwiperCard books={books} />
                </div>
            </div>
        </>
    );
}

Recomendations.propTypes = {
    background: propTypes.string,
};
export default Recomendations;
