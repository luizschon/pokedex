import { useContext } from "react";

import { FavoritesContext } from '../../context/FavoritesContext';
import { ModalContext } from '../../context/ModalContext';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Modal from '../../components/Modal/Modal';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';
import Header from "../../components/Header/Header";
import MegaHeader from "../../components/MegaHeader/MegaHeader";
import * as Styled from "./styles";


const Favorites = () => {
  const [favorites, ] = useContext(FavoritesContext);
  const [modal, , closeModal] = useContext(ModalContext);

  return(
    <>
    <MegaHeader>
      <Header />
    </MegaHeader>
    <Styled.Div>    
      {favorites.length > 0 ?
      favorites.map(pokemon =>
      <div key={pokemon.id}>
        <PokemonCard 
          pokemon={pokemon} 
          isFavorite={true} 
        />
      </div>
      )
      :
      <Styled.Text>Nao há nenhum pokemon favoritado</Styled.Text>}
    </Styled.Div>
    
    {/* Caso o valor de modal seja um objeto não-nulo, interpreta 
     /* como se fosse o objeto do Pokémon que foi clicado e
     /* apresenta modal do Pokémon clicado */}
    {typeof modal === 'object' && modal !== null && (
      <Modal pokemon={modal} closeModal={() => closeModal()}>
        <PokemonInfo pokemon={modal} />
      </Modal>
    )}
    </>
  );
};

export default Favorites