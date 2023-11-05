
'use client'


import Image from 'next/image'

import Footer from '../app/footer/Footer'; 

import ContactForm from '../app/ContactForm/ContactForm'; 

import {NewContact} from '../app/Components/NewContact'; 


import {Content} from '../app/Components/Content'; 

import BasicModal from '../app/Components/Modal'; 
import { Basic } from 'next/font/google';

import HamburgerMenu from '../app/Components/HamburgerMenu'; 
import Drawer from '../app/Components/Drawer'; 
import  CTAComponent  from '../app/Components/CTAComponent'; 
// import Slider from '../app/Components/Slider'; 
import ImageText from '../app/Components/ImageText'; 
import React, { useRef } from "react";


import NewNav from './Components/NewNav'; 

import {NewSignupModal} from './Components/NewSignupModal'; 
import GiveCTA from './Components/GiveCTA'; 
import Ministries from '../app/Components/Ministries';  
import Values from '../app/Components/Values'; 
import Vision from '../app/Components/Vision'; 
import RightTextImage from '../app/Components/RightTextImage';


export default function Home() {

  const scrollRef = useRef(null);


  return (

    <main  className=" p-0 m-0 " style={{overflow: 'hidden'}} >
    
    {/* Add in the content here  */}
    
    {/* <Content/>  */}
    

      
    {/* <GiveCTA/>  */}
    
     </main>
  );
  
}
