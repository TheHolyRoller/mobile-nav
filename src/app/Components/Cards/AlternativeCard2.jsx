'use client'



import React from 'react'


import {Card2} from '../Cards/Card2'; 
// Add in the imports and the code here to conditionally render the right cards here 
import {Card4} from '../Cards/Card4'; 

// Import the Stylesheet here 




function AlternativeCard2() {

         const width = window.innerWidth;
      
      const breakpoint = 620;
    
    
    
  return (
    <div id='alternative-card-two-container' style={{width: '92vw'}}  >
    {width < breakpoint ? <Card2/> : <Card4/> }
      
    </div>
  )
}

export default AlternativeCard2
