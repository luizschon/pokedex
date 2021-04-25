import * as Styled from './styles';

const Button = ({ type, title, changeForm, primary }) => {

  return (
    <Styled.Button type={type === "submit" ? "submit" : "button"} onClick={changeForm}>
      {title}
    </Styled.Button>
  );
};

export default Button;
