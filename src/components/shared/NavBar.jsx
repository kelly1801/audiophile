import { useEffect } from "react";
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
import { getCategories } from "../../app/reducers/categoriesReducer";
import { toggleNavBar } from "../../app/reducers/navBarReducer";
import {toggleCart} from "../../app/reducers/cartReducer";
import { useSelector } from "react-redux";
import CartMenu from "./CartMenu";
function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const categories = await readAllCategories();
      dispatch(getCategories(categories));
    }

    getData();
  }, []);

  const {isOpen}= useSelector((state) => state.navBar);
  const {showCart} = useSelector((state) => state.cart)


  return (
    <Nav>
      <NavContainer>
        <MenuMobile onClick={() => dispatch(toggleNavBar())}>
          <img src={hamburgerMenu} alt="" />
        </MenuMobile>

        <Icon onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </Icon>

        <List>
          <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/headphones")}>HEADPHONES</li>
          <li onClick={() => navigate("/speakers")}>SPEAKERS</li>
          <li onClick={() => navigate("/earphones")}>EARPHONES</li>
        </List>
        <Icon onClick={() => dispatch(toggleCart())}>
          <img src={cartIcon} alt="" />
        </Icon>

        {isOpen && <DropMenu />}
        {showCart && <CartMenu/>}
      </NavContainer>
    </Nav>
  );
}

export default NavBar;
