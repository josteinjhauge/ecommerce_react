import React from 'react';
import {connect} from 'react-redux';
import './dropdown.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

const Dropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(Dropdown);