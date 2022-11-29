import { CheckoutSection } from "../../styles/FormStyles";
import { Button } from "../../styles/sharedComponents";
import confirmationIcon from "../../assets/checkout/confirmation.svg";
import { CheckoutItem } from "./CheckoutItem";
import {useNavigate} from "react-router-dom";
export const CheckoutAlert = () => {
    const navigate = useNavigate()

  return (
    <CheckoutSection alert>
      <img src={confirmationIcon} alt="confirmation icon" />
      <h5>THANK YOU FOR YOUR ORDER</h5>
      <p>You will receive an email confirmation shortly.</p>
      <CheckoutItem />

      <Button onClick={() => navigate('/')}>Back to home</Button>
    </CheckoutSection>
  );
};
