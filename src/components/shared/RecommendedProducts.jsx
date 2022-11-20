import { Picture } from "../../styles/categoryStyles";
import { Button, Section } from "../../styles/sharedComponents";
import { useNavigate, useParams } from "react-router-dom";

const RecommendedProducts = ({ othersArr }) => {

    //const navigate = useNavigate()
    return (
    <>

      <h3>YOU MAY ALSO LIKE</h3>
      <Section recommended>
        {othersArr &&
          othersArr.map((product, index) => (
            <figure key={index}>
              <Picture>
                <source
                  srcSet={`.${product.image.mobile}`}
                  media="(max-width: 568px)"
                />
                <source
                  srcSet={`.${product.image.tablet}`}
                  media="(max-width: 865px)"
                />
                <img src={`.${product.image.desktop}`} alt={product.slug} />
              </Picture>
              <figcaption>
                <h5> {product.name}</h5>
                <Button>SEE PRODUCT</Button>
              </figcaption>
            </figure>
          ))}
      </Section>
    </>
  );
};

export default RecommendedProducts;
