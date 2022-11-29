
import Header from "../components/home/Header";
import CategoriesSection from "../components/shared/CategoriesSection";
import ProductsSection from "../components/home/ProductsSection";
import GearSection from "../components/shared/GearSection";
import {Overlay} from "../styles/sharedComponents";
import {useSelector} from "react-redux";
const Home = () => {
    const {isOpen} = useSelector(state => state.navBar)
    return (
        <main style={{position: "relative"}}>
            {isOpen && <Overlay/>}
            <Header/>
            <CategoriesSection/>
            <ProductsSection/>
            <GearSection/>

        </main>
    )
}

export default Home
