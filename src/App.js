import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pokemons from './pages/Pokemons/index'

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/page">
            <Pokemons />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}