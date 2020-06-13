import React from "react";
import { connect } from "react-redux";

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className='title'>{title}</h2>
      <div className='items'>
      {
        items.map(item => (<CollectionItem key={item.id} item={item}/>))
      }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  //? bisogna necessariamente passare lo state, perchè diversametne dagli altri selector
  //?  questo necessita una parte dello state dipendente dall URL parameter!
  //? selectCollection è una funzione che ritorna un'altra funzione a cui gli passiamo
  //? (state) come argomento
});

export default connect(mapStateToProps)(CollectionPage);
