import { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

import * as api from '../../api';
import * as Styled from './styles';
import { ModalContext } from "../../context/ModalContext";
import { UserContext } from '../../context/UserContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Modal from "../../components/Modal/Modal";
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';
import Login from '../../components/Login/Login';
import SearchBar from "../../components/SearchBar/SearchBar";

const Pokemons = () => {
  let history = useHistory();
  //Armazena a rota da url atual em id
  let { id } = useParams();

  const [user, ] = useContext(UserContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [modal, , closeModal] = useContext(ModalContext)

  const [pokemons, setPokemons] = useState([]);
  const [originalPage, setOriginalPage] = useState("1");
  const [page, setPage] = useState(originalPage);

  //Armazena a lista de pokemons da página atual
  const getPokemon = (id) => {
    setPokemons([]);
    // !! TODO mudar isso ^^^
    api.getAllPokemons(id)
      .then(result => {
        setPokemons(result.data.data)
      });
  }

  //Volta para a página anterior se a página atual nao for a primeira
  const handlePreviousPage = (id) => {
    if (id === "1"){
      return id;
    }
    return parseInt(id)-1;
  }

  //Avança para a proxima página se a página atual nao for a última
  const handleNextPage = (id) => {
    if (id === "33"){
      return id;
    }
    return parseInt(id)+1;
  }

  // Redireciona o usuário para a página desejada usando o input
  // Se o input não for válido, retorna o texto para o número da página atual
  const redirect = (page) => {
    if (page > 0 && page < 34){
      history.push({
        pathname: `/pokedex/${page}`,
      });
    } else {
      setPage(originalPage)
      return;
    }
  }

  //Armazena a lista de pokemons favoritos
  const getFavorites = () => {
    api.getFavorites(user)
      .then((result) => {
        setFavorites(result.data.pokemons)
      }) 
  }

  //Atualiza os pokemons mostrados quando a página muda
  //Atualiza a lista de favoritos quando a página muda
  //Atualiza a página atual e a página mostrada no input quando a página muda

  useEffect(() => {
    getPokemon(id);
    setPage(id)
    setOriginalPage(id);
  }, [id, user, ])

  useEffect(() => {
    if (user !== null) {
      getFavorites()
    }
  })

  return (
      <Styled.Div>
        <SearchBar />
      {pokemons ? (
            pokemons.map(pokemon =>
              <Styled.Grid key={pokemon.id}>
                <PokemonCard 
                  pokemon={pokemon} 
                  isFavorite={favorites.some((favPokemon) => favPokemon.name === pokemon.name)}
                />
              </Styled.Grid>)
          ) : (
            <h1>Carregando!</h1>
            )
          }
          
          {/* Caso o valor de modal seja um objeto não-nulo, interpreta 
           /* como se fosse o objeto do Pokémon que foi clicado e
           /* apresenta modal do Pokémon clicado */}
          {typeof modal === 'object' && modal !== null && (
            <Modal pokemon={modal} closeModal={() => closeModal()}>
              <PokemonInfo pokemon={modal} />
            </Modal>
          )}
          {/* Caso o valor de modal seja "login", aprensenta modal de Login*/}  
          {modal === "login" && (
            <Modal closeModal={() => closeModal()}>
              <Login onSuccess={() => closeModal()} />
            </Modal>
          )}
  
        <Styled.PageButtonsDiv>
          <Link to={`/pokedex/${handlePreviousPage(id)}`}>
            <CgChevronLeft size="2rem" color="black" />
          </Link>
          <Styled.Input
            type="text"
            maxLength="2"
            value={page}
            onChange={(event) => setPage(event.target.value)}
            onKeyPress={(event) => event.key === "Enter" && redirect(page)}
          />
          <Link to={{pathname: `/pokedex/${handleNextPage(id)}`}}>
            <CgChevronRight size="2rem" color="black" />
          </Link>
        </Styled.PageButtonsDiv> 
        </Styled.Div>   
  );
}

export default Pokemons
