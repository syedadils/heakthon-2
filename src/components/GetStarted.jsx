import React from 'react'
import '../index.css'
import logo from './logo.png';





const GetStarted = () => {
  return (
        <div className='head'>
          <div className='logo'>
          <img src={logo} alt="logo" />
          </div>
           <div className='headings'> 
             <h1>SAYLANI WELFEAR</h1>
             <h4>ONLINE DISCOUNT STORE</h4>
             </div>
             <button>Get Started</button>
            </div> 
  )
}

export default GetStarted