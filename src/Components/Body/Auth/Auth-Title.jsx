import propTypes from 'prop-types';

function AuthTitle(props) {
    const { title } = props;
    return (
        <div>
            <h1 className="text-tertiary text-[1.75rem] mt-20 mb-10 lg:mt-36">{title}</h1>
        </div>
    );
}

AuthTitle.propTypes = {
    title: propTypes.string,
};
export default AuthTitle;
