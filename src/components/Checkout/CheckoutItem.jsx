import { CheckoutItemContainer, Items, Total } from "../../styles/FormStyles";
import { useSelector } from "react-redux";
import { formatter } from "../../app/formSchema";
import CartItem from "../cart/CartItem";
export const CheckoutItem = () => {
  const { grandTotal, cart } = useSelector((state) => state.cart);

  return (
    <CheckoutItemContainer>
      <Items>
        {cart.slice(0, 1).map(({ name, image, price, quantity }, index) => (
          <CartItem
            key={index}
            image={`.${image.mobile}`}
            checkout={true}
            title={name}
            price={price}
            quantity={quantity}
          />
        ))}

          <hr/>
          <span>
             and {cart.length - 1} other item(s)
          </span>

      </Items>
      <Total>
        Grand total
        <h6>{formatter.format(grandTotal)}</h6>
      </Total>
    </CheckoutItemContainer>
  );
};
