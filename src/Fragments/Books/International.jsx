import Subtitle from '../../Components/Body/Home/Subtitle';
import { books } from '../../../public/books/books';
import BannerCategory from '../../Components/Body/Home/Books/Banner-Category';
import SwiperCardCategory from '../../Components/Body/Home/Swiper-Card-Category';

function International() {
    return (
        <div className="">
            <Subtitle title="Buku Internasional" />
            <div className="container mx-auto">
                <SwiperCardCategory books={books}>
                    <BannerCategory image="./public/banner/buku-internasional.png" alt="Populars" />
                </SwiperCardCategory>
            </div>
        </div>
    );
}

export default International;
