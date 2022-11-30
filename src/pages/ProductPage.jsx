import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toggleOverlay} from "../app/reducers/cartReducer";
import { Button, Overlay } from "../styles/sharedComponents";
import {
  ContentWrapper,
  ProductsSection,
  TextWrapper,
  GroupButtons,
  IncludedContainer,
  SectionDivider,
} from "../styles/categoryStyles";
import { HeaderSection } from "../components/category/HeaderSection";
import GearSection from "../components/shared/GearSection";
import CategoriesSection from "../components/shared/CategoriesSection";
import RecommendedProducts from "../components/shared/RecommendedProducts";
import GallerySection from "../components/shared/GallerySection";
import {addToCart} from "../app/reducers/cartReducer";
import { QuantityButton } from "../components/shared/QuantityButton";
import {formatter} from "../app/formSchema";

export const ProductPage = () => {
  const { product } = useParams();
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [productItem, setProduct] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const productItems = categories.filter(
      (productItem) => productItem.name === product
    );

    setProduct(...productItems);
  }, [product]);
  const { isOpen } = useSelector((state) => state.navBar);
  const { quantity, showCart } = useSelector((state) => state.cart);
  const { onTheBox, gallery, others, category } = productItem;


  return (
    <>
      <ContentWrapper productDetails>
        {(isOpen || showCart) && <Overlay onClick={() => dispatch(toggleOverlay(showCart))} />}
        <ProductsSection>
          <Button back onClick={() => navigate("/")}>
            Go back
          </Button>

          <SectionDivider>
            <HeaderSection
              desktopImg={`.${productItem.categoryImage?.desktop}`}
              mobileImg={`.${productItem.categoryImage?.mobile}`}
              tabletImg={`.${productItem.categoryImage?.tablet}`}
            />
            <TextWrapper>
              <h3>{productItem.name}</h3>
              {productItem.new && <span>New product</span>}
              <p>{productItem.description}</p>
              <h6>{formatter.format(productItem.price)}</h6>
              <GroupButtons>
                <QuantityButton id={productItem.id} quantity={quantity} />
                <Button
                  onClick={() =>
                    dispatch(addToCart({ ...productItem, quantity }))
                  }
                >
                  Add to Cart
                </Button>
              </GroupButtons>
            </TextWrapper>
          </SectionDivider>
          <SectionDivider>
            <TextWrapper>
              <h2>FEATURES</h2>
              <p>{productItem.features}</p>
            </TextWrapper>

            <TextWrapper box>
              <h2>IN THE BOX</h2>

              {onTheBox &&
                onTheBox.map((item, index) => (
                  <IncludedContainer key={index}>
                    <span>{item.quantity}x</span>
                    <p className="subtitle">{item.item}</p>
                  </IncludedContainer>
                ))}
            </TextWrapper>
          </SectionDivider>

          {gallery && <GallerySection galleryImages={gallery} />}
          <RecommendedProducts othersArr={others} category={category} />
          <CategoriesSection />
          <GearSection />
        </ProductsSection>
      </ContentWrapper>
    </>
  );
};
