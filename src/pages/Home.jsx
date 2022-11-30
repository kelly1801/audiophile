
import Header from "../components/home/Header";
import CategoriesSection from "../components/shared/CategoriesSection";
import ProductsSection from "../components/home/ProductsSection";
import GearSection from "../components/shared/GearSection";
import {useDispatch, useSelector} from "react-redux";
import {toggleOverlay} from "../app/reducers/cartReducer";
import {Overlay} from "../styles/sharedComponents";
const Home = () => {
    const {isOpen} = useSelector(state => state.navBar)
    const {showCart} = useSelector(state => state.cart)
const dispatch = useDispatch()
    return (
        <main style={{position: "relative"}}>
            {(isOpen || showCart) && <Overlay onClick={ () => dispatch(toggleOverlay(showCart))}/>}
            <Header/>
            <CategoriesSection/>
            <ProductsSection/>
            <GearSection/>

        </main>
    )
}

export default Home
