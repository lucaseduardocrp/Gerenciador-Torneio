import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { BurgerMenu, HeaderContainer, Logo } from './styles';
import { TableIcon, TrophyIcon, BallIcon, StatisticsIcon, ShirtIcon, CloseIcon, BurgerIcon } from "../Icons";

import Login from '../Login';

export function Header() {
  const [active, setActive] = useState(false)
  const toggleBurger = () => {
    setActive(!active)
  }

  return (
    <HeaderContainer>
      <Logo>
        <img src="/Logo.svg" alt="Logo" />
        <h1>iWinner</h1>
      </Logo>

      <BurgerMenu onClick={toggleBurger}>
        {!active ? <BurgerIcon /> : <CloseIcon/>}
      </BurgerMenu>

      <nav className={active ? 'open' : 'close'}>
        <Login />

        <ul>
          <li>
            <NavLink to='/'><TrophyIcon /> Tournaments</NavLink>
          </li>
          <li>
            <NavLink to='/games'><BallIcon /> Games</NavLink>
          </li>
          <li>
            <NavLink to='/table'><TableIcon /> Tables</NavLink>
          </li>
          <li>
            <NavLink to='/teams'><ShirtIcon /> Teams</NavLink>
          </li>
          <li>
            <NavLink to='/statistics'><StatisticsIcon /> Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
