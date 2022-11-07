import { useState } from "react";
import hamburguerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import DropMenu from "./DropMenu";
import { Nav, NavContainer, MenuMobile, List, Icon } from "../../styles/sharedComponents";

function NavBar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <Nav>
      <NavContainer>
        <MenuMobile onClick={handleClick}>
          <img src={hamburguerMenu} alt="" />
        </MenuMobile>

        <Icon>
          <img src={logo} alt="" />
        </Icon>

        <List>
          <li>HOME</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </List>
        <Icon>
          <img src={cartIcon} alt="" />
        </Icon>

        {show && <DropMenu />}
      </NavContainer>
    </Nav>
  );
}

export default NavBar;

