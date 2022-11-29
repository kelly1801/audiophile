import { ProductsSection, PageContainer } from "../styles/categoryStyles";
import { Button } from "../styles/sharedComponents";
import { FormSection, Label, Heading , FormWrapper} from "../styles/FormStyles";
import { checkoutEschema } from "../app/formSchema";
import { Formik, Form, Field } from "formik";
import {Summary} from "../components/cart/Summary";
import {useSelector} from "react-redux";
export const CheckoutPage = () => {
  function submitHandler() {
    console.log("submit");
  }
  const {cart} = useSelector((state) => state.cart)
  return (
    <PageContainer>
      <ProductsSection>
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
            <FormSection>
              <Heading>BILLING DETAILS</Heading>
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
            <FormSection>
              <Heading>SHIPPING INFO</Heading>
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
            <FormSection>
              <Heading>PAYMENT DETAILS</Heading>

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

              <Summary cart={cart}/>
            </FormWrapper>
        </Formik>

      </ProductsSection>
    </PageContainer>
  );
};
