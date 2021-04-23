import { useState, useContext } from "react";

import * as api from "../../api"
import { UserContext } from "../../context/UserContext"
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginPage = ({ onSuccess }) => {
  const [, setUser] = useContext(UserContext);

  const [input, setInput] = useState(""); 
  const [type, setType] = useState("login");
  const [error, setError] = useState(null);

  // Tenta resgatar informação do usuário na API e armazenar em 'localStorage'
  // no item 'user'.
  // Caso a requisição falhe, um erro é atribuído e mensagem de erro é renderizada.
  const authenticateUser = (username) => {
    if (username !== "") {
      api.getUser(username)
        .then(() => {
          setUser(username);
          localStorage.setItem("PokeUser", username)
          onSuccess();
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  // Tenta criar usuário na API e loga o usuário automaticamente, armazenando
  // em 'localStorage' no item 'user'.
  // Caso a requisição falhe, um erro é atribuído e mensagem de erro é renderizada.
  const createUser = (username) => {
    if (username !== "") {
      api.postUser(username)
        .then(() => {
          setUser(username);
          localStorage.setItem("PokeUser", username);
          onSuccess();
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  // Função que armazena valor digitado pelo usuário.
  const changeInput = (event) => {
    setInput(event.target.value);
  };

  // Função que muda renderização do form entre 'login' para autenticar usuário
  // e 'signup' para criar usuário.
  const changeForm = () => {
    setError(null);
    setType(type === "login" ? "signup" : "login");
  };


  // Função que controla o submit do form entre auteticação e criação de

  // usuário.
  const handleSubmit = (event, username) => {
    event.preventDefault();
    setError(null);
    type === "login" ? authenticateUser(username) : createUser(username);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, input)}>
        {type === "login" ? (
          <>
            <h2>Log-in</h2>
            <Input placeholder="Username" changeInput={changeInput} />
            {error && <p>Esse usuário não existe!</p>}
            <Button type="submit" title="Entrar" />
            <Button title="Não possui uma conta? Cadastre-se" changeForm={changeForm} />
          </>
        ) : (
          <>
            <h2>Sign-up</h2>
            <Input placeholder="Username" changeInput={changeInput} />
            {error && <p>Esse usuário já está cadastrado!</p>}
            <Button type="submit" title="Criar conta" />
              <Button title="Já possui uma conta? Acesse" changeForm={changeForm} />
          </>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
