
import { LocationCity } from "@mui/icons-material"; 

import { FaSearchLocation } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";




// import { Grid } from "@nextui-org/react";
import  Grid  from "@nextui-org/react";
import { Card, Row, Text } from "@nextui-org/react";

import {  Col,  Button,  } from "@nextui-org/react";

import LocationOnIcon from '@mui/icons-material/LocationOn';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



import React from 'react'



// import Link from 'next/link';
import { TypeFormatFlags } from 'typescript';

import { Typography } from '@mui/material';

import { Facebook } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTube from "@mui/icons-material/YouTube";
import Link from "next/link";


import '../Styles/footer.css'; 

function Footer() {
  return (

    
    
  <div id="footer-main-container" >
    
  <footer id="footer-container"   >
  
  
  {/* Add in the Section container here  */}
  
  
  
  <section id="footer-section-container" >
  
  
  
  {/* ------GRID CONTAINER!#!!---------- */}
  <div id="section-list-container" >
  
    
  
  {/* Add in the list here  */}
  <div id='list-container' >
  <ul id="section-list" >
    {/* Add in the first list item here  */}
    <li id='section-list-item'    >
    
    <div id="headline-container" >
  <text id="section-headline" style={{pointerEvents: 'none', cursor: 'none'}}  >
    Contact Us 

  </text>
  </div>


    {/* Add in the Anchor Tag here  */}
    {/* Add in the phone number here  */}
    <text id="list-phone-text" style={{pointerEvents: 'auto'}}  >
    <Link href='tel:+355762053987' >
    0121 711 7300
    </Link>
    </text>
    
    {/* Add in the Phone number here  */}
      
      {/* Add in the social media list here  */}
      
      
      
    </li>
    
    <li className='email-contact'  id='section-list-item' >
    
    <text className='email-contact'  id='list-text' >
    <Link href='mailto:wakeleyfamily@gmail.com' >
    hello@renewalcc.com
    </Link>
    </text>
      
    </li>
    
    <li>
    </li>

    <li id="social-media-item" >
    
    {/* Add in the social media list here  */}
    
    <ul id='social-list' >
    
    <li id='social-item' >
    
    <Link href='https://www.facebook.com/' target="_blank" >
    
      <Facebook id='footer-social-icon' style={{fontSize: '2rem', color: 'white'}}/>
      
    </Link>

      
    </li>
    
    <li id='social-item' >
    
    
    
    
    <div id="icon-container" >
    
    <Link href='https://www.instagram.com/' target="_blank" >
    <InstagramIcon id='footer-social-icon'  style={{ fontSize: '2rem', marginBottom: '-5px'}} />
    </Link>
      
    </div>
    
    </li>
    
    <li id='social-item' > 
      {/* Add in the icon and anchor tag here  */}
      
      
      <Link href='https://www.youtube.com/' target="_blank">
      <YouTubeIcon id='footer-social-icon'  style={{fontSize: '2.3rem', transform: 'scale(1.15)'}} />
      </Link>
    </li>
    </ul>
    </li>
  </ul>
  </div>

  
  <div id="second-section-container" >
  

  
  <ul id="second-section-list" >
    {/* Add in the list item here  */}
    <li id="second-section-item" >

    
    <div id="second-section-text" >

    
    <text id='location-icon'  style={{pointerEvents: 'auto', cursor: 'pointer'}}   >
    <Link href='https://maps.app.goo.gl/as1QU93MeDEDWxxB7' target="_blank" >
    <LocationOnIcon id='location-icon-fa'  style={{color: "#6465ff"}} />
    </Link>

    </text>
    <text id='meeting-location'>
      Cerrik 


    </text>
    
    {/* Add in the time and day information here  */}
    <text id='meeting-info' >
            
    Sunday - 10AM    
    </text>

    </div>

    </li>
    
    
    <li id='second-section-item' >
    
    <div id='section-item-container' >
    
    <text id='location-icon' >
    <Link href='https://maps.app.goo.gl/as1QU93MeDEDWxxB7' target="_blank">

      <LocationOnIcon id='location-icon-fa'  style={{color: "#6465ff"}} />
    </Link>

    </text>
    
    <text id='meeting-location' >
    Elbasan 
      
    </text>
    
    {/* Add in the Time and day info here  */}
    <text id='meeting-info' >

    Wednesday-5pm 
    </text>
      
      
    </div>

    </li>
    
    
    <li id='second-section-item' >
      <text id='location-icon' >
      
    <Link href='https://maps.app.goo.gl/as1QU93MeDEDWxxB7' target="_blank" >
      <LocationOnIcon id='location-icon-fa'  style={{color: "#6465ff"}} />
    </Link>
        
      </text>
      
      
    <text id='meeting-location' >
      Xherie   
    </text>
    
    
    <text id='meeting-info' >
    Tuesday-6pm 

    </text>
    
      
    </li>
    
    
    {/* Add in the online service details here  */}
    
    <li id='second-section-item' >
    
    <text id='location-icon' >
    <Link href='https://maps.app.goo.gl/rEhVhSwnYHoWGyqRA' target="_blank" >
    <LocationOnIcon id='location-icon-fa'  style={{color: "#6465ff"}} />
    </Link>

      
    </text>
    
    <text id='meeting-location' >
      <Link href='./live'>
      Online 
      </Link>
    </text>
    
    <text id='meeting-info' >
      Sunday-7am 

    </text>
      
    </li>
    
  </ul>
    
    
  </div>
  
  {/* Add in the third section in here  */}
 
  
  </div>
    
  </section>
  
  <div id="bottom-section-container">
  
  
  <ul id="bottom-section-list" >
    
  {/* Add in the list items here  */}
  <li id="bottom-section-item" >
  <Link href='./contact'>
  CONTACT 
  </Link>
  

  </li>
  <li id="bottom-section-item" >
  <Link href='./live'>
  LIVE 
   </Link>
  

  </li>
  <li id="bottom-section-item" >
  <Link href='./ministries' >
  PROJECTS  
  </Link>
  

  </li>
  {/*  */}
  <li  className='mission-statement-item' id="bottom-section-item" >
  <Link href='./mission' >
  MISSION STATEMENT  
  </Link>
  

  </li>

  </ul>

  </div>
  
  

  <div id="copyright-info-container" 
  
  
  
  >

  <div id="copyright-info" style={{backgroundColor: '#161822'}} >
    
  © 2023 Renewal Christian Centre Ltd | All Rights Reserved | Charity No. 1117019 | Registered in England & Wales No. 5996380.   


  </div>
  </div>
  
  
  <div id="tagline-container" style={{backgroundColor: '#161822'}} >
    
  <div id="ministry-tagline" style={{backgroundColor: '#161822'}} > 

  renewal. 
    
  </div>
  </div>

  </footer>
  
</div> 
  );
  
  
  
}

export default Footer
