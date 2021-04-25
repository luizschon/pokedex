import { createContext, useState } from 'react'

// Cria contexto de Pokémons favoritos como uma lista vazia
export const FavoritesContext = createContext([[], () => { }]);

export const FavoritesProvider = ({ children }) => {
  // Hook use State para armazenar array de Pokemóns favoritos
  // em todos os componentes dentro do FavoriteContext.Provider
  const [state, setState] = useState([]);

  return (
    <FavoritesContext.Provider value={[state, setState]}>
      { children }
    </FavoritesContext.Provider>
  )
};

