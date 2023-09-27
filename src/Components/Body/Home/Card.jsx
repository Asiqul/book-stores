import propTypes from 'prop-types';
import BookCover from './Books/Cover';
import Title from './Books/Title';
import Author from './Books/Author';
import Price from './Books/Price';
import Rating from './Books/Rating';

function Card({ image, alt }) {
    return (
        <>
            <a href="/product-detail" className="card h-[99%] bg-white shadow-sm mr-5 py-2">
                <BookCover image={image} alt={alt} />
                <div className="px-3 bottom-3 absolute">
                    <Author author="John Doe" />
                    <Title title="Lorem ipsum dolor sit amet." />
                    <Price price={100000} />
                    <Rating rating={4} />
                </div>
            </a>
        </>
    );
}

Card.propTypes = {
    image: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
};
export default Card;
