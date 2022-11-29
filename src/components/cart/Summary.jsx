import {CheckoutSection, Container, TotalItem} from "../../styles/FormStyles";
import {Button} from "../../styles/sharedComponents";
import CartItem from "./CartItem";
import {useSelector} from "react-redux";
import {formatter} from "../../app/formSchema";
export const Summary = ({cart}) => {

    const {total, vat, shipping, grandTotal} = useSelector((state) => state.cart)

    return (
        <CheckoutSection>
            <h2>Summary</h2>

            <Container>
                {
                    cart.map(({name, image, price, quantity, id}, index) =>
                        <CartItem key={index} image={`.${image.mobile}`} checkout={true} title={name} price={price} quantity={quantity}/>
                    )
                }
            </Container>
            <Container>
                <TotalItem><span>TOTAL</span> <h6>{formatter.format(total)}</h6></TotalItem>
                <TotalItem><span>SHIPPING</span>  <h6>{formatter.format(shipping)}</h6></TotalItem>
                <TotalItem><span>VAT(INCLUDED)</span><h6>{formatter.format(vat)}</h6></TotalItem>
                <TotalItem><span>GRAND TOTAL</span><h6>{formatter.format(grandTotal)}</h6></TotalItem>
            </Container>
            <Button>CONTINUE & PAY</Button>
        </CheckoutSection>
    )
}