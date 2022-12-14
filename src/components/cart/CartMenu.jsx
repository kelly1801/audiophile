import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeAll, getTotal} from "../../app/reducers/cartReducer";
import CartItem from "./CartItem";
import {useNavigate} from "react-router-dom";
import { Button } from "../../styles/sharedComponents";
import {
  CartContainer,
  CartWrapper,
  CartHeader,
  CartProducts,
  CartFooter,
} from "../../styles/cartStyles";
const CartMenu = () => {

const {cart} = useSelector((state) => state.cart)
  const {total} = useSelector((state) => state.cart)
const navigate = useNavigate()

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [cart]);

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
            <span className="subtitle">total</span>
            <span className="subtitle">{total}</span>
          </div>
          <Button cart onClick={() => navigate("/checkout")}>Checkout</Button>
        </CartFooter>
      </CartWrapper>
    </CartContainer>
  );
};

export default CartMenu;
