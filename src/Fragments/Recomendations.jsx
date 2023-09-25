import Subtitle from '../Components/Body/Home/Subtitle';
import SwiperCard from '../Components/Body/Home/Swiper-Card';

function Recomendations() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto my-6">
                <Subtitle title="Rekomendasi Untukmu" />
            </div>
            <div>
                <div className="container mx-auto">
                    <SwiperCard />
                </div>
            </div>
        </div>
    );
}

export default Recomendations;
