import Subtitle from '../../Components/Body/Home/Subtitle';
import { books } from '../../../public/books/books';
import BannerCategory from '../../Components/Body/Home/Books/Banner-Category';
import SwiperCardCategory from '../../Components/Body/Home/Swiper-Card-Category';

function Favourites() {
    return (
        <div className="">
            <Subtitle title="Fiksi Terlaris" />
            <div className="container mx-auto">
                <SwiperCardCategory books={books}>
                    <BannerCategory image="./public/banner/fiksi-favorit.png" alt="Populars" />
                </SwiperCardCategory>
            </div>
        </div>
    );
}

export default Favourites;
