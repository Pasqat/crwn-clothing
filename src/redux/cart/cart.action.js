import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
//no pyaload perchè cambiamo solo lo state da true a false nel reducer

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});