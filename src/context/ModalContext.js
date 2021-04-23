import { createContext, useState } from 'react'

// Cria context controlar menus do tipo modal
// o ModelContext comporta o state, setState e uma função
// que insere o estado "", correpondente à fechar o modal 
export const ModalContext = createContext(["", () => {}, () => {}]);

export const ModalProvider = ({ children }) => {
  // Hook use State para armazenar valor de "modal" em 
  // todos os componentes dentro do ModalContext.Provider
  // A string vazia representa que nenhum modal está aberto
  const [state, setState] = useState("");

  return (
    <ModalContext.Provider value={[state, setState, () => setState("")]}>
      { children }
    </ModalContext.Provider>
  )
};