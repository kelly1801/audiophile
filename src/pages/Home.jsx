import NavBar from "../components/home/NavBar";
import Header from "../components/home/Header";
import CategoriesSection from "../components/home/CategoriesSection";
import ProductsSection from "../components/home/ProductsSection";
import GearSection from "../components/home/GearSection";
import Footer from "../components/home/Footer";
import styled from "styled-components";
export const Home = () => {
    return (
        <Page>
            <NavBar/>
            <Header/>
            <CategoriesSection/>
            <ProductsSection/>
            <GearSection/>
            <Footer/>
        </Page>
    )
}

const Page = styled.main`

`