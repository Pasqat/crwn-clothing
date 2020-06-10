import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown '>
        <div className='cart-itmes' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;