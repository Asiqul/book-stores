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

    console.log(images);
    const [activeImg, setActiveImage] = useState(images[0].img);

    return (
        <div className="card px-4 md:sticky md:left-8 md:top-20 lg:-ml-10">
            <div className="card-body w-auto flex flex-col justify-center items-center gap-3 py-3">
                <div className="bg-white w-[345px] h-[345px] md:w-[260px] md:h-[290px] lg:w-[280px] lg:h-[310px] object-contain p-6 rounded-lg flex justify-center items-center">
                    <img src={activeImg} alt="" className="w-[260px] h-[260px] object-contain bg-transparent" />
                </div>
                <div className=" bg-transparent flex flex-row justify-center gap-2 h-24">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img.img}
                            alt=""
                            className="bg-white w-20 h-24 md:w-14 md:h-16 lg:w-20 lg:h-20 p-2 rounded-md cursor-pointer object-contain hover:border-2 border-second transition-all duration-75 ease"
                            onClick={() => setActiveImage(images[index].img)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageCard;
