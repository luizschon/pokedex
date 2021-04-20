const Input = ({ placeholder, changeInput }) => {

  return (
    <div>
      <input
        placeholder={placeholder}
        onChange={(event) => changeInput(event)}
      ></input>
    </div>
  );
};

export default Input;
