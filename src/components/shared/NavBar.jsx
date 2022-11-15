import { useEffect, useState } from "react";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import DropMenu from "./DropMenu";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavContainer,
  MenuMobile,
  List,
  Icon,
} from "../../styles/sharedComponents";
import { readAllCategories } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { getCategories } from "../../app/Categories/categoriesReducer";

function NavBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const categories = await readAllCategories();
      dispatch(getCategories(categories));
    }

    getData();
  }, []);



  return (
    <Nav>
      <NavContainer>
        <MenuMobile onClick={() => setShow(!show)}>
          <img src={hamburgerMenu} alt="" />
        </MenuMobile>

        <Icon>
          <img src={logo} alt="" />
        </Icon>

        <List>
          <li onClick={() => navigate('/')}>HOME</li>
          <li onClick={() => navigate('/headphones')}>HEADPHONES</li>
          <li onClick={() => navigate('/speakers')}>SPEAKERS</li>
          <li onClick={() => navigate('/earphones')}>EARPHONES</li>
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
