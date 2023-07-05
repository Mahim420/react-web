import React, { useState } from 'react';
import img from '../../../Collect/mahim.jpg';
import './cart.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart}) => {

    const notify = () => toast("All Task done");

    // console.log(car)
     let quantity = 0;
     let count = 0;
    for(const all of cart){
         quantity = quantity + all.quantity;
         count =count + all.time * quantity;
    }

   console.log(count);
         
    const [values, setValue] = useState();
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
            <div>
                <select className='d-flex w-100 mt-4' value={values} onChange={e=>setValue(e.target.value)}>
                   <option value="">Add Break time</option>
                   <option>10 <span>s</span></option>
                   <option>20 <span>s</span></option>
                   <option>30 <span>s</span></option>
                   <option>40 <span>s</span></option>
                   <option>50 <span>s</span></option>
                </select>
            </div>
            <div className='task'>
                <h4 className='text-white'>Task Detailes</h4>
                <h6 className='bg-white p-3 rounded'>Excersise Time :{count}</h6>
                <h6 className='bg-white p-3 rounded'>Break Time : {values}</h6>
                <h6 className='bg-white p-3 rounded'>QUantity : {quantity}</h6>
            </div>
           <div className='d-flex justify-content-center'>
              <button onClick={notify} className='w-75 h-75 mt-4 rounded bg-primary'>Activity Compleate</button>
          <ToastContainer/>
          </div>
        </section>
    );
};

export default Cart;