import {Quantity} from "../../styles/categoryStyles";
import {useDispatch} from "react-redux";
import {incrementQuantity, decrementQuantity} from "../../app/reducers/cartReducer";
export const QuantityButton = ({quantity, id}) => {
    const dispatch = useDispatch()
    return (
        <>

            <Quantity>
                <div onClick={() => dispatch(decrementQuantity(id))}>-</div>
                <div>{quantity}</div>
                <div onClick={() => dispatch(incrementQuantity(id))}>+</div>
            </Quantity>
        </>
    )
}