import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (products) =>{
        const newCart = [...cart,products];
        setCart(newCart)
    }

    return (
        <section className='shop-section'>
            <div className='shop-item'>
                {
                    products.map(product =><Product
                    product={product}
                    key={product.id}
                    btn = {addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-count'>
                <Cart cart={cart}></Cart>
            </div>
        </section>
    );
};

export default Shop;