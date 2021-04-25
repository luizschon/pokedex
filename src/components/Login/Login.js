import { useState, useContext } from "react";

import * as api from "../../api"
import { UserContext } from "../../context/UserContext"
import Input from "../Input/Input";
import Button from "../Button/Button";
import * as Styled from "./styles"

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
      <Styled.Login onSubmit={(event) => handleSubmit(event, input)}>
        {type === "login" ? (
          <>
            <h2>Sign-in</h2>
            <Input placeholder="Username" changeInput={changeInput} />
            {error && <Styled.Error>Esse usuário não existe!</Styled.Error>}
            <Styled.ButtonContainer>
            <Button type="submit" title="Entrar" primary/>
              <Button title="Não possui uma conta? Cadastre-se" changeForm={changeForm} />
            </Styled.ButtonContainer>
          </>
        ) : (
          <>
            <h2>Sign-up</h2>
            <Input placeholder="Username" changeInput={changeInput} />
            {error && <Styled.Error>Esse usuário já está cadastrado!</Styled.Error>}
              <Button type="submit" title="Criar conta" primary/>
              <Button title="Já possui uma conta? Acesse" changeForm={changeForm} />
          </>
        )}
      </Styled.Login>

  );
};

export default LoginPage;
