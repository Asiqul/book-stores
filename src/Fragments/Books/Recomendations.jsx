import Subtitle from '../../Components/Body/Home/Subtitle';
import SwiperCard from '../../Components/Body/Home/Swiper-Card';
import { books } from '../../../public/books/books';

function Recomendations() {
    return (
        <div className="">
            <Subtitle title="Rekomendasi Untukmu" />
            <div className="container mx-auto">
                <SwiperCard books={books} />
            </div>
        </div>
    );
}

export default Recomendations;
