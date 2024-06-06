import React from 'react'
import Back from '../common/back/Back';
import Teamcard from './Teamcard';
import "./team.css"
import Awrapper from '../about/Awrapper';
import '../about/about.css'

const Team = () => {
  return (
    <>
    <Back title='Team'/>
      <selection className='team padding'>
          <div className="container grid">
            <Teamcard/>
          </div>
      </selection>
      <Awrapper/>
    </>
  )
};

export default Team;
