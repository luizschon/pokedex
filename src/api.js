import axios from 'axios'

export const getUser = (username) => (
  axios
    .get("https://pokedex20201.herokuapp.com/users/" + username)
);

export const postUser = (username) => (
  axios
    .post("https://pokedex20201.herokuapp.com/users", { username: username })
);

export const getAllPokemons = (page) => (
  axios
    .get('https://pokedex20201.herokuapp.com/pokemons?page=' + page)
);

export const getFavorites = (username) => (
  axios
    .get('https://pokedex20201.herokuapp.com/users/' + username)
);

export const addFavorite = (username, name) => (
  axios
    .post(`https://pokedex20201.herokuapp.com/users/${username}/starred/${name}`)
);

export const removeFavorite = (username, name) => (
  axios
    .delete(`https://pokedex20201.herokuapp.com/users/${username}/starred/${name}`)
);

export const searchPokemon = (name) => (
  axios
    .get(`https://pokedex20201.herokuapp.com/pokemons/${name.toLowerCase()}`)
);