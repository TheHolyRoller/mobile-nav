'use client'

/** 

Okay so let's just talk things through. 


First of all I have a basic template for the footer. 

There is still a lot of work to be done for the contact form. 

There needs to be a lot of polishing, styling and the functionality still needs to be 

added. 

Now I'm working on the footer. 

So basically I need to follow the theme of the footer provided by the website. 

Overall there will be three main sections. The first section will be the contact details. 

And then under the contact section will be the social media icons. 


Then after that there will be a stack of navigation buttons to the other pages. 


Then after that the newsletter signup form will be constructed. 

 

Okay so let's just talk things through. 

First of all I need to finish of the footer and get things in the right place and get 
things looking presentable. 


Then I need to get it to a point where it's responsive. 

Once that is done then I'll move onto the contact form, the navbar, header and then make the 
mobile navbar. 



Okay so that makes sense. 

The tasks for now are to get everything in the right place on the footer and get the 
proportions and sizing correct. 

Once that is done then I'll make it responsive. Styling will be left for the other stages 
of the project. 

Tasks: 
1. Get bottom section in the right place 
2. Add in icons 
3. Fix Spacing for the different sections and text elements 
4. Fix Sizing of main sections as well as text and sub-sections 




*/

import {  Spacer } from "@nextui-org/react"
import { Box } from "./Box.js"
import Image from "next/image.js";

import Worship from '../assets/Worship.jpg'; 
// import { relative } from "path/posix";
import '../Styles/content.css'; 
import {TextCard1} from '../Components/Cards/TextCard1.js'; 
// import ContactForm from '../ContactForm/ContactForm.jsx/index.js'; 

import { LocationCity } from "@mui/icons-material"; 

import { FaSearchLocation } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
// import { FaLoca } from "react-icons/fa";

import { Grid } from "@nextui-org/react";
import { Card, Row, Text } from "@nextui-org/react";

import {  Col,  Button,  } from "@nextui-org/react";

import LocationOnIcon from '@mui/icons-material/LocationOn';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



import React from 'react'



import Link from 'next/link';
import { TypeFormatFlags } from 'typescript';

import { Typography } from '@mui/material';

import { Facebook } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';




// Import the Cards here 
import { Card1 } from '../Components/Cards/Card1.js'; 
import { Card2 } from '../Components/Cards/Card2.js'; 
import { Card3 } from '../Components/Cards/Card3.js'; 
import { Card4 } from '../Components/Cards/Card4.js'; 
import { Card5 } from '../Components/Cards/Card5.js'; 


import Footer from '../footer/Footer.tsx'; 

// import Footer from '../footer/page.jsx'; 




export const Content = () => (

  // <Box id="box" css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
   <Box id="box" css={{px: "$0", mt: "$0", "@xsMax": {px: "$0"}}} style={{outline: '50px solid red'}} > 
  
  {/* Add in the hero container here  */}
  
  
  {/* DO NOT REMOVE!!!!!!! */}
  <div id="hero-container">

{/* HERO IMAGE HERE IN CSS! */}

  </div>

 
  
  
  <text id="hero-text-container" >

    <h1 id="hero-headline" >
      We exist to lift up the name of Jesus! 
      
      
    </h1>
    
    {/* Add in the button here  */}
    <button id="hero-button" >
    Read Our Mission        
    </button> 
    
    
  </text>
  
  
  
  
  
  {/* Add in the Text About what we do here  */}
  
  <section id="mission-section" style={{position: "relative", zIndex: "20"}} >
  
  <Text id="mission-text" >
  
  We are Renewal, a dynamic, family church with people of all ages
    
    
  </Text>
  
  
    {/* Add in the history here  */}
    
    <Text id="mission-paragraph" css={{$$textColor: "white"}} >
    Renewal has a rich history spanning over 50 years and today is 
    home to many people from across the Midlands. We are a dynamic, 
    family church with people of all ages and from all walks of life and 
    you are welcome to join us.

    </Text>
    
    
  </section>
  
  
  {/* Add in the Cards section here  */}
  


  <article id="text-cards">
  
  
  {/* Add in the Headline text container here  */}
  
  <Text>
    <h1 style={{outline: '0px solid lime', display: "grid", placeContent: 'center', paddingBottom: '1rem', fontSize: "1.8rem", fontWeight: "800", color: "#00c670"}} >
      Fulfilling the Great Commission 
    </h1>
  </Text>

   {/* Add in the Grid Container here  */}
   <Grid.Container gap={3} justify="center">
      <Grid xs={12} sm={3}>

        <Card1 />
      </Grid>
      <Grid xs={12} sm={3}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={3}>
        <Card3 />
      </Grid>
      <Grid xs={12} sm={5}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={5}>
        <Card5 />
      </Grid>
    </Grid.Container>
    
    
    
    
    
    
  </article>
  
  
  
  
  <article id="card-section" style={{outline: "0px solid blue", marginTop: '3rem', textAlign: 'center'}} >
    
    {/* Add in the Headline container here  */}
    
    <div id="headline-container">
    
    <Text id="card-headline" style={{fontSize: "2rem", fontWeight: "900", color: "#00c670"}}  >
    Get Involved 
    </Text>
    
    
    <Text id="text-container" style={{color: "#888888"}}  >
      There are many ways you can get involved with the Renewal Family 
        
      </Text>
    </div>
    
    {/* Add in the text container here  */}
    
      
      
 
 
  {/* Add in the Grid Layout here   */}
  <Grid.Container gap={4} justify="center">
      <Grid xs={12} sm={3.5}>
        <TextCard1 />
      </Grid>
      <Grid xs={12} sm={3.5}>
        <TextCard1 />
      </Grid>
      <Grid xs={12} sm={3.5}>
        <TextCard1 />
      </Grid>
     
    </Grid.Container>
    
  </article>
  
  </Box>
);
