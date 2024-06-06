import React from 'react';
import Back from '../common/back/Back';
import './contact.css';

const Contact = () => {
    const map ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.935147764719!2d76.57200841018341!3d10.73948175983079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8730e614bdf5b%3A0xe03601e483e3264b!2sSTUTREND%20ACADEMY!5e0!3m2!1sen!2sin!4v1717690725721!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title='Contact Us' />
      <section className='contact padding'>
        <div className="container shadow flexSB">
            <div className="left row">
               <iframe src={map}></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p>We're open for any suggestions or just to have a chat</p>
                <div className="items grid2">
                   <div className="box">
                       <h4>ADDRESS:</h4>
                       <p>kottayi,Road,Chungamannam-kannanur Rd,Mathur,Palakkad,Kerala 678571</p>
                    </div> 
                    <div className="box">
                        <h4>EMAIL:</h4>
                        <p>2lNpY@example.com</p>
                    </div>
                    <div className="box">
                        <h4>PHONE:</h4>
                        <p>+91 9061207461</p>
                    </div>
                </div>
           
                <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
        </div>
      </section>
    </>
  )
};

export default Contact;
