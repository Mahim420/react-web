import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
   
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

        setCart(savedCart);
    },[products]);

const addToCart = (product) =>{
    const exits = cart.find(productType => productType.id === product.id);
    let newCart = [];
    if(!exits){
        product.quantity = 1;
        newCart = [...cart, product]
    }

    else{
        const rest = cart.filter(productType => productType.id !== product.id)
        exits.quantity = exits.quantity + 1;
        newCart = [...rest, exits]
    }
    setCart(newCart)
    addToDb(product.id)
}


    return (
        <section className='shop-section'>
            <div className='shop-item'>
                {
                    products.map(product =><Product
                    product={product}
                    key={product.id}
                    btnCart = {addToCart}
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