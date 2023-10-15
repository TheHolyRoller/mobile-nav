'use client'
/**

Let's work things out. 

So now I have a Material UI Card that needs to be heavily modified. 


First of all I need to add in the right image and remove the buttons. 

Then add in the right text and headline, 

Then once that is done I need to create a ground and then add them into the right 

responsive grid container that will make sure they are fully responsive and 
centered. 

Once that is done then I need to polish it up and make sure the image 

and text are all in the right place. 

Once that is done then I'll work on polishing the image text 

and then polishing the landing page. 

Once that is done then I'll make the text elements for each page and then I'll 

assemble the components and the pages. 

Once that is done I'll do the effects and the routing. 


And once that is done the website will be ready for launch after some polishing. 

Okay so let's get started with the MUI Card. 

Okay so now for the most part the card has been properly modified. 

So let's move onto the polishing up the Image Text card variations and then 

once that is done I can move onto the landing page. 






*/


import Image from 'next/image';
import React from 'react'

import BluePrints from '../assets/BluePrints.jpg'; 
import { Typography } from '@mui/material';
import '../Styles/TextImage.css'; 

import '../Styles/RightTextImage.css'; 


function RightImage() {
  return (

    <div id='right-background-container' >
    
    {/* Add in the main component container here  */}
    
    <div id='right-component-container' >
    
    <div id='right-component-sub-container' >
    
    {/* Add in the list to organise and arrange the component */}
    <ul id='right-component-section-list'>
    
    
   
    <li id='right-list-component-item' >
    
    
    {/* No styling so far  */}
    <div id='right-image-section-container' >
    
    {/* Add in the sub-container here  */}
    <div id='right-image-sub-container'  >
    <Image
    src={BluePrints}
    id='right-image'
    width={600}
    height={1200} 
    alt='alt'
    style={{borderRadius: '25px'}}
    
    /> 

    
    </div>
        
    </div>
        

    </li>
    
    
    <li id='right-text-list-item'  >
    
    {/* Add in the text section container here  */}
    <div id='right-text-section-container'  >
     
    <div id='right-text-section-sub-container' >
    
    
    
    {/* Add in the Text container here  */}
    <div id='right-text-section-block-container' >
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id='right-text-section-container' > 
    <Typography id='right-text-section-typography' >
    <h1 id='right-text-section-header'>
      Right Image 
    </h1>
    </Typography>
    <div id='right-top-text-container'  >
    
    {/* Add in some extra text here  */}
    <div id='right-lorem-container' >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corporis exercitationem eius. Impedit, quaerat veritatis voluptas distinctio ducimus tempore error molestias voluptatem, illo ullam perspiciatis laboriosam, quam sapiente aperiam sequi?
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur sint quibusdam animi vero repellat, voluptas culpa dolore fuga adipisci!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, error?
    
    </div>
    
    
    
    Renewal’s values are what we do alongside what we believe. 
    {/* <div id='right-bottom-text-container' >
    Read more about our values here.
    </div> */}
    </div>

    </div>  

    </div>
    
    {/* Text Sub Container  */}
    </div>

    {/* Text Section Main Container */}
    </div>

        
    </li> 
    
    
    <li id='right-text-list-item-backup'  >
    
    {/* Add in the text section container here  */}
    <div id='right-text-section-container'  >
     
    <div id='right-text-section-sub-container' >
    
    
    
    {/* Add in the Text container here  */}
    <div id='right-text-section-block-container-backup' >
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id='right-text-section-container' > 
    
    <Typography id='right-text-section-typography' >
    <h1 id='right-text-section-header-backup'>
        Our Values 
    
        
    </h1>

    </Typography>


    <div id='right-top-text-container-backup'  >
    
    <div id='top-right-text-backup' >
    Renewal’s values are what we do alongside what we believe. 
    </div>
    <div id='right-bottom-text-container' >
    Read more about our values here.
    </div>
    </div>

        
    </div>  
        
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

      
      {/* Background Container  */}
    </div>
  );
  
}

export default RightImage
