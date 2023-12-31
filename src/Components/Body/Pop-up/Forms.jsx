import propTypes from 'prop-types';

function Forms(props) {
    const { type, placeholder, id, label, pattern, opt, value, disable } = props;
    return (
        <div
            className={`bg-transparent my-1 border-b-[1px] border-border ${
                disable ? 'opacity-75' : 'border-opacity-80'
            }`}
        >
            <label
                htmlFor={id}
                className={`text-xs bg-transparent font-heading font-semibold ${
                    opt ? 'after:content-[' * '] after:text-[#FF0000] after:ml-0.5' : ''
                }`}
            >
                {label}
            </label>
            <input
                className="w-full py-1 mt-1 bg-transparent text-sm brightness-50"
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                pattern={pattern}
                required={opt}
                disabled={disable}
            />
        </div>
    );
}

Forms.propTypes = {
    type: propTypes.string,
    placeholder: propTypes.string,
    id: propTypes.string,
    label: propTypes.string,
    pattern: propTypes.string,
    opt: propTypes.bool,
    value: propTypes.string,
    disable: propTypes.bool,
};
export default Forms;
