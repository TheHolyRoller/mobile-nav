
"use client"
import React from 'react'

import Background from '../assets/NewText.jpg'; 


import { Typography } from '@mui/material';
import Image from 'next/image';


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import { FaBeer, FaFacebook } from "react-icons/fa";

import '../Styles/Page.css'; 
import { Facebook } from '@mui/icons-material';


function Page() {
  return (
  

    <div id="hamburger-main-container" >



    <div id="background-container"  >
    <Image
    id="background-image"
    src={Background}
    alt="nice img"    
    style={{objectFit: "cover", backgroundSize: "cover", backgroundPosition: "center center", minWidth:"100vw", minHeight: "1500px"}}
    
    />   
    
    </div>
    
    {/* Top  */}
    
    {/* Add in the top Section container here  */}
    <div id="top-section-container">

    {/* Add in the Logo container here  */}
    <div id="logo-container" >
    {/* Add in the logo here  */}
    Logo 
    </div>
    
    

    </div>
    
    
    {/* Nav */}
    <section id="hamburger-list-container" >
        
    {/* Add in the list here  */}
    
    <ul id="hamburger-list" >
        
    {/* Add in the list item here */}
    
    <li id="hamburger-list-item" >
    
    {/* Add in the Link element here  */}
    
    {/* Add in the Typography here  */}
    <Typography id="hamburger-text" >
    Home 

    </Typography>    
    </li>
    <li id="hamburger-list-item" >
    
    {/* Add in the Link element here  */}
    
    {/* Add in the Typography here  */}
    <Typography id="hamburger-text" >
    About 

    </Typography>    
    </li>
    <li id="hamburger-list-item" >
    
    {/* Add in the Link element here  */}
    
    {/* Add in the Typography here  */}
    <Typography id="hamburger-text" >
    Catering 

    </Typography>    
    </li>
    <li id="hamburger-list-item" >
    
    {/* Add in the Link element here  */}
    
    {/* Add in the Typography here  */}
    <Typography id="hamburger-text" >
    Gallery 
    </Typography>    
    </li>
    <li id="hamburger-list-item" >
    
    {/* Add in the Link element here  */}
    
    {/* Add in the Typography here  */}
    <Typography id="hamburger-text" >
    Gift Cards 

    </Typography>    
    </li>
    <li id="hamburger-list-item" >
    
    {/* Add in the Link element here  */}
    
    {/* Add in the Typography here  */}
    <Typography id="hamburger-text" >
    Location 

    </Typography>    
    </li>

    </ul>

    {/* Add in the container for the Social media icons here  */}   

    {/* Social Media  */}
    <div id="social-media-container" >
    
    {/* <ul id="hamburger-social-list" >
        
    <li id="hamburger-social-item" >
    
    
    <Typography id="hamburger-social-text" >

    <Facebook fontSize='300%' className="facebook-icon"  id="social-icon" />


    </Typography>
    
    </li>    
    <li id="hamburger-social-item" >
    
    <Typography className="last-social"  id="hamburger-social-text" >

      
    <InstagramIcon fontSize='200%'  id="social-icon" />
    
    </Typography>
    
    
    </li>    
        
    </ul> */}
    
    </div>

    
    <div id="CTA-container" >
      
    <ul id="CTA-list" >

    <li id="CTA-list-item">
    
    <Typography id="CTA-text" >

    Make a Reservation

    </Typography>

    </li>        
    <li id="CTA-list-item">

    
    <Typography id="CTA-text" >
    
    Order Online 

    </Typography>

    </li>        
    </ul>
    </div>    
    </section>


    </div>
  )
}

export default Page 
