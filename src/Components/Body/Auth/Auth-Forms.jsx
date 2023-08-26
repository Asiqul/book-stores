import AuthButton from './Auth-Button';

function AuthForms(props) {
  const { name, label, type, placeholder, id } = props;
  return (
    <div className="mt-5">
      <label htmlFor={name} id={id} className="text-lg">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="border-b-2 text-md border-border border-opacity-30 outline-none bg-transparent w-full py-1.5 px-2"
        required
      />
    </div>
  );
}

export default AuthForms;
