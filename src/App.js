import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ModalProvider } from './context/ModalContext';
import Pokemons from './pages/Pokemons/index';
import Favorites from "./pages/Favorites/index";
//import { GlobalStyle } from "./GlobalStyle"

export default function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <ModalProvider>
          {/*<GlobalStyle />*/}
          <BrowserRouter>
            <Switch>    
              <Route exact path="/" render={() => {return (<Redirect to="/pokedex/1" />)}} />
              <Route path="/favorites" children={<Favorites/>}/>
              <Route path="/pokedex/:id" children={<Pokemons />}/>
            </Switch>
          </BrowserRouter>
        </ModalProvider>
      </FavoritesProvider>
    </UserProvider>
  );
}