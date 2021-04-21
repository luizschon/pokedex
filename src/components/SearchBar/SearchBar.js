import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

import * as api from '../../api'

const SearchBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  // Função que armazena o estado do input do usuário toda vez que é mudado.
  const handleInput = (event) => {
    setSearch(event.target.value);
  }

  // Função que busca na API o Pokémon digitado e redireciona para a
  // página de info, caso a requisição seja concluída com sucesso.
  const searchPokemon = () => {
    if (search) {
    api.searchPokemon(search)
      .then((res) => {
        console.log(res.data)
        history.push(`/pokemons/${res.data.name}`)
      }).catch(
        // !! => TODO!
      )
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
        onKeyPress={(event) => event.key === "Enter" && searchPokemon(search)} />
    </div>
  )
}

export default SearchBar
