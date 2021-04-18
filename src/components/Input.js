const Input = ({ title, changeInput }) => {
    return (
      <div>
        <p>{title}</p>
        <input
          placeholder="Username"
          onChange={(event) => changeInput(event)}
        ></input>
      </div>
    );
  };
  
  export default Input;