const Button = ({ type, title, changeForm }) => {

  return (
    <button type={type === "submit" ? "submit" : "button"} onClick={changeForm}>
      {title}
    </button>
  );
};

export default Button;
