import { useState } from 'react';

function ImageCard() {
    const [images, setImages] = useState([
        {
            id: 1,
            img: 'https://s3-ap-southeast-1.amazonaws.com/ebook-previews/52314/199006/1.jpg',
        },
        {
            id: 2,
            img: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
        },
        {
            id: 3,
            img: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
        },
        {
            id: 4,
            img: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
        },
    ]);

    const [activeImg, setActiveImage] = useState(images[0].img);

    return (
        <>
            <div className="md:sticky w-full md:w-4/12 lg:w-[28%] md:h-1/6 md:left-0 md:top-36 lg:top-24">
                <div className="card w-full flex flex-col justify-center items-center gap-3 py-0">
                    <div className="bg-white object-contain py-4 rounded-lg flex justify-center items-center">
                        <img src={activeImg} alt="" className="w-[260px] h-[260px] object-contain bg-transparent" />
                    </div>
                    <div className=" w-full flex flex-row justify-center gap-1 xl:gap-2">
                        {images.map((img, index) => (
                            <div key={index} className="h-[4.8rem]">
                                <img
                                    key={index}
                                    src={img.img}
                                    alt=""
                                    className="bg-white h-full p-2 rounded-md cursor-pointer object-contain hover:border-2 border-second transition-all duration-75 ease"
                                    onClick={() => setActiveImage(images[index].img)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageCard;
