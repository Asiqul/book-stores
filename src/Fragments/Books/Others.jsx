import Subtitle from '../../Components/Body/Home/Subtitle';
import { books } from '../../../public/books/books';
import SwiperCard from '../../Components/Body/Home/Swiper-Card';

function Others() {
    return (
        <>
            <div className="mt-3 lg:mt-12 container mx-auto bg-cards_wrapper rounded-xl py-5">
                <Subtitle title="Produk Lainnya" expand={true} />
                <div>
                    <SwiperCard books={books} />
                </div>
            </div>
        </>
    );
}

export default Others;
