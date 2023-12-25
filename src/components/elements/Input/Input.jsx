const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
