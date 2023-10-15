'use client'

import Image from 'next/image';
import React from 'react'

import BluePrints from '../assets/BluePrints.jpg'; 
import { Typography } from '@mui/material';

import '../Styles/TextImage.css'; 

function TextImage() {
  return (

    <div id='background-container' >
    
    {/* Add in the main component container here  */}
    
    <div id='component-container' >
    
    <div id='component-sub-container' >
    
    {/* Add in the list to organise and arrange the component */}
    <ul id='component-section-list'>
    
    
    <li id='text-list-item'  >
    
    {/* Add in the text section container here  */}
    <div id='text-section-container'  >
     
    <div id='text-section-sub-container' >
    
    
    
    {/* Add in the Text container here  */}
    <div id='text-section-block-container' >
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id='text-section-container' > 
    
    
    <Typography id='text-section-typography' >
    <h1 id='text-section-header'>
      Text Image 
      
        {/* Our Values  */}
        
      
        
    </h1>
        
        
    </Typography>


    <div id='top-text-container'  >
    Renewal’s values are what we do alongside what we believe. 
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officiis adipisci, dolorum commodi velit labore quae temporibus enim laborum facilis laudantium, nesciunt unde vitae sapiente placeat ducimus fugit accusamus modi accusantium aliquid, necessitatibus quod veniam. Esse at doloribus voluptatem excepturi laudantium reiciendis quis alias necessitatibus. Accusamus numquam itaque deserunt voluptatibus. 
    
    <div id='bottom-text-container' >
    Read more about our values here.
    </div>
    </div>
    
    {/* <span> 
    <button id='values-button'  > 
    
    Our Values 
    
      
      
    </button>
    </span> */}
   
  
        
    </div>  
    {/* <div id='button-text-section-container' style={{marginBottom: '20vh'}}   >

<button> <h1>Hi </h1></button> 
 
 
</div>  */}
    
   
        
    </div>
    
    
    {/* Add in the button section container here  */}

   

    
    {/* Text Sub Container  */}
    </div>

    {/* Text Section Main Container */}
    </div>

        
    </li> 
    
    <li id='list-component-item' >
    
    
    {/* No styling so far  */}
    <div id='image-section-container' >
    
    {/* Add in the sub-container here  */}
    <div id='image-sub-container'  >
    <Image
    src={BluePrints}
    id='image'
    width={650}
    height={1900} 
    alt='alt'
    style={{borderRadius: '25px', height: '488px'}}
    
    /> 

    
    </div>
        
    </div>
        
        

    </li>
    
    <li id='text-list-item-backup'  >
    
    {/* Add in the text section container here  */}
    <div id='text-section-container'  >
     
    <div id='text-section-sub-container' >
    
    
    
    {/* Add in the Text container here  */}
    <div id='text-section-block-container' >
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id='text-section-container' > 
    
    {/* Add in the container for the text here  */}
       
    {/* Add in the container for the Header here  */}
    <Typography id='text-section-typography' >
    <h1 id='text-section-header'>
        Our Values 

    </h1>
    </Typography>

    <div id='top-text-container'  >
    Renewal’s values are what we do alongside what we believe. 

    
    <div id='bottom-text-container' >
    Read more about our values here.
    </div>
    </div>
    
    {/* <span> 
    <button id='values-button'  > 

    Our Values
    
    </button>
    </span> */}
   
  
        
    </div>  

        
    </div>
    
    
    {/* Add in the button section container here  */}

   

    
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

    <div id='visible-text' >
      {/* Image Text  */}
    </div>
      
      {/* Background Container  */}
    </div>
  );
  
}

export default TextImage
