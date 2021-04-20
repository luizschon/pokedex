import axios from 'axios';
import { useState } from 'react'
import Input from './Input'

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const searchPokemon = () => {
    if (search) {
      axios.get(`https://pokedex20201.herokuapp.com/pokemons/${search.toLowerCase()}`)
      .then()
    }
  }

  return (
    <div>
      <img src="" alt="lupa"/>
      <Input placeholder='Busque um Pokémon!' changeInput={(e) => setSearch(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && searchPokemon} />
    </div>
  )
}

export default SearchBar
