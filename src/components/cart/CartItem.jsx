import { CartItemContainer } from "../../styles/cartStyles";
import { QuantityButton } from "../shared/QuantityButton";

const CartItem = ({ image, title, price, quantity, id}) => {

  return (
    <CartItemContainer>
      <img src={image} alt={title} />

      <figcaption>
        <h6>{title.slice(0, 4)}</h6>
        <h6>{price}</h6>
      </figcaption>

      <QuantityButton id={id} quantity={quantity}/>
    </CartItemContainer>
  );
};

export default CartItem;
