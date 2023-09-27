import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function Banner() {
    return (
        <div className="mt-40 lg:mt-32 container mx-auto h-[180px] sm:h-[200px] md:h-[250px] lg:h-80 xl:h-96">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                }}
                slidesPerView={1}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                className="w-full h-full cursor-pointer active:cursor-grabbing"
            >
                <SwiperSlide className="swiper-slide">
                    <img
                        className="object-cover rounded-lg"
                        src="./public/banner/Promo_Spesial_HUT_Grasindo.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-cover rounded-lg" src="./public/banner/PO_Solo_Leveling_IV.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover rounded-lg"
                        src="./public/banner/PO_Majalah_Bobo_Edisi_Koleksi.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover rounded-lg"
                        src="./public/banner/Gramedia_Back_to_Campus_2023.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-cover rounded-lg" src="./public/banner/Diskon_Kejutan_Gramedia.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
