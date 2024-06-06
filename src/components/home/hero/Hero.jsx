import React from 'react';
import './Hero.css';
import Title from '../../common/title/Title';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
            <div className="row">
            <Title subtitle='WELCOME TO' title='STUTREND ACADAMY'/>
                <p>“Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.”</p>
                <div className="button">
                   <button className='primary-btn'>
                    GET STARTED NOW <i className='fa fa-arrow-right'></i>
                    </button> 
                   <button>
                    VIEW COURSE <i className='fa fa-arrow-right'></i>
                    </button> 
                </div>
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
};

export default Hero;
