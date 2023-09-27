import propTypes from 'prop-types';

function BookCover({ image, alt }) {
    return (
        <>
            <div className="max-h-44 min-h-40 2xl:max-h-48">
                <img src={image} alt={alt} className="object-contain" />
            </div>
        </>
    );
}

BookCover.propTypes = {
    image: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
};
export default BookCover;
