import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import propTypes from 'prop-types';
import 'swiper/css/navigation';
import './Styles/style.css';
import Card from './Card';

function SwiperCardCategory({ listBooks, children }) {
    return (
        <div className="lg:mt-1 h-[370px] py-3 px-2 sm:px-4 md:px-6 bg-transparent bg-opacity-50 -z-10 w-full flex flex-row">
            <div className="bg-transparent rounded-lg mr-5 hidden xl:block">{children}</div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#439A97',
                    '--swiper-navigation-size': '25px',
                }}
                id="swiper"
                modules={[Navigation]}
                navigation
                breakpoints={{
                    200: {
                        slidesPerView: 1.5,
                    },
                    300: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 2.5,
                    },
                    550: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 4.5,
                    },
                    1280: {
                        slidesPerView: 4.5,
                    },
                    1536: {
                        slidesPerView: 5.5,
                    },
                }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
            >
                {listBooks?.map((book) => {
                    const image = book.cover[0].cover;
                    const author = book.author[0].name;
                    return (
                        <SwiperSlide className="swiper-slide" key={book.id}>
                            <Card
                                image={image}
                                alt={book.title}
                                author={author}
                                price={book.price}
                                title={book.title}
                                rating={book.rating}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

SwiperCardCategory.propTypes = {
    listBooks: propTypes.array,
    children: propTypes.node,
};
export default SwiperCardCategory;
