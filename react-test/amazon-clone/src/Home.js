import React from 'react';
import './Home.css'
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='http://cdn.itdaily.kr/news/photo/202202/206232_207339_2339.jpg' alt=''/>

        <div className='home_row'>

          <Product id='2323' title='전기차 입니다' price={6000} image='./car1.jfif' rating={ 5 }></Product>
          <Product id='2323' title='전기차 입니다' price={4000} image='./car2.jfif' rating={ 4 }></Product>
            
        </div>

        <div className='home_row'>

          <Product id='2323' title='전기차 입니다' price={3000} image='./car3.jpg' rating={ 1}></Product>
          <Product id='2323' title='전기차 입니다' price={5000} image='./car4.jfif' rating={ 5 }></Product>
        </div>

        <div className='home_row'>

        <Product id='2323' title='전기차 입니다' price={1000} image='./car5.jfif' rating={ 4 }></Product>
        <Product id='2323' title='전기차 입니다' price={2000} image='./car6.jfif' rating={ 3 }></Product>

        </div>

      </div>
    </div>
  );
};

export default Home;