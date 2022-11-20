import {
  CartContainer,
  CartWrapper,
  CartHeader,
  CartProducts,
  CartFooter,
} from "../../styles/cartStyles";
import {useSelector, useDispatch} from "react-redux";
import { Button } from "../../styles/sharedComponents";
import CartItem from "../cart/CartItem";
import {removeAll} from "../../app/reducers/cartReducer";
const CartMenu = () => {

const {cart} = useSelector((state) => state.cart)
const dispatch = useDispatch()

  return (
    <CartContainer>
      <CartWrapper>
        <CartHeader>
          <div>
            <span className="subtitle">Cart({cart.length})</span>{" "}
            <span className="subtitle" onClick={() => dispatch(removeAll()) }>remove all</span>
          </div>
        </CartHeader>

        <CartProducts>

          {
            cart.map(({name, image, price, quantity, id}, index) =>

                <CartItem key={index} image={`.${image.mobile}`} id={id}  title={name} price={price} quantity={quantity}/>
            )
          }

        </CartProducts>


        <CartFooter>
          <div>
            <span className="subtitle">total</span>{" "}
            <span className="subtitle">4500</span>
          </div>
          <Button cart>Checkout</Button>
        </CartFooter>
      </CartWrapper>
    </CartContainer>
  );
};

export default CartMenu;
