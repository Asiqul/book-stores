import Subtitle from '../../Components/Body/Home/Subtitle';
import { books } from '../../../public/books/books';
import BannerCategory from '../../Components/Body/Home/Books/Banner-Category';
import SwiperCardCategory from '../../Components/Body/Home/Swiper-Card-Category';

function Favourites() {
    return (
        <>
            <div className="mt-8 lg:mt-12 container mx-auto">
                <Subtitle title="Fiksi Terlaris" expand={true} />
                <div>
                    <SwiperCardCategory books={books}>
                        <BannerCategory image="./public/banner/fiksi-favorit.png" alt="Populars" />
                    </SwiperCardCategory>
                </div>
            </div>
        </>
    );
}

export default Favourites;
