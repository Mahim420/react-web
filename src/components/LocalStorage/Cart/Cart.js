import React from 'react';
import img from '../../../Collect/mahim.jpg';
import './cart.css'

const Cart = () => {
    return (
        <section>
            <div className='d-flex align-items-center'>
            <div id='mahim'>
                <img className='img-fluid rounded-circle' src={img} alt="" />
            </div>
            <div className='ms-4'>
                <h4 className='text-white'>MD. Mahim Khan</h4>
                <p className='text-white'>Dhaka, Bangladesh</p>
            </div>
        </div>
        <div className='d-flex justify-content-around mt-3 bg-white rounded p-2'>
            <div>
                <h2>75 <small>kg</small></h2>
                <p>Weigth</p>
            </div>
            <div>
                <h2>5.6</h2>
                <p>Heigth</p>
            </div>
            <div>
                <h2>23</h2>
                <p>Age</p>
            </div>
        </div>
        </section>
    );
};

export default Cart;