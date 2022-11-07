import React from "react";
import { Button } from "../../styles/sharedComponents";
import { Container, Picture } from "../../styles/productStyles";
function ProductTiny({ product }) {
  return (
    <Container>
      <Picture>
        <source srcSet={product.imgMobile} media="(max-width: 568px)" />
        <source srcSet={product.imgTablet} media="(max-width: 865px)" />
        <img src={product.imgDesktop} alt="speaker" />
      </Picture>
      <div>
        <h3>{product.title}</h3>
        {product.btnText && <Button buy>{product.btnText}</Button>}
      </div>
    </Container>
  );
}

export default ProductTiny;
