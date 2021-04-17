import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [type, setType] = useState("login");
  const [error, setError] = useState(null);

  const authenticateUser = (username) => {
    axios
      .get("https://pokedex20201.herokuapp.com/users/" + username)
      .then((res) => {
        localStorage.setItem("user", username);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const createUser = (username) => {
    axios
      .post("https://pokedex20201.herokuapp.com/users", { username: username })
      .then((res) => {
        localStorage.setItem("user", username);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const changeInput = (event) => {
    setUser(event.target.value);
  };

  const changeForm = () => {
    setError(null);
    setType(type === "login" ? "signup" : "login");
  };

  const handleSubmit = (event, user) => {
    event.preventDefault();
    setError(null);
    type === "login" ? authenticateUser(user) : createUser(user);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, user)}>
        {type === "login" ? (
          <>
            <Input changeInput={changeInput} />
            {error ? <p>Esse usuário não existe!</p> : <></>}
            <Button type="submit" title="Entrar" />
            <Button title="Criar conta" changeForm={changeForm} />
          </>
        ) : (
          <>
            <Input changeInput={changeInput} />
            {error ? <p>Esse usuário já está cadastrado!</p> : <></>}
            <Button type="submit" title="Criar conta" />
            <Button title="Login na conta" changeForm={changeForm} />
          </>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
