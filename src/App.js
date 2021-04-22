import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Pokemons from './pages/Pokemons/index'
import Favorites from "./pages/Favorites/index";
import LoginPage from "./pages/LoginPage/index";
import PokemonInfo from './pages/PokemonInfo/index';
import { UserProvider } from './context/UserContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header/Header';

export default function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Header />
          <Switch>    
            <Route exact path="/" render={() => {return (<Redirect to="/1" />)}} />
            <Route path="/pokemons/:name" children={<PokemonInfo/>}/>
            <Route path="/login" children={<LoginPage/>}/>
            <Route path="/favorites" children={<Favorites/>}/>
            <Route path="/:id" children={<Pokemons />}/>
          </Switch>
        </BrowserRouter>
      </FavoritesProvider>
    </UserProvider>
  );
}