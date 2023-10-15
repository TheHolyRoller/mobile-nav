'use client'


import React from 'react'


// Import the Cards here 
/**
 * 
 * @returns 
 import { Card1 } from '../Components/Cards/Card1.js'; 
import { Card2 } from '../Components/Cards/Card2.js'; 
import { Card3 } from '../Components/Cards/Card3.js'; 
import { Card4 } from '../Components/Cards/Card4.js'; 
import { Card5 } from '../Components/Cards/Card5.js'; 
 
 
 */
 
 import { Card1} from '../Components/Cards/Card1'; 
 import { Card2} from '../Components/Cards/Card2'; 
 import { Card3} from '../Components/Cards/Card3'; 
 import { Card4} from '../Components/Cards/Card4'; 
 import { Card5} from '../Components/Cards/Card5'; 
import { Card } from '@nextui-org/react';
 
 
//  Import the alternative cards here 
import AlternativeCard1 from '../Components/Cards/AlternativeCard1'; 
import AlternativeCard2 from '../Components/Cards/AlternativeCard2';

// Import the stylesheet here 
import '../Styles/CardRenderer.css'; 




function CardRenderer() {

      const width = window.innerWidth;
      
      const breakpoint = 620;
    
  return (

    //  Add this into a stylesheet 
    // style={{width: '92vw', margin: '0 auto'}
    <div id='main-renderer-container' style={{width: '92vw', }}  >
        
 {/* Add in the Cards here with conditional rendering  */}
    {/* Add in the fourth Card here  */}
    
    
    {/* Add in alternative Cards One here instead  */}
    {width < breakpoint ? <Card1 /> : <Card4 />}
    
    {/* {width < breakpoint ? <Card1/> : <Card5/> } */}
      
      
      
    </div>
  )
}

export default CardRenderer
