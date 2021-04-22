import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CgPokemon } from 'react-icons/cg'
import { FaSignInAlt, FaSignOutAlt, FaStar, FaHome } from 'react-icons/fa'

import { UserContext } from '../../context/UserContext'
import * as Styled from './styles'
import styled from 'styled-components'

const Header = () => {
  const [user, setUser] = useContext(UserContext)
  const location = useLocation();
  console.log(location.pathname)

  return (
    <Styled.Header>
      <Styled.LeftItems>
        <CgPokemon size="2rem" color="black" />
        <Styled.Title>Pokédex</Styled.Title>
      </Styled.LeftItems>
      
      <Styled.RightItems>
      {user ? (
        <>
        <Styled.Username>{user}</Styled.Username>
        {location.pathname === '/favorites' ? (
          <Link to="/">
            <FaHome size="2rem" color="black" />
          </Link>
        ) : (
          <Link to = "/favorites">
            <FaStar size="2rem" color="black" />
          </Link>
        
        )}
        <Styled.Diviser></Styled.Diviser>
        <Link to="/" onClick={() => {
          localStorage.setItem('PokeUser', null);
          setUser(null);
        }}>
          <FaSignOutAlt size="2rem" color="black" />
        </Link>   
        </>
      ) : (
        <Link to="/login">
          <FaSignInAlt size="2rem" color="black" />
        </Link>
      ) }
      </Styled.RightItems>
    </Styled.Header>
  )
}

export default Header
