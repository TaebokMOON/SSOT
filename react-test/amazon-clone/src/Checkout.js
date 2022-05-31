import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from './StateProvider';


function Checkout() {
  const [ {basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_laft'>

        <img className='checkout_ad' src='./naver.jpg' alt='네이버 광고'/>
          <div>
            <h2 className='checkout_title'>
              장바구니 입니다.
            </h2>
            {basket.map(item => (
              <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
            ))}
            

          </div>
      </div>
      <div className='checkout_right'>

        <Subtotal/>

      </div>
    </div>
  );
}

export default Checkout;