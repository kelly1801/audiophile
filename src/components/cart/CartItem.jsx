import { CartItemContainer } from "../../styles/cartStyles";
import { QuantityButton } from "../shared/QuantityButton";
import {formatter} from "../../app/formSchema";

const CartItem = ({ image, title, price, quantity, id, checkout}) => {

  return (
    <CartItemContainer>
        <div>
            <img src={image} alt={title} />

            <figcaption>
                <h6>{title.slice(0, 4)}</h6>
                <span>{formatter.format(price)}</span>
            </figcaption>
        </div>


        {checkout ? <span> x{quantity}</span> :
            <QuantityButton id={id} quantity={quantity}/>}

    </CartItemContainer>
  );
};

export default CartItem;
