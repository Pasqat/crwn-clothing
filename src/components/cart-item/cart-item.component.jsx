import React from "react";

import {
  CartItemContainer,
  ImgStyled,
  ItemDetailsComponent,
  NameContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgStyled src={imageUrl} alt="item" />
    <ItemDetailsComponent>
      <NameContainer>{name}</NameContainer>
      <span>
        {quantity} x ${price}{" "}
      </span>
    </ItemDetailsComponent>
  </CartItemContainer>
);

export default CartItem;
