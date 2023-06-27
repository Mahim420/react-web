import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css'

const Product = (props) => {
    const {product, btnCart} = props;
    const {img, name, price, seller, ratings} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>Name : {name}</h4>
                <p>Price :$ {price}</p>
                <small>Seller : {seller}</small>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=>btnCart(product)} className='btn-cart'>
                <p className='btn-text'>
                    Add to cart
                </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;