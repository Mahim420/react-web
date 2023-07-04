import React from 'react';
import './product.css';

const Product = (props) => {
    // console.log(props.product)
    const {addToCart, product} = props;
   const {category,about,img,id,age,time} = product;
    return (   
          <div className="card p-2" style={{width:'18rem'}}>
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
               <h5 className="card-title">{category}</h5>
               <p className="card-text">{about.substring(0, 90)}</p>
               <p>For Age : {age}</p>
               <p>Time required : {time}s</p>
               <button onClick={()=>{addToCart(product)}} className='btn btn-success'>Add to list</button>
           </div>
          </div>
    );
};

export default Product;