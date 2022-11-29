import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Header,
  PageContainer,
  TextWrapper,
  ProductsSection,
  ContentWrapper,
} from "../styles/categoryStyles";
import { HeaderSection } from "../components/category/HeaderSection";
import CategoriesSection from "../components/shared/CategoriesSection";
import GearSection from "../components/shared/GearSection";
import { Button, Overlay } from "../styles/sharedComponents";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const categories = useSelector((state) => state.categories.categories);
  const [categoryArr, setCategory] = useState([]);

  useEffect(() => {
    const singleCat =  categories.filter(
      (categories) => categories.category === category
    );

    setCategory(singleCat);
  }, [category]);

  const navigate = useNavigate();
  const { isOpen } = useSelector((state) => state.navBar);
  const { showCart } = useSelector((state) => state.cart);

  return (
    <PageContainer>
      {(isOpen || showCart) && <Overlay />}

      <Header>
        <h2>{category}</h2>
      </Header>

      <ContentWrapper>
        {categoryArr.map((category, index) => (
          <ProductsSection key={index} product>
            <HeaderSection
              desktopImg={`.${category.categoryImage?.desktop}`}
              mobileImg={`.${category.categoryImage?.mobile}`}
              tabletImg={`.${category.categoryImage?.tablet}`}
            />
            <TextWrapper>
              {category.new && <span>New product</span>}
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Button onClick={() => navigate(`${category.name}`)}>
                See product
              </Button>
            </TextWrapper>
          </ProductsSection>
        ))}

        <CategoriesSection />
        <GearSection />
      </ContentWrapper>
    </PageContainer>
  );
};

export default CategoryPage;
