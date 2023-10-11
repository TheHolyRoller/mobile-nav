/** 







*/


'use client'

import Image from 'next/image';
import React from 'react'

import BluePrints from '../assets/BluePrints.jpg'; 
import { Typography } from '@mui/material';



function ImageText() {
  return (
  
//   Add in the main background container here 
    <div id='background-container' >
    
    {/* Add in the main component container here  */}
    
    <div id='component-container' >
    
    <div id='component-sub-container' >
    
    {/* Add in the list to organise and arrange the component */}
    <ul id='component-section-list' >
    
    
    <li id='list-component-item' style={{display: 'block'}}  >
    
    
    <div id='image-section-container' >
    
    {/* Add in the sub-container here  */}
    <div id='image-sub-container' >
    <Image
    src={BluePrints}
    
    width={700}
    height={400} 
    alt='alt'
    /> 

    
    </div>
        
    </div>
        
        

    </li>
    
    
    
    
    <li style={{display: 'block'}} >
    
    {/* Add in the text section container here  */}
    <div id='text-section-container' >
     
    <div id='text-section-sub-container' >
    
    {/* Add in the header container here  */}
    
    <div id='section-header-container' >
    

    <Typography id='text-section-typography' >
    <h1 id='text-section-header' style={{fontSize: '3rem'}} >
        Our Values 
        
        
    </h1>
        
        
    </Typography>

    
        
    </div>
    
    
    {/* Add in the Text container here  */}
    <div id='text-section-block-container' >
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id='text-section-container' style={{width: '50vw', outline: '100px solid blue', minHeight: '50vh', margin: '0 auto', display: 'block'}} > 
    
    {/* Add in the container for the text here  */}
       
    {/* Add in the container for the Header here  */}
    Renewal’s values are what we do alongside what we believe. Read more about our values here.
    
   
        
    </div>    
        
    </div>
    
    
    {/* Add in the button section container here  */}

    <div id='button-text-section-container'  >

        
        
        
    </div> 

    
    {/* Text Sub Container  */}
    </div>

    {/* Text Section Main Container */}
    </div>

        
    </li> 
        
    {/* Component Section list  */}
    </ul>
        
    {/* Add in the main Image container here  */}
 

    
    {/* Component Sub Container   */}
    </div>
    
    
    {/* Component Container  */}
    </div>

    <div id='visible-text' style={{fontSize: '4rem', outline: '20px solid lime'}}  >
      {/* Image Text  */}
    </div>
      
      {/* Background Container  */}
    </div>
  );
  
}

export default ImageText
