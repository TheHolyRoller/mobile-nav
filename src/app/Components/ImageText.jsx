'use client'

import Image from 'next/image';
import React from 'react'

import BluePrints from '../assets/BluePrints.jpg'; 
import { Typography } from '@mui/material';
import m from '../Styles/ImageText.module.css';



function ImageText() {
  return (

    <div id={m.backgroundcontainer} >
    
    {/* Add in the main component container here  */}
    
    <div id={m.componentcontainer} >
    
    <div id={m.componentsubcontainer}>
    
    {/* Add in the list to organise and arrange the component */}
    <ul id={m.componentsectionlist}>
    
    
    <li id={m.listcomponentitem}>
    
    
    {/* No styling so far  */}
    <div id={m.imagesectioncontainer}>
    
    {/* Add in the subcontainer here  */}
    <div id={m.imagesubcontainer}>
    <Image
    src={BluePrints}
    id={m.image}
    width={700}
    height={1200} 
    alt='alt'
    
    /> 

    
    </div>
        
    </div>
        
        

    </li>
    
    
    
    
    <li id={m.textlistitem}>
    
    {/* Add in the text section container here  */}
    <div id={m.textsectioncontainer}>
     
    <div id={m.textsectionsubcontainer}>
    
    
    
    {/* Add in the Text container here  */}
    <div id={m.textsectionblockcontainer}>
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id={m.textsectioncontainer}> 
    
    {/* Add in the container for the text here  */}
       
    {/* Add in the container for the Header here  */}
    <Typography id={m.textsectiontypography}>
    <h1 id={m.textsectionheader}>
        Our Values 
        
      
        
    </h1>
        
        
    </Typography>


    <div id={m.toptextcontainer}>
    Renewal’s values are what we do alongside what we believe. 
    <div id={m.bottomtextcontainer}>
    Read more about our values here.
    </div>
    </div>
    
    <span> 
    <button id={m.valuesbutton}> 
    
    Our Values 
    
      
      
    </button>
    </span>
   
  
        
    </div>  
    {/* <div id='buttontextsectioncontainer' style={{marginBottom: '20vh'}}   >

<button> <h1>Hi </h1></button> 
 
 
</div>  */}
    
   
        
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

    <div id={m.visibletext}>

    </div>
      
      {/* Background Container  */}
    </div>
  );
  
}

export default ImageText
