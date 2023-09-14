function Forms(props) {
  const { type, placeholder, id, label, pattern } = props;
  return (
    <div className="bg-transparent my-1">
      <label
        htmlFor={id}
        className="text-xs mb-6 bg-transparent font-heading font-semibold after:content-['*'] after:text-[#FF0000] after:ml-0.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full py-1 bg-transparent text-sm"
        pattern={pattern}
        required
      />
    </div>
  );
}

export default Forms;
