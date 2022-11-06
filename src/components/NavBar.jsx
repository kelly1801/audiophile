import { useState } from "react";
import styled from "styled-components";
import hamburguerMenu from "../assets/shared/tablet/icon-hamburger.svg";
import logo from "../assets/shared/desktop/logo.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import DropMenu from "./DropMenu";
function NavBar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <NavContainer>
      <Menu onClick={handleClick}>
        <img src={hamburguerMenu} alt="" />
      </Menu>

      <Logo>
        <img src={logo} alt="" />
      </Logo>

      <List>
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </List>
      <Cart>
        <img src={cartIcon} alt="" />
      </Cart>

      {show && <DropMenu />}
    </NavContainer>
  );
}

export default NavBar;
const List = styled.menu`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;  
    li {
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }
`;
const NavContainer = styled.nav`
  background-color: var(--dark);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  padding: 2rem;
  border-bottom: 1px solid var(--white);
  
`;
const Logo = styled.figure``;
const Menu = styled.figure`
  cursor: pointer;

  @media (min-width: 1200px) {
    display: none;
  }
`;
const Cart = styled.figure``;
