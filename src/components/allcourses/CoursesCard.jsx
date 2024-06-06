import React from 'react'
import { coursesCard } from '../../dummydata';
import './courses.css'

const CoursesCard = () => {
  return (
    <>
     <section className='coursesCard'>
       <div className="container grid2">
         {coursesCard.map((val) => (
          <div className="items">
            <div className="container flex">
                <div className='left'>
                    <div className="img">
                        <img src={val.cover} alt='' />
                    </div>
                </div>
                <div className="text">
                   <h1>{val.courseName}</h1> 
                   <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <label htmlFor=''>(5.0)</label>
                </div>
                <div className="details">
                    {/* we adding the nested Api */}
                    {val.courTeacher.map((details) => (
                        <>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                         <span>{details.totalTime}</span>
                         </>
                      ))}
                </div>
            </div>
           </div>
          </div>
          ))};
        </div>
     </section>
    </>
  )
};

export default CoursesCard;
