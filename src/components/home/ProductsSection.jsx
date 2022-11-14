import styled from "styled-components";
import ProductHome from "./ProductHome";
import ProductTiny from "./ProductTiny";
import { Product, Description } from "../../styles/productStyles";
import { Button } from "../../styles/sharedComponents";
const ProductsHomeArray = [
  {
    imgMobile: "../assets/home/mobile/image-speaker-zx7.jpg",
    imgTablet: "../assets/home/tablet/image-speaker-zx7.jpg",
    imgDesktop: "../assets/home/desktop/image-speaker-zx7.jpg",
    btnText: "SEE PRODUCT",
    title: "ZX7 SPEAKER",
  },
  {
    imgMobile: "../assets/home/mobile/image-earphones-yx1.jpg",
    imgTablet: "../assets/home/tablet/image-earphones-yx1.jpg",
    imgDesktop: "../assets/home/desktop/image-earphones-yx1.jpg",
  },
];

const ProductsSection = () => {
  return (
    <Product>
      <ProductHome />
        {ProductsHomeArray.map((product, index) => (
        <ProductTiny key={index}  product={product} />
      ))}
        <Description>
        <h3>YX1 EARPHONES</h3>
        <Button buy>SEE PRODUCT</Button>
      </Description>
    </Product>
  );
};

export default ProductsSection;
