/** 

Okay so let's just talk things through. 

What I want to make is a section of the page that 

takes up the full width of the screen and a certain percentage of the height. 


This section contains a background image that takes up the full amount 

of the section. 

Then over this image is a section of text. 

Then to the right of this text on the right hand side of the element on 

large screens there is a CTA button. 

This shifts to the left in smaller screens and goes underneath the 

text section in smaller screens. 

Okay so let's just go through the structure of things. 

So first of all I need to have a container. 

Then I need to have an image container. 

Then I need an image that will take up the whole width of the page and the 

height of that element. It also needs to be fully responsive. 






*/



'use client'

import Youth from '../assets/YouthPastor.jpg'; 


import Image from 'next/image';
import React from 'react';

import '../Styles/CTAComponent.css'; 


  const CTAComponent = () => {
  return (
    <div id='cta-component-container'>


    
    <div id='cta-image-container'   >
      {/* Add in the Image here  */}
      
    
      {/* <img id='cta-image'  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WW91dGglMjBwYXN0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1700&h=600&q=60' alt='alt' style={{}} /> */}
      <Image width={1700} height={50} alt="alt"   src={Youth} style={{maxHeight: '70vh', objectFit: 'cover'}}  />
      
      <div id='cta-text-section' >
        
      <div id='cta-text-sub-container' >
        
      
      <text id='cta-text' > 
      <header id='cta-header-container' >
        <h1 id='cta-header' style={{marginBottom: '2rem'}}  >
        Alpha 

        </h1>
        
      </header>  
      
      <div id='cta-text-block' >
      <span id='cta-span-one' >
      "Alpha is an incredible place to explore Christianity.”
      </span>

      <span id='cta-span-two'     >
See when our next Alpha courses are running and register your place
      </span>
      </div>
        
      </text>
      
      
      {/* Add in the CTA button here  */}
      
      <div id='cta-button-container' >
      
     
     {/* Add in the button sub-container here  */}
     
     <div id='button-sub-container'>
      
        
      <button id='cta-button' > 
      
      <h1 id='cta-button-text' >
        Learn more 
               </h1>
      
      </button>
      </div>
      
     </div>
      
      
      </div>
      
      {/* Add it in here !!!!!!!!#!#$!$!@#@$!@ */}
      
      </div>
      

    </div>

    </div>
  );
  
}

export default CTAComponent; 
