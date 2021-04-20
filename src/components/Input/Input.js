const Input = ({ placeholder, changeInput, searchPokemon }) => {

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
