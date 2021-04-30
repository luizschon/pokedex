import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgPokemon } from 'react-icons/cg';
import { FaSignInAlt, FaSignOutAlt, FaStar, FaHome } from 'react-icons/fa';

import { UserContext } from '../../context/UserContext';
import { ModalContext } from '../../context/ModalContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import * as Styled from './styles';

const Header = () => {
  const [user, setUser] = useContext(UserContext)
  const [, setModal] = useContext(ModalContext)
  const [, setFavorites] = useContext(FavoritesContext)
  const location = useLocation();

  return (
    <Styled.Header>
      <Styled.LeftItems>
        <CgPokemon size="30px" color="black" />
        <Styled.Title>Pokédex</Styled.Title>
      </Styled.LeftItems>
      
      <Styled.RightItems>
      {user ? (
        <>
        <Styled.Username>{user}</Styled.Username>

        {location.pathname === '/favorites' ? (
          <Link to="/">
            <FaHome size="30px" color="black" />
          </Link>
        ) : (
          <Link to = "/favorites">
            <FaStar size="30px" color="black" />
          </Link>
        )}

        <Styled.Diviser></Styled.Diviser>
    
        <Link to="/" onClick={() => {localStorage.clear(); setUser(null); setFavorites([])}}>
            <FaSignOutAlt size="30px" color="black" />
        </Link>   
        </>
      ) : (
            <div className="sign-button" onClick={() => { setModal("login");}}>
          <FaSignInAlt size="30px" color="black" cursor="pointer" />
        </div>
      ) }
      </Styled.RightItems>
    </Styled.Header>
  )
};

export default Header;
