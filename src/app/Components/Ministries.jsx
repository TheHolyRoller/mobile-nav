'use client'
import React from 'react'
import mi from '../Styles/Ministries.module.css';

import Image from 'next/image';
import Blue from '../assets/BluePrints.jpg'; 

import MinistriesHero from '../Components/Heros/MinistriesHero'; 



function Ministries() {
  return (
    <div id={mi.ministrymaincontainer}>
      <MinistriesHero style={{position: 'relative', zIndex: '20000', marginBottom: '300'}}  /> 
    
    
      
    <div id={mi.ministrysubcontainer}>
    
    
    {/* Add in the Top Section Cards Container here */}
    
    <div id={mi.ministrytopsectioncontainer}>
    
    <div id={mi.ministrymainheadlinecontainer}>
    <div id={mi.ministrymainheadline}>
    
    {/* Add in the main Ministries Headline here  */}
    We are proud to support and partner with ministries birthed within our community and outside of it, all united with one goal: to bring hope to the hopeless and healing to broken places.  
    


    </div>
    </div>
    
    <div id={mi.ministrycardsheadlinecontainer}>
    <div id={mi.ministrycardsheadline}>
    
    {/* Add in the Cards Scripture Verse here  */}
    "Go into the world and announce the message of God's good news to all people." Mark 16:16
    
    
    </div>

    </div>
    
    
    {/* Add in the ministry Cards container here  */}
    
    <div id={mi.ministrycardscontainer}>
    
    <ul id={mi.ministrycardsgridcontainer}>
    
    {/* Add in each Grid item here which will just be a regular Image Card  */}
    
    {/* Add in the First Grid Item here  */}
    
    <li id={mi.ministrygriditemcard} className="mycard"  >
    
    {/* Add in the Card container here  */}
    
    <div id={mi.ministrygridcard }>
    
    
    {/* Add in the image Container here  */}
    
    <div id={mi.ministrygridcardimage}>
    
    <Image 
    
    id={mi.ministryfirstcardimage}
    src={Blue} 
    width={500}
    height={300}    
    alt='not working'
    /> 
    
    </div>
        
    </div>
    
    </li>
    
    
    <li id={mi.ministrygriditemcard}>
    
    <div id={mi.ministrygridcard}>
     
     <div id={mi.ministrygridcardimage}>
    
    <Image 
    style={{outline: '0px solid lime', height: "303px", width: '456px',  }}
    id={mi.ministryfirstcardimage}
    src='data:image/jpeg;base64,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' 
    width={500}
    height={300}    
    alt='not working'
    /> 

    </div>
    </div>
    
    </li>
    </ul>
    
    
    </div>
    </div>
    
    
    {/* Add in the ministry Text container section here  */}
    
    <div id={mi.ministrytextsectioncontainer}>
    
    <div id={mi.ministrytextsectionsubcontainer}>
    
    
    {/* Add in the main Headline container here  */}
    
    <div id={mi.ministrytextheadlinecontainer}>
    <div id={mi.ministrytextheadline}>
    
    {/* Add in the main headline here  */}
    Discipleship

    </div>
    </div>
    
    
    {/* Add in the Grid container for the Text blocks here  */}
    

    <div id={mi.ministrytextgridcontainer}>
    {/* Turn this into a grid container */}
    
    <div id={mi.ministrygridlist}> 

    <div id={mi.ministrygridlistitemone}>
    
    {/* Add in the first text container here  */}
    
    <div id={mi.ministryfirsttextcontainer}>
    
    {/* Add in the headline container here  */}
    <span id={mi.ministryfirsttextheadline}>
      
    Women of Purpose

    </span>
    
   
    
    <div id={mi.ministryfirsttext}>
    Women…..loved beyond measure, God’s chosen, precious treasure, strategically created by God to bring heaven to earth in our family, church, relationships, workplace and world.  This ministry is led by Amy Stoehr and her team of excited leaders and is celebrating almost 30 years of gathering, encouraging, equipping, mobilizing and uniting God’s brilliant women of every age, culture and background. You are invited!

    </div>
    
    
    {/* Add in the text container for the lower spaced out sections */}
    
    <div id={mi.ministryfirsttext}lower>
    
    Monthly Monday Night Studies: 6:308:00pm at The River. New Summer Series.
      
      
    </div>
    <div id={mi.ministryfirsttextlowertwo}>

    Women’s Connect:  Lead or Join a women’s Connect Group on prayer, young moms, career, exercise, dinner……you name it!
    
      
    </div>
    
    
    <div id={mi.ministryfirsttextlowerthree}>
    
    
    {/* Add in the headline container here  */}
    
    <div id={mi.ministryheadlinelowerthree}>
    
    Valor Men 

    
    </div>
      
    As part of the Valor Men’s Ministry, you will have the opportunity to grow, with other men, in a strong and committed walk with Jesus Christ. You will be inspired to become all that God has created you to be. We invite you to join us monthly for our Men’s Night on First Monday's, and weekly in our Men’s Connect Groups. We are participating in the Promise Keeper’s Movement this July and beyond
    
      
      
    </div>
    
    
    <div id={mi.ministryfirsttextlowerfour}>
    
    <div id={mi.ministryheadlinelowerfour}>
    
    Wedding Venue and Marriage Ministry
      
    </div>

    {/* Add in the text here  */}
    As the marriage goes, the family goes.  As the family goes, the church goes.  As the church goes, the community goes.  As the community goes, so the nation goes.  Couples Connect groups, marriage events and conferences and marriage resources help to strengthen the marriages and families of our church.  An important piece of our marriage ministry here at the church is our wedding venue.  Please view the link for our wedding venue website for a complete list of our services.
    

    
    </div>
    
      
      
      
    </div>
    
    
        
  {/* Ministry Grid List Item */}
    </div>
    
  
    <div id={mi.ministrygridlistitemtwo}>
    
    {/* Add in text container here  */}
      
    <div id={mi.ministryitemtwotextcontainer}>
    
    <div id={mi.ministryitemtwoheadline}>
    
    Connect Groups
    
      
    </div>
    <span id='ministryitemtwodash' >

    {/*  */}

    </span>
    
    <div id={mi.ministryitemtwotext}>
    
    River Connect Groups are a great way to make new friends, build strong relationships and grow spiritually in smaller groups on a regular basis. Whether it is through studying the Bible together, serving alongside one another, or sharing a common interest, you will enjoy the blessing of sharing life together at The River Connect Groups!  Sign up at the River Connect Center Sundays.
    
      
      
    </div>
    
    
      
    </div>
    
    
    {/* Add in the Second Text Container here  */}
      
      
    <div id={mi.ministryitemtwosecondtextcontainer}>
    
    <div id={mi.ministryitemsecondtwoheadline}>
    
    River Life Classes
    
      
    </div>
    <span id={mi.ministryitemsecondtwodash}>
    {/*  */}

    </span>
    
    <div id={mi.ministryitemtwosecondtext}>
    
    The River Life Track classes were designed with you in mind, and how we can make a difference united together.  Whether you are new to The River or have been attending for a while, you will love these four classes.  In the first class, we will share the history and vision of the church (101),  the second and third classes cover the foundations of the Christian faith and what we believe (102, 103) and the fourth covers how you and your family can connect and flourish as valued members of the church. (104). Classes meet after church Sundays.  Register at the Connect Center. 
    
    
    
      
      
    </div>

    
    
    
    
    
    
    {/* Add in the third text container here  */}
      
      
    
    
    
    </div>
    
    
    <div id={mi.ministryitemtwothirdtextcontainer}>

    <div id={mi.ministryheadlinethirdtext}>
      
    River Kids

    </div>
    
    {/* Add in the text here  */}
      
    We believe that teaching children to love God and others takes place in both the home and in the church. For this reason we seek to partner with parents (the greatest teachers of all) and teachers in a plan to present amazing Sunday lessons that are reenforced throughout the week.  Through fun experiences, meaningful worship, understandable teaching and ministry that encourages kids to participate, we present Bible teaching in a powerful, relevant way, creating moments which children will never forget. Our goal is to raise up a generation of purpose, passion, prayer and power…children who know their God, know they are loved and are ignited to love this world.
    
      
      
      
      
    </div>
    
    
        
  {/* Ministry Grid List Item */}
    </div>
        
        
     {/* Ministry Grid List  */}
    </div>
        
    
  
    
        
        
    {/* Ministry Text Grid container  */}
    </div>
    
    
    
    {/* Ministry Text Sub container  */}
    </div>

    {/* Ministry Text Section container */}
    </div>
        
  {/* Ministry Sub container */}
    </div>
    
    {/* Ministry main container  */}
    </div>
  );
  
  
}

export default Ministries
