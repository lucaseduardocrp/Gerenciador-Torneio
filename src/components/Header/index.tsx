import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { BurgerMenu, HeaderContainer, Logo } from './styles';

import { FaTable, FaTrophy } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { IoClose, IoMenu, IoShirt } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";

import SignIn from '../SignIn';

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
        {!active ? <IoMenu /> : <IoClose/>}
      </BurgerMenu>

      <nav className={active ? 'open' : 'close'}>
        <SignIn />

        <ul>
          <li>
            <NavLink to='/'><FaTrophy /> Tournaments</NavLink>
          </li>
          <li>
            <NavLink to='/games'><MdOutlineSportsSoccer /> Games</NavLink>
          </li>
          <li>
            <NavLink to='/table'><FaTable /> Tables</NavLink>
          </li>
          <li>
            <NavLink to='/teams'><IoShirt /> Teams</NavLink>
          </li>
          <li>
            <NavLink to='/statistics'><BsPersonLinesFill /> Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
