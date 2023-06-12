import { NavLink } from "react-router-dom";

import { Container, Login, Logo } from "./styles";

import { FaTable, FaTrophy, FaUserCircle } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { IoShirt } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";

export function Sidebar() {
  return (
    <Container>
      <Logo>
        <img src="/Logo.svg" alt="Logo Image" />
        <h1>SEFA-RJ</h1>
      </Logo>

      <Login>
        <NavLink to=''>Login <FaUserCircle /></NavLink>
      </Login>
            
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
