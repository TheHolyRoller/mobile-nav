'use client'



import {  Spacer } from "@nextui-org/react"
import { Box } from "./Box.js"
import Image from "next/image.js";

import Worship from '../assets/Worship.jpg'; 


import '../Styles/content.css'; 
import {TextCard1} from '../Components/Cards/TextCard1.js'; 

import { LocationCity } from "@mui/icons-material"; 

import { FaSearchLocation } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

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


// Import the Card renderer here 
import CardRenderer from '../Components/CardRenderer.jsx'; 
import AlternativeCard2 from "./Cards/AlternativeCard2.jsx";  



import Footer from '../footer/Footer.tsx'; 
import SingupModal from '../Components/SingupModal.jsx'; 

import {NewSignupModal} from '../Components/NewSignupModal.js'; 

import HeroComponent from '../Components/HeroComponent.jsx'; 

// import YouTubeCTA from '../Components/YoutubeCTA.jsx'; 
import ImageText from "./ImageText.jsx";
import TextCard2 from '../Components/Cards/TextCard2.js'; 
import NewCard from '../Components/Cards/NewCard.jsx'; 

import GivingHero from "./GivingHero.jsx";

import HomeHero from '../Components/Heros/HomeHero.jsx'; 



export const Content = () => (



   <Box id="box" css={{px: "$0", mt: "$0", "@xsMax": {px: "$0"}}} style={{outline: '0px solid red'}} > 
  
  <HomeHero/> 

  <section id="mission-section" style={{position: "relative", zIndex: "20"}} >
  
  <Text id="mission-text" >
  
  We are Renewal, a dynamic, family church with people of all ages

  </Text>

    <Text id="mission-paragraph" css={{$$textColor: "white"}} >
    Renewal has a rich history spanning over 50 years and today is 
    home to many people from across the Midlands. We are a dynamic, 
    family church with people of all ages and from all walks of life and 
    you are welcome to join us.
    
    
    {/* Add in the modal in here  */}
  
  
  {/* <NewSignupModal/>  */}
  
  
  
    <SingupModal/> 


    </Text>
    
    
  </section>
  
  
  {/* Add in the Cards section here  */}
  


  <article id="text-cards">
  
  
  
  {/* Add in the Headline text container here  */}
  
  {/* <Text id='great-commission-container' > */}
    <div id='content-main-headline'   >
      Fulfilling the Great Commission 
    </div>
  {/* </Text> */}


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
        {/* <CardRenderer/> */}
        <Card4/> 
        
        
      </Grid>
      <Grid xs={12} sm={5}>
        {/* Add in alternative Card2 here  */}
        {/* <AlternativeCard2/>  */}
        
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

 
  {/* Add in the Grid Layout here   */}
  <Grid.Container gap={4} justify="center">
      <Grid xs={12} sm={3.5}>
        {/* <NewCard/>  */}

        <TextCard1 id='TextCard1'  />
      </Grid>
      <Grid xs={12} sm={3.5}>
        <TextCard1 id='TextCard1'  />
      </Grid>
      
      <Grid xs={12} sm={3.5}>
        <TextCard1 id='TextCard1'  />
      </Grid>
     
     
     
    </Grid.Container>
    
    
    {/* Add in the image text here  */}
    
    
    
    
  </article>
  
  </Box>
);
