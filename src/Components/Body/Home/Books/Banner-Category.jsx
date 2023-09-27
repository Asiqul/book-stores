import propTypes from 'prop-types';

function BannerCategory({ image, alt }) {
    return (
        <>
            <img src={image} alt={alt} className="object-contain" />
        </>
    );
}

BannerCategory.propTypes = {
    image: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
};
export default BannerCategory;
