import React from 'react';
import './dropdown.scss';
import CustomButton from '../custom-button/custom-button';

const Dropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

export default Dropdown;