import propTypes from 'prop-types';

function AuthForms(props) {
    const { name, type, placeholder, id } = props;
    return (
        <div className="mt-5">
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className="border-b-2 text-md border-border border-opacity-30 outline-none bg-transparent w-full py-2 px-2 my-2"
                required
            />
        </div>
    );
}

AuthForms.propTypes = {
    name: propTypes.string,
    type: propTypes.string,
    placeholder: propTypes.string,
    id: propTypes.string,
};
export default AuthForms;
