import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import { useState } from 'react';
import Pokemons from './pages/Pokemons/index'
import * as Styled from './pages/Pokemons/styles';
import {StyledLink} from './pages/Pokemons/styles';

import ShowPokemonInfo from './pages/Pokemons/ShowPokemonInfo';

export default function App() {

  return (
    <Styled.Div>
        <BrowserRouter>
            <Styled.Span>Pages</Styled.Span>
            <Link to="/"></Link>
            <StyledLink to="/favorites">Favorites</StyledLink>
            <StyledLink to="/1">1</StyledLink>
            <StyledLink to="/2">2</StyledLink>
            <StyledLink to="/3">3</StyledLink>
            <StyledLink to="/4">4</StyledLink>
            <StyledLink to="/5">5</StyledLink>
            <StyledLink to="/6">6</StyledLink>
            <StyledLink to="/7">7</StyledLink>
            <StyledLink to="/8">8</StyledLink>
            <StyledLink to="/9">9</StyledLink>
            <StyledLink to="/10">10</StyledLink>
            <StyledLink to="/11">12</StyledLink>
            <StyledLink to="/13">13</StyledLink>
            <StyledLink to="/14">14</StyledLink>
            <StyledLink to="/15">15</StyledLink>
            <StyledLink to="/16">16</StyledLink>
            <StyledLink to="/17">17</StyledLink>
            <StyledLink to="/18">18</StyledLink>
            <StyledLink to="/19">19</StyledLink>
            <StyledLink to="/20">20</StyledLink>
            <StyledLink to="/21">21</StyledLink>
            <StyledLink to="/22">22</StyledLink>
            <StyledLink to="/23">23</StyledLink>
            <StyledLink to="/24">24</StyledLink>
            <StyledLink to="/25">25</StyledLink>
            <StyledLink to="/26">26</StyledLink>
            <StyledLink to="/27">27</StyledLink>
            <StyledLink to="/28">28</StyledLink>
            <StyledLink to="/29">29</StyledLink>
            <StyledLink to="/30">30</StyledLink>
            <StyledLink to="/31">31</StyledLink>
            <StyledLink to="/32">32</StyledLink>
            <StyledLink to="/33">33</StyledLink>

            <Switch>
              <Route exact path="/" render={() => {
                return (
                  <Redirect to="/1" />
                )
               }}
              />
              <Route path="/pokemons/:name" component={ShowPokemonInfo}/>
              <Route path="/:id" children={<Pokemons />} />
            </Switch>
          </BrowserRouter>
        </Styled.Div>
      );
    }