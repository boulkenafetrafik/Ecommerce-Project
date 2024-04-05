import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/01.png'
import "../styles/Nav.css"
import SignUP from '../home/signup';
import Footer from '../home/Footer';

const NavItems = () => {
     const [menuToggle,setMenuToggle] =useState(false);
     const [socialToggle,setSocialToggle] =useState(false);
     const [headerFixed,setHeaderFixed] =useState(false);


     //addevent listener
     window.addEventListener("scroll",() => {
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false);
        }
             })
          return (
           <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
              {/* the start of the header  */}
             <div className={`header-top d-md-none ${socialToggle ? "open" : "" }`}>
                <div className='container'>
                         <div className='header-top-area'>
                                <Link to="/signup" className='lab-btn me-3' ><span>Create account</span></Link>
                                <Link to="/login" className='lab-btn '  ><span>Log in</span></Link>
                                
                                
                        </div>
                </div>
        
             </div>
            {/* header bottom  */}
        
        <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        {/* logo */}
                        <div className='logo-search-acte'>
                            <div className='logo'>
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                            </div>
                        </div>
        {/* menu place  */}
                        <div className='menu-area' >
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : "" }`}>
                                    <li><Link style={{color:'grey' , fontSize:'17px'}} to="/" >Home</Link></li>
                                    <li><Link style={{color:'grey' , fontSize:'17px'}} to="/shop" >Shop</Link></li>
                                    <li><Link style={{color:'grey' , fontSize:'17px'}} to="/about" >About-Us</Link></li>
                                    <li><Link style={{color:'grey' , fontSize:'17px'}} to="/contact" >Contact-Us</Link></li>
                                </ul>
                            </div>


                          
        
                                    {/* sign in and log in to create account  */}
        
                                <Link to="/signup" style={{backgroundColor: '#E6E6FA' , bordercColor: '#007bff'}} className='lab-btn me-3 button-primary d-none d-md-block'>Create Account</Link>
                                <Link to="/login" style={{backgroundColor: '#FFFACD' , bordercColor: '#007bff'}} className='lab-btn button-secondary d-none d-md-block' >Log In</Link>
        
                                {/* menu toggler  */}
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
        
                                {/* social toggler */}
                            <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle) }>
                            <i className="icofont-info-square"></i>
                            </div>
        
                         </div>
                    </div>
        
                </div>
        
        </div>
        
           </header>
          )


        }

export default NavItems;


