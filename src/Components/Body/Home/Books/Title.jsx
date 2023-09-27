import propTypes from 'prop-types';
function Title({ title }) {
    return (
        <>
            <div className="mt-2">
                <h3 className="text-sm md:text-md text-left">{title}</h3>
            </div>
        </>
    );
}

Title.propTypes = {
    title: propTypes.string,
};
export default Title;
