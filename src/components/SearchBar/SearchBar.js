import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  const searchPokemon = () => {
    console.log(search)
    if (search) {
      axios.get(`https://pokedex20201.herokuapp.com/pokemons/${search.toLowerCase()}`)
      .then((res) => {
        console.log(res.data)
        history.push(`/pokemons/${res.data.name}`)
      })
    }
  }

  return (
    <div className="search-bar">
      <IoSearchSharp />
      <input 
        type="text"
        value={search}
        placeholder='Busque um Pokémon!' 
        onChange={handleInput} 
        onKeyPress={(e) => e.key === "Enter" && searchPokemon(search)} />
    </div>
  )
}

export default SearchBar
