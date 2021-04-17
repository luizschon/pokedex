import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [type, setType] = useState("login");
  const [error, setError] = useState(null);

  // Tenta resgatar informação do usuário na API e armazenar em 'localStorage'
  // no item 'user'.
  // Caso a requisição falhe, um erro é atribuído e mensagem de erro é renderizada.
  const authenticateUser = (username) => {
    axios
      .get("https://pokedex20201.herokuapp.com/users/" + username)
      .then(() => {
        localStorage.setItem("user", username);
      })
      .catch((err) => {
        setError(err);
      });
  };

  // Tenta criar usuário na API e loga o usuário automaticamente, armazenando
  // em 'localStorage' no item 'user'.
  // Caso a requisição falhe, um erro é atribuído e mensagem de erro é renderizada.
  const createUser = (username) => {
    axios
      .post("https://pokedex20201.herokuapp.com/users", { username: username })
      .then(() => {
        localStorage.setItem("user", username);
      })
      .catch((err) => {
        setError(err);
      });
  };

  // Função que armazena valor digitado pelo usuário.
  const changeInput = (event) => {
    setUser(event.target.value);
  };

  // Função que muda renderização do form entre 'login' para autenticar usuário
  // e 'signup' para criar usuário.
  const changeForm = () => {
    setError(null);
    setType(type === "login" ? "signup" : "login");
  };

  // Função que controla o submit do form entre auteticação e crriação de
  // usuário.
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
            <h2>Log-in</h2>
            <Input changeInput={changeInput} />
            {error ? <p>Esse usuário não existe!</p> : <></>}
            <Button type="submit" title="Entrar" />
            <Button title="Criar conta" changeForm={changeForm} />
          </>
        ) : (
          <>
            <h2>Sign-up</h2>
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
