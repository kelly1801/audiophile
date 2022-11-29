import {  PageContainer } from "../styles/categoryStyles";
import { Button } from "../styles/sharedComponents";
import { FormSection, Label, Heading , FormWrapper, CheckoutContainer} from "../styles/FormStyles";
import { checkoutEschema } from "../app/formSchema";
import { Formik, Form, Field } from "formik";
import {Summary} from "../components/cart/Summary";
import {useSelector} from "react-redux";
import {Overlay} from "../styles/sharedComponents";
import {useDispatch} from "react-redux";
export const CheckoutPage = () => {
  function submitHandler() {
    console.log("submit");
  }
const dispatch = useDispatch()
  function closeOver() {

  }


  const {cart, isPay} = useSelector((state) => state.cart)
  return (
    <PageContainer>
      {isPay && <Overlay />}
      <CheckoutContainer>
        <Button back>Go back</Button>
          <Formik
          initialValues={{
            email: "",
            name: "",
            phoneNumber: "",
            address: "",
            zipCode: "",
            city: "",
            country: "",
            emoneyNumber: "",
            emoneyPin: "",
            paymentMethod: "",
          }}
          validationSchema={checkoutEschema}
          onSubmit={submitHandler}
        >
            <FormWrapper>
                <h2>Checkout</h2>
          <Form>
            <Heading>BILLING DETAILS</Heading>
            <FormSection>

              <Label>
                Name
                <Field name="name" />
              </Label>
              <Label>
                Email address
                <Field name="email" />
              </Label>
              <Label>
                Phone Number
                <Field name="phoneNumber" />
              </Label>
            </FormSection>
            <Heading>SHIPPING INFO</Heading>
            <FormSection address>

              <Label>
                Your Addresss
                <Field name="address" />
              </Label>
              <Label>
                ZIP code
                <Field name="zipCode" />
              </Label>
              <Label>
                City
                <Field name="city" />
              </Label>
              <Label>
                Country
                <Field name="country" />
              </Label>
            </FormSection>
            <Heading>PAYMENT DETAILS</Heading>
            <FormSection methods>
              <Label>
                Payment methods
              </Label>
              <div role="group" aria-labelledby="paymentMethods">

                <Label radio>
                  <Field type="radio" name="paymentMethod" value="emoney" />
                  e-Money
                </Label>
                <Label radio>
                  <Field type="radio" name="paymentMethod" value="cash" />
                  Cash on Delivery
                </Label>
              </div>
              <Label>
                e-Money Number
                <Field name="emoneyNumber" />
              </Label>
              <Label>
                e-Money PIN
                <Field name="emoneyPin" />
              </Label>
            </FormSection>
          </Form>


            </FormWrapper>
        </Formik>
        <Summary cart={cart}/>
      </CheckoutContainer>
    </PageContainer>
  );
};
