import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pokemons from "./pages/Pokemons/index";
import LoginPage from "./pages/LoginPage/index";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page">
          <Pokemons />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

