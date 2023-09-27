import propTypes from 'prop-types';

function Rating({ rating }) {
    return (
        <>
            <div className="text-end mt-3 text-xs">
                <p>Rating : {rating}</p>
            </div>
        </>
    );
}

Rating.propTypes = {
    rating: propTypes.number,
};
export default Rating;
