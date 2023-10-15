'use client'


/**


*/



import React from 'react'

import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';




import { Card, Row, Text } from "@nextui-org/react";
import TextCard1 from '../Components/TextCard1'; 
import MuiCard from '../Components/MuiCard'; 

import {  Col,  Button,  } from "@nextui-org/react";

import ss from '../Styles/MissionText.module.css';
import MissionHero from '../Components/Heros/MissionHero'; 




function Mission() {
  return (
    <div id={ss.textcomponentcontainer}>
    
    
    <MissionHero/> 
    
    <div id={ss.missionsubcontainer}>
    
    <div id={ss.missionheadlinecontainer}>
    
    <div id={ss.missionheadline}>
    We exist to lift up the name of Jesus    </div>
      
      
      
    </div>
    
    
    {/* <div id='missionheadlinetextcontainer' >
    
    <div id='missionheadlinetext' >
    ‘We Are Renewal’ is more than a tagline; it is an identity. We seek to engage you to action, to take ownership and to play your part on our team. There is no sitting on the sidelines, no shouting from the stands, but we are all shaped for serving God through action.

We have a mission to see a large, strategic, multicultural, generational, family church engaging and thriving in the heart of the UK across various locations.

We will be vibrant and dynamic, strong in Spirit and Word, renewing lives and growing as Christians. To be great at Renewal is to serve.

Together we will be a welcoming place for you to bring a friend, but we will be uncompromising so that all will know what we stand for.

We will be large enough for gatherings to have great impact and small enough for relationship, so each one can belong and find their place – where each one finds the space to fulfil the call that God has for their lives.

    </div>
      
      
    </div> */}
    
    <div id={ss.missionversecontainer}>
    
    <div id={ss.missionversesubcontainer}>
    
    <div id={ss.firsticon}> 

    <FormatQuoteRoundedIcon id={ss.firsticon} style={{ transform: 'rotate(1turn)', fontSize: '4.5rem', color: '#00c670'}}     /> 
    
    </div>
    
    
    <div id={ss.missionfirstverse}>
    
    “And I, when I am lifted up from the earth, will draw all people to myself.”
John 12:32 (ESV)
      
    </div>

    
    </div>
    
      
    </div>
    
    
    
    <div id={ss.missiontextcontainer}>
    
    <div id={ss.missiontextsubcontainer}>
    
    <div id={ss.missionfirsttext}>
    Renewal exists to lift up the name of Jesus. We lift Jesus up in our words, our actions, by our worship, by preaching the gospel, through the power and presence of the Spirit, through acts of giving and acts of service. We lift up Jesus’ name in our Christian life example; wherever we are, whoever we are with.
    
      
    </div>
      
      
    </div>
      
      
    </div>
    
    
    
    <div id={ss.missionsecondversecontainer}>
    
    
    {/* Add in the Icon here  */}
    <div id={ss.quotationicon}>
    <FormatQuoteRoundedIcon id={ss.quotationicon} style={{ transform: 'rotate(1turn)', fontSize: '4.5rem', color: '#00c670'}} /> 
    </div>
    
    
    <div id={ss.missionsecondversesub}>
    
    <div id={ss.missionsecondverse}>
    And His name will be the hope of all the world.
Matthew 12:21 (NLT)

    
    
    
    </div>
      
    </div>
    
      
    </div>
    
    
    <div id={ss.missionsecondtextcontainer}>
    
    <div id={ss.missionsecondtextsub}>
    
    <div id={ss.missionsecondtext}>
    The mission will never change – ‘the name of Jesus is to be lifted up.’ The good news of the gospel that Jesus saves will continue to be proclaimed and demonstrated in the heart of the nation through us. We do this so many can have the same hope that we have. The present cultural currents mean that every individual today is confronted with a staggering number of ideologies, lifestyles and faith options, all competing for their attention; we want the name of Jesus Christ to be known. Although the current trend is that all options are equally valid and equally true, we believe that the name of Jesus ascends above all and is the only way to God.
    
    </div>
      
      
    </div>
      
      
    </div>
    
    
    <div id={ss.missionthirdversecontainer}>
    <div id={ss.thirdicon}> 

    <FormatQuoteRoundedIcon id={ss.thirdicon} style={{ transform: 'rotate(1turn)', fontSize: '4.5rem', color: '#00c670'}}     /> 
    

    </div>
    
    <div id={ss.missionthirdversesub}>
    
    <div id={ss.missionthirdverse}>
    
    Therefore God also has highly exalted Him and given Him the name which is above every name, that at the name of Jesus every knee should bow, of those in heaven, and of those on earth, and of those under the earth.
Philippians 2:910 (NKJV)

      
      
    </div>
    
      
      
    </div>
      
      
    </div>
    
    
    
    <div id={ss.missionthirdtextcontainer}>
    
    <div id={ss.missionthirdtextsub}>
    
    <div id={ss.missionthirdtext}>
    
    For every person, we believe that it is in Jesus they discover who they really are. Without this clear purpose we really have no foundation on which to base life decisions, as we tend to make choices based upon circumstances, desires or pressures. Whilst we may all have different passions, as followers of Jesus we all have the same purpose; to lift up the name of Jesus in all we do.

We see our church being so dynamic in worship and clear in lifestyle, that others will be drawn to the name of Jesus. Once drawn, they can have life and hope in His name. We would love to see thousands more added to the church in the years ahead.

From the outset, we declare our clear intention to exceed the barrier of 2000 regular attenders to our services across all our locations each and every week.


    
    </div>
      
      
      
    </div>

    
    
    </div>
    
    
      
      
    </div>
    
    
    {/* Add in the Cards container here  */}
    
    <div id={ss.missioncardsectioncontainer}>

    {/* Add in the Headline container here */}
    
    <div id={ss.missioncardheadlinecontainer}>
    
    {/* Add in the Main headline here  */}
    <div id={ss.missioncardheadline}>
    Mission, Values & Vision

    </div>
    <div id={ss.missioncardsubheadlinecontainer}>
    <div id={ss.missioncardsubheadline}>
    
    Read more about our mission, values & vision
        
    </div>
    </div>
    
    {/* Add in the subheadline container here  */}

    
    
    </div>
    
    <div id={ss.missioncardcontainer}>

    
    <div id={ss.missioncarditem}>
    <MuiCard /> 
    </div>
    
    <div id={ss.missioncarditem}>
    <MuiCard  /> 
    </div>
    
    
    <div id={ss.missioncarditem}>
      
    <MuiCard  /> 
    </div>
    
    
      
    </div>
   
   {/* Mission card container */}
    </div>
   
    
    
    {/* Add in the image text here  */}
    
    
    
      
    </div>
  );
  
}

export default Mission
