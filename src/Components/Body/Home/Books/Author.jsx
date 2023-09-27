import propTypes from 'prop-types';

function Author({ author }) {
    return (
        <>
            <div className="text-xs md:text-sm text-border text-left">
                <h4>{author}</h4>
            </div>
        </>
    );
}

Author.propTypes = {
    author: propTypes.string,
};
export default Author;
