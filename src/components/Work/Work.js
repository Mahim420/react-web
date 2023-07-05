import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './work.css';
import Cart from '../LocalStorage/Cart/Cart';
import { addToDb, getCount } from '../LocalStorage/fakeDb';


const Work = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedItem = getCount()
        const saveTime = [];
        for(const id in storedItem){
            const addedTime = products.find(product=>product.id === id);
            if(addedTime){
                const quantity = storedItem[id];
                addedTime.quantity = quantity;
                saveTime.push(addedTime);
            }
        }
        setCart(saveTime)
    }, [products])


    const addToCart = (product) =>{
    //   console.log(product)
      const exits = cart.find(time=>time.id === product.id);
      let newCart = [];

      if(!exits){
        product.quantity = 1;
        newCart = [...cart, product]
      }
      else{
        const rest = cart.filter(time=>time.id === product.id);
        exits.quantity = exits.quantity + 1;
        newCart = [...rest, exits]
      }

      setCart(newCart);
      addToDb(product.id);
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