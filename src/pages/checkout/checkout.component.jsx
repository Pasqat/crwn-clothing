import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import {
  CheckoutPageConatiner,
  HeaderBlock,
  HeaderConatiner,
  TextWarning,
  TotalConatiner,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageConatiner>
    <HeaderConatiner>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </HeaderConatiner>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalConatiner>${total}</TotalConatiner>
    <TextWarning>
      *Please use the following test card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 10/21 - Cvv: 123
    </TextWarning>
    <StripeCheckoutButton price={total} />
  </CheckoutPageConatiner>
);

const mapSelectorToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapSelectorToProps)(CheckoutPage);
