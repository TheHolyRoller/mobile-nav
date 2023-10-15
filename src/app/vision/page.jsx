'use client'  


import React from 'react'

import MuiCard from '../Components/MuiCard'; 

import VisionHero from '../Components/Heros/VisionHero'; 


import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { Card, Row, Text } from "@nextui-org/react";


import vs from '../Styles/VisionText.module.css';


function Vision() {
  return (
    <div id={vs.visionmaincontainer} >
    <VisionHero/>
    
    
    
    <div id={vs.visionsubcontainer} >
    
    <div id={vs.visionheadlinecontainer} >
    
    <div id={vs.visionheadline} >
    
    
    We are Renewal
    
    </div>
      
    </div>
    
    <div id={vs.visionfirsttextcontainer}>
    
  
    
    <div id={vs.visionfirsttext} >
    ‘We Are Renewal’ is more than a tagline; it is an identity. We seek to engage you to action, to take ownership and to play your part on our team. There is no sitting on the sidelines, no shouting from the stands, but we are all shaped for serving God through action.

We have a vision to see a large, strategic, multicultural, generational, family church engaging and thriving in the heart of the UK across various locations.

We will be vibrant and dynamic, strong in Spirit and Word, renewing lives and growing as Christians. To be great at Renewal is to serve.

Together we will be a welcoming place for you to bring a friend, but we will be uncompromising so that all will know what we stand for.

We will be large enough for gatherings to have great impact and small enough for relationship, so each one can belong and find their place – where each one finds the space to fulfil the call that God has for their lives.
      
      
    </div>
      
    </div>
    
    <div id={vs.visionfirstversecontainer}>
    <div id={vs.missionfirsticon}> 

<FormatQuoteRoundedIcon id={vs.visionfirsticon} style={{ transform: 'rotate(1turn)', fontSize: '4.5rem', color: '#00c670'}}     /> 


</div>
    <div id={vs.visionfirstverse}>
    He makes the whole body fit together perfectly. As each part does its own special work, it helps the other parts grow, so that the whole body is healthy and growing and full of love.
Ephesians 4:16 (NLT)
      
    </div>
      
      
    </div>
    
    
    <div id={vs.visionsecondtextcontainer}>
    
    <div id={vs.visionsecondtext}>
    What has been written to this point has been an incredible chapter of God’s favour and blessing. We believe now there are new pages to be scribed.

This is not singular in authorship. Many can make their mark and imprint in the annals of Renewal’s history. We fondly remember many who have gone before us and look to the many that are still to come. What is certain about the future (but often impossible to predict) is that God’s plan is for us to accomplish something together – as a local church and with wider partnerships.
    
      
    </div>

    
    </div>
    
    
    <div id={vs.visionsecondheadlinecontainer}>
    
    <div id={vs.visionsecondheadline}>
    Vision Sunday is coming on the 1st October 2023
      
    </div>
      
    </div>
    
    <div id={vs.visionthirdtextcontainer}>
    
    <div id={vs.visionthirdtext}>
    Vision Sunday will be on 1st October where we will be celebrating all that God has done in the last 12 months and looking forward to what is in store for the next 12 months.  We will be bringing all locations together and the gathering will start at 11am. Don’t forget your packed lunch so we can celebrate after the gathering.
    
      
    </div>
    <div id={vs.visionthirdspan} >
See you there at 11AM – Renewal Solihull
    </div>
    
    </div>
    
    <div id={vs.visioncardsectioncontainer}>

{/* Add in the Headline container here */}

<div id={vs.visioncardheadlinecontainer}>

{/* Add in the Main headline here  */}
<div id={vs.visioncardheadline} >
Vision, Values & Vision

</div>
<div id={vs.visioncardsubheadlinecontainer}>
<div id={vs.visioncardsubheadline}>

Read more about our vision, values & vision
    
</div>
</div>


{/* Add in the subheadline container here  */}



</div>

<div id={vs.visioncardcontainer}>


<div id={vs.visioncarditem}  >
<MuiCard /> 
</div>

<div id={vs.visioncarditem}>
<MuiCard  /> 
</div>


<div id={vs.visioncarditem} >
  
<MuiCard  /> 
</div>


  
</div>

{/* Vision card container */}
</div>


    </div>
    </div>
  );
  
}

export default Vision
