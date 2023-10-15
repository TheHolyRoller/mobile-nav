'use client'
import React from 'react'



// Import the stylesheet here 
import val from  '../Styles/Values.module.css';

import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import MuiCard from '../Components/MuiCard';

import BeliefsHero from '../Components/Heros/BeliefsHero'; 


function Values() {
  return (
    <div  id={val.valuesContainer} >
    <BeliefsHero/> 
    
    
    <div id={val.valuessubcontainer}>
    
    <div id={val.valuesfirsttextsection} >
    
    <div id={val.valuesfirstheadlinecontainer} >
    <div id={val.valuesfirstheadline}>
    
    
    Renewal’s values are what we do alongside what we believe
    </div>

    </div>
    
    
    <div id={val.valuesfirsttextsectioncontainer} >
    
    <div id={val.valuesfirsttext} >
    Values are defined as our core beliefs and stimulate how we behave, act, dream and plan. Every organisation and church has a culture and a set of values. Some intentional. Some accidental. Some aspirational. They are a combination of what you create and what you allow.
    
    
    </div>
    
    <div id={val.valuesfirsttextsecondrow} >
    Values, in short, are what matters most. Healthy churches do not happen by accident. What we value determines what we do. What we believe determines how we behave. To hold to the highest standards of representing the name of Jesus, The Core Four will lead our redemptive values to the heart of the nation.
    
    </div>
    
    </div>
        
        
    </div>
    
    <div id={val.valuessecondtextsectioncontainer}>
    
    <div id={val.valuessecondheadlinecontainer} >
    
    <div id={val.valuessecondheadline} >  
    
    We are Generational
        
    </div>
    
        
    </div>
    
    <div id={val.valuessecondtextsection} >
    God works in each generation. We are here today as part of something that started before us and will continue way beyond our time. In seeking to honour the past and serve the future, we endeavour to bridge relationships across the life of the church. It takes great effort to interact. Encouragement, honouring, being sacrificial and learning how to release and receive, have a big role to play. We all have a duty to ensure a continuation of the church for generations to come.
    <div id={val.valuessecondtextrow} >
    
    The kingdom of God is hugely interdependent and reliant on each generation having the heart to encourage whatever is coming next. We are all the result of the faithfulness and commitment of those who have gone before and want the church to go on to achieve much greater things.
    
    
    </div>
    </div>
        
    </div>
    
    {/* Add in the verse section container here  */}
    
    <div id={val.valuesversecontainer} >
    
    {/* Add in the icon here  */}
    <div id={val.valuesiconcontainer} >
    
    <div id={val.valuesfirsticon} >
    
    
    <FormatQuoteRoundedIcon id={val.valuesfirsticon} style={{ transform: 'rotate(1turn)', fontSize: '4.5rem', color: '#00c670'}}     /> 
    
      
      
    </div>
      
    </div>
    
    
    {/* Add in the verse here  */}
    <div id={val.valuesverse}>
    Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations, for ever and ever! Amen. Ephesians 3:2021 (NIV)

    </div>
    
    
    </div>
    
    
    <div id={val.valuesthirdtextrow}>
    
    <div id={val.valuesthirdheadlinecontainer} >
    <div id={val.valuesthirdheadline}>
    We are Family

    </div>
    
    </div>
    
    <div id={val.valuesthirdtextcontainer}>
    <div id={val.valuesthirdtext}>
        
    <div id={val.valuesthirdtextsubone}>
    part of God’s family our relationships with each other matter deeply, both to us and to God. This is why we seek to create an environment where each of the family can grow, develop and find their place. We are united; loyal to the family name and committed to building upon the foundations of our past.
    

    
    </div>
    
    <div id={val.valuesthirdtextsubtwo}>
    It is our hope, that by actively demonstrating what it means to be part of God’s family, we will in turn be a witness to others about what it means to follow Jesus. Through each of our locations we get the opportunity to affect the world around us, influence others and be relevant to human need.
    
    
    </div>
    
    
    
    
    </div>
    </div>
    
    
    {/* Add in the verse container here  */}
    <div id={val.valuessecondversecontainer}>
    
    <div id={val.valuessecondverseiconcontainer}>
    <div id={val.valuessecondverseicon}>
    
    <FormatQuoteRoundedIcon id={val.valuessecondicon} style={{ transform: 'rotate(1turn)', fontSize: '4.5rem', color: '#00c670'}}     /> 
    
    
    
    </div>
    
    </div>
    
    <div id={val.valuessecondverse}>
    You are members of God’s family. Together, we are his house, built on the foundation of the apostles and the prophets. And the cornerstone is Christ Jesus himself. Ephesians 2:1920 (NLT)
    </div>
      
      
    </div>
    
    </div>
    
    
    <div id={val.valuescardsectioncontainer}>
    
    
    {/* Add in the Headline container here */}
    
    <div id={val.valuescardheadlinecontainer} >
    
    {/* Add in the Main headline here  */}
    <div id={val.valuescardheadline}>
    Values, Values & Vision

    </div>
    <div id={val.valuescardsubheadlinecontainer}>
    <div id={val.valuescardsubheadline}>
    
    Read more about our values, values & vision
        
    </div>
    </div>
    
    {/* Add in the subheadline container here  */}

    
    
    </div>
    
    <div id={val.valuescardcontainer}>

    
    <div id={val.valuescarditem}  >
    <MuiCard /> 
    </div>
    
    <div id={val.valuescarditem} >
    <MuiCard  /> 
    </div>
    
    
    <div id={val.valuescarditem} >
      
    <MuiCard  /> 
    </div>
    
    
      
    </div>

    
    </div>
    
    
    
        
    </div>
      
    </div>
  );
  
}

export default Values
