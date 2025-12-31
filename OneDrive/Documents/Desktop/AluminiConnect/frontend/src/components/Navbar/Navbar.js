import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
   <>
   <div className='container'>
     <div className='logo'>
       <img src='logo.png' alt='logo' />
     </div>

     <div className='headings'> 
       <div className='head'>
         <span className="logo-font">भारतीय सूचना प्रौद्योगिकी संस्थान, भोपाल</span>
         <span className="logo-font text-uppercase">Indian Institute Of Information Technology, Bhopal</span>
         <span className="logo-slogen">
           (An Autonomous Institute of National Importance under act of Parliament)
         </span>
       </div>
     </div>

     <div className='mathmagandi'>
       <img src='Gandhi.png' alt='image' />
     </div>

     <div className='Ashokchakra'>
       <img src='emplem.png' alt='image' />
     </div>
   </div>
   </>
  )
}

export default Navbar
