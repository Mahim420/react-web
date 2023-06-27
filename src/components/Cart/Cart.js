import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0;
    let ship = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        ship = ship + product.shipping;

    }

    const tax = parseFloat(total * 0.1);
    
    const grandTotal = total + ship + tax;

    return (
        <div className='cart-info'>
            <h4 className='cart-title'>Order Summery</h4>
            <h6>Selected Item :{quantity}</h6>
            <p>Total Price :{total}</p>
            <p>Total Shipping :{ship}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;