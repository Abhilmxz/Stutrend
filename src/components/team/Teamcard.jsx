import React from 'react'
import { team } from '../../dummydata';


const Teamcard = () => {
  return (
    <>
      {team.map((val) => (
         <div className="items shadow">
            <div className='img'>
               <img src={val.cover} alt="" />
               <div className='overlay'>
               <i className='fab fa-facebook-f icon'></i>
               <i className='fab fa-instagram icon'></i>
               <i className='fab fa-twitter icon'></i>
               <i className='fab fa-youtube icon'></i>
               </div>
            </div>
            <div className='details'>
               <h1>{val.name}</h1>
               <p>{val.work}</p>
            </div>
         </div> 
      ))}
    </>
  )
};

export default Teamcard;
