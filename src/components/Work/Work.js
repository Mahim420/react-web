import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './work.css';
import { addToDb } from '../LocalStorage/fakeDb';
import Cart from '../LocalStorage/Cart/Cart';


const Work = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToCart = (id) =>{
        console.log(id)
    }
    return (
        <div className='d-flex justify-content-between p-5'>
            <section className='col-4 col-lg-4'>
                 <h3 className='now'>Select Your task</h3>
                 <div className='display'>
                 {
                    products.map(product =><Product
                         product={product}
                         addToCart = {addToCart}
                    ></Product>)
                 }
                 </div>
            </section>
            <section className='cart-body'>
              <div className='cart-item'>
               <Cart></Cart>
             </div>
            </section>
        </div>
        
    );
};

export default Work;