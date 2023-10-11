// import React from 'react'


import { LocationCity } from "@mui/icons-material"; 

import { FaSearchLocation } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
// import { FaLoca } from "react-icons/fa";

import { Grid } from "@nextui-org/react";
import { Card, Row, Text } from "@nextui-org/react";

import {  Col,  Button,  } from "@nextui-org/react";

import LocationOnIcon from '@mui/icons-material/LocationOn';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



import React from 'react'



import Link from 'next/link';
import { TypeFormatFlags } from 'typescript';

import { Typography } from '@mui/material';

import { Facebook } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


// import the stylesheet here 
// import '../Styles/content.css'; 
import '../Styles/footer.css'; 



function Footer() {
  return (
      
  
  <div id="footer-main-container" style={{outline: '20px solid lime', padding: '0', margin: '0'}}  >
    
  <footer id="footer-container"   >
  
  
  {/* Add in the Section container here  */}
  
  
  <section id="footer-section-container" >
  
  
  {/* ------GRID CONTAINER!#!!---------- */}
  <div id="section-list-container" >
  
 
  
  {/* Add in the list here  */}
  <div id='list-container' >
  <ul id="section-list" >
    {/* Add in the first list item here  */}
    <li id='section-list-item' >
    
    <div id="headline-container" >
  <text id="section-headline" >
    Contact Us 
    
  </text>
  </div>

    {/* Add in the Anchor Tag here  */}
    {/* Add in the phone number here  */}
    <text id="list-phone-text" >
    0121 711 7300
    </text>
    
    {/* Add in the Phone number here  */}
      
      
    </li>
    
    <li className='email-contact'  id='section-list-item' >
    
    <text className='email-contact'  id='list-text' >
    hello@renewalcc.com
    </text>
      
      
      
    </li>
    
    
    {/* add in the newsletter signup element here  */}
    <li id="section-list-item" >
    
    <div id='signup-container' >
      
      <h1 id='signup-header' >Sign up to our Newsletter! </h1>
      
    <input id='signup-input'  type="text" style={{borderRadius: '10px'}} >
    
    </input>
      
      
      
      
    </div>
      
    </li>
    
    
    {/* Add in the social media list item here  */}
    
    <li id="social-media-item" >
    
    {/* Add in the social media list here  */}
    
    <ul id='social-list' >
    
    <li id='social-item' >
      
      {/* <Facebook style={{fontSize: '2rem'}} /> */}
      

      
    </li>
    
    <li id='social-item' >
    
    
    
    <div id="icon-container" >

    <InstagramIcon style={{ fontSize: '2rem', marginBottom: '-5px'}} />
      
    </div>
    
    </li>
    
    <li id='social-item' > 
      {/* Add in the icon and anchor tag here  */}
      <YouTubeIcon style={{fontSize: '2.3rem'}} />
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

    
    <text id='location-icon' >

    <LocationOnIcon style={{color: "#6465ff"}} />
    
    {/* <FaLocationArrow/> */}
    
    </text>
    <text id='meeting-location' >
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
      {/* Add in the location icon here  */}
      <LocationOnIcon style={{color: "#6465ff"}} />

      {/* Location  */}
      
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
      <LocationOnIcon style={{color: "#6465ff"}} />

        {/* Location  */}
        {/* Add in the location icon here  */}
        
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
    <LocationOnIcon style={{color: "#6465ff"}} />

      
    </text>
    
    <text id='meeting-location' >
      Online 
    </text>
    
    <text id='meeting-info' >
      Sunday-7am 

    </text>
      
    </li>
    
  </ul>
    
    
  </div>
  
  {/* Add in the third section in here  */}
 
  
  </div>
  
  
  {/* Add in the bottom section in here  */}
  
  
    
  </section>
  
  <div id="bottom-section-container" >
  
  <ul id="bottom-section-list" >
    
  {/* Add in the list items here  */}
  <li id="bottom-section-item" >
  CONTACT 
  

  </li>
  <li id="bottom-section-item" >
  LIVE 
  

  </li>
  <li id="bottom-section-item" >
  MISSION STATEMENT  
  

  </li>
  <li id="bottom-section-item" >
  PROJECTS  
  

  </li>

  </ul>

  </div>
  
  
  {/* Add in the copyright information here  */}
  
  <div id="copyright-info-container" >

    
  <div id="copyright-info">

  © 2023 Renewal Christian Centre Ltd | All Rights Reserved | Charity No. 1117019 | Registered in England & Wales No. 5996380.   
    
    
  </div>
  </div>
  
  
  {/* Add in the ministry tag line here  */}
  
  
  <div id="tagline-container" >

    
  <div id="ministry-tagline" > 

  renewal. 
    
  </div>
  </div>

  </footer>
  
</div> 
  );
  
  
}

export default Footer
