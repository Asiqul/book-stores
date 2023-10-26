import propTypes from 'prop-types';
import Title from './Books/Title';
import Author from './Books/Author';
import Price from './Books/Price';
import Rating from './Books/Rating';
import { Link } from 'react-router-dom';

function Card({ image, alt, author, title, price, rating }) {
    return (
        <>
            <Link to="/product-detail" className="card h-[21rem] bg-white shadow-sm mx-2 py-2">
                <div className="max-h-44 min-h-40 2xl:max-h-48 flex justify-center">
                    <div className="w-32 h-44">
                        <img src={image} alt={alt} className="object-contain" />
                    </div>
                </div>
                <div className="px-3 bottom-3 absolute w-full">
                    <Author author={author} />
                    <Title title={title} />
                    <Price price={price} />
                    <Rating rating={rating} />
                </div>
            </Link>
        </>
    );
}

Card.propTypes = {
    image: propTypes.string,
    alt: propTypes.string,
    author: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    rating: propTypes.number,
};
export default Card;
