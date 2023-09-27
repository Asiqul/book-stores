import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

function SwiperCard() {
  return (
    <div className="lg:mt-6 h-80 lg:h-96 bg-cards py-8 px-2 sm:p-4 md:px-6 rounded-xl -z-10">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          200: {
            slidesPerView: 1.5,
          },
          300: {
            slidesPerView: 2.5,
          },
          480: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 4.5,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6.5,
          },
          1536: {
            slidesPerView: 6,
          },
        }}
        className="w-full h-full"
      >
        <SwiperSlide className="swiper-slide">
          <Card image="./public/card/jskhairen.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card image="./public/card/bercerita.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperCard;
