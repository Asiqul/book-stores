import propTypes from 'prop-types';
function Title({ title }) {
    let newTitle = title?.slice(0, 25);
    return (
        <>
            <div className="mt-2">
                <h3 className={`text-sm md:text-md text-left ${title?.length > 25 ? `after:content-['...']` : ''}`}>
                    {newTitle}
                </h3>
            </div>
        </>
    );
}

Title.propTypes = {
    title: propTypes.string,
};
export default Title;
