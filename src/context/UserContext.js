import { createContext, useState } from 'react'

// Armazena valor do item PokeUser do localStorage, 
// correspondente ao nome do usuário, caso seja não-nulo
let storedUser;
storedUser && localStorage.getItem('PokeUser') ;

// Cria context para usuário, com valor inicial storedUser
export const UserContext = createContext([storedUser, () => {}]);

export const UserProvider = ({ children }) => {
  // Hook use State para armazenar valor de "user" em 
  // todos os componentes dentro do UserContext.Provider
  const [state, setState] = useState(storedUser);

  return (
    <UserContext.Provider value={[state, setState]}>
      { children }
    </UserContext.Provider>
  )
};
