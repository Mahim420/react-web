import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './work.css';
import Cart from '../LocalStorage/Cart/Cart';
import { addToDb } from '../LocalStorage/fakeDb';


const Work = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    const addToCart = (product) =>{
    //   console.log(product)
      const newCart = [...cart, product];
      setCart(newCart);
    }
    return (
        <div className='d-flex justify-content-between p-5'>
            <section className='col-4 col-lg-4'>
                 <h3 className='now'>Select Your task</h3>
                 <div className='display'>
                 {
                    products.map(product =><Product
                        product={product}
                        key={product.id}
                        addToCart = {addToCart}
                   ></Product>
                    )
                 }
                 </div>
            </section>
            <section className='cart-body'>
              <div className='cart-item'>
               <Cart cart={cart}></Cart>
             </div>
            </section>
        </div>
        
    );
};

export default Work;