'use client'

// Add in the imports here 
import { FaHeart, FaShoppingCart } from 'react-icons/fa';


import NewModal from './NewModal';
import { Navbar } from "@nextui-org/react";
import {  Button, Link, Text, useTheme } from "@nextui-org/react";

import { AcmeLogo } from './AcmeLogo';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import '../Styles/NewNav.css'; 
import React from 'react'

  const NewNav = () => {
  return (
    <div id='new-nav-container'>
    {/* Nav Container  */}
    
    <div id='new-nav-sub-container'>
    
    <div id='new-nav-bar'>
    
    <div id='new-nav-bar-content'>
    
    {/* Add in the Navbar logo here  */}
    
    <div id='new-nav-logo-container' >
    
    <div id='new-nav-logo' >
    
    <Link href='/' style={{color: 'white'}}  >
    Revival 
    </Link>
        
    </div>

    </div>
    
    
    <ul id='new-nav-list' >
    
    <li id='new-nav-list-item' className='nav-hover' >

    <div id='new-nav-item' className='nav-hover' >
      {/* <Link href='./give' > */}
      
      <Link id='new-nav-icon' className='nav-hover'  href='./give'>
      <FaHeart id='new-nav-icon' className='nav-hover'  icon="fa-regular fa-heart"  style={{fontSize: '1.5rem', display: 'inline-block', color: 'white'}} >
      </FaHeart>
      </Link>
      
      {/* id='new-nav-text' */}
      <Link   href='./give'>
      <span id='new-nav-text' className='nav-hover' >
        Give 
      </span>
        
      </Link>
    
      {/* </Link> */}
    
        
    </div>    
        
        
    </li>
    <li id='new-nav-list-item' className='nav-hover' >

    <div id='new-nav-item' className='nav-hover' >
   
      <Link id='new-nav-icon' href='./live' >
      {/* <FaShoppingCart id='new-nav-icon'  /> */}
      <LiveTvIcon id='new-nav-icon' className='nav-hover'   />
      </Link>
      
      
      
      
      
      <Link   href='./live' className='nav-hover'  >
      <span id='new-nav-text' className='nav-hover'  >
      
        Live
      </span>
      </Link>
    
        
    </div>    
        
        
    </li>
    <li id='new-nav-list-item'>

    <div id='new-nav-item' >
    
    <div id='new-nav-modal-container' >
      
    <NewModal id='new-nav-modal' />
    </div>

    
    </div>    
        
        
    </li>

        
        
        
    </ul>

        
        
        
    </div>

        
        
    </div>
    
        
    </div>
    
    
    {/* NewNav */}
    
    
    </div>
    
  );
  
}

export default NewNav