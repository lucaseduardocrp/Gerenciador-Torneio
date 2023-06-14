import { NavLink } from "react-router-dom";

import { Container, Logo } from "./styles";

import { FaTable, FaTrophy } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { IoShirt } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";

import Login from "../Login";

export function Sidebar() {
  return (
    <Container>
      <Logo>
        <img src="/Logo.svg" alt="Logo Image" />
        <h1>iWinner</h1>
      </Logo>

      <Login />

      <nav>
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
    </Container>
  );
}
