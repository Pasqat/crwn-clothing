import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContaienr,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContaienr>
        <NameContainer> {name} </NameContainer>
        <PriceContainer> {price} </PriceContainer>
      </CollectionFooterContaienr>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
