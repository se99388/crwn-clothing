import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // has to be convereted to cent
  const pablishableKey =
    "pk_test_51IiKs3Lki3R2xdYj0Jb3qHRaV6X6GQqYtjYnOISZQqX6v1pfx9mbNe2jGUBxVASxM9jfGQ5zuRiFPQxVwCYyzwE000ESCDUV97";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pablishableKey}
      allowRememberMe
    />
  );
};

export default StripeCheckoutButton;
