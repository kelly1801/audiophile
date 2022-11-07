import {Button} from "../../styles/sharedComponents";
import {ProductContainer, Picture} from "../../styles/productStyles";

const ProductHome = () => {
    return (
        <ProductContainer>
            <Picture>
                <source srcSet='../../assets/home/mobile/image-speaker-zx9.png' media="(max-width: 568px)"/>
                <source srcSet='../../assets/home/tablet/image-speaker-zx9.png' media="(max-width: 865px)"/>
                <img src='../../assets/home/desktop/image-speaker-zx9.png' alt="speaker"/>
            </Picture>

            <h3>ZX9 SPEAKER</h3>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
             <Button buy>SEE PRODUCT</Button>

        </ProductContainer>

    )
}

export default ProductHome
