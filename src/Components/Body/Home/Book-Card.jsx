import propTypes from 'prop-types';
import Title from './Books/Title';
import Author from './Books/Author';
import Price from './Books/Price';
import Rating from './Books/Rating';

function BookCard({ image, alt }) {
    return (
        <>
            <a
                href="/product-detail"
                className="py-2 px-2 flex flex-col justify-center items-center bg-white rounded-xl h-[22rem] shadow-md"
            >
                <div className="py-4 rounded-xl">
                    <img src={image} alt={alt} className="object-contain h-44" />
                </div>
                <div className="px-3 bottom-3 w-full">
                    <Author author="John Doe" />
                    <Title title="Lorem ipsum dolor sit amet." />
                    <Price price={100000} />
                    <Rating rating={4} />
                </div>
            </a>
        </>
    );
}

BookCard.propTypes = {
    image: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
};
export default BookCard;
