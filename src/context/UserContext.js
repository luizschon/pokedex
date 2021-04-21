import { createContext, useState } from 'react'

const storedUser = localStorage.getItem('user');

export const UserContext = createContext([storedUser, () => {}]);

export const UserProvider = ({ children }) => {
  const [state, setState] = useState(storedUser);

  return (
    <UserContext.Provider value={[state, setState]}>
      { children }
    </UserContext.Provider>
  )
};