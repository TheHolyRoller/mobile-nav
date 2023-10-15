'use client'
import React from 'react'



import { Navbar } from "@nextui-org/react";
import {  Button, Link, Text, useTheme } from "@nextui-org/react";

import { Layout} from '../Components/Layout';

import { AcmeLogo} from '../Components/AcmeLogo'; 


import Worship from '../assets/Worship.jpg'; 
import  NewModal  from '../Components/NewModal'; 
import { FaHeart, FaShoppingCart } from 'react-icons/fa';



function Nav() {

  return (

// {/* <Layout> */}

<Navbar style={{backdropFilter: "transparent", width: '100vw' }}  css={{

      $$navbarBackgroundColor: "transparent",
      
}}
className="navbar"    shouldHideOnScroll  variant="sticky">
  <Navbar.Brand>
    <AcmeLogo />
    <Text b color="inherit" hideIn="xs">
      ACME
    </Text>
  </Navbar.Brand>
  <Navbar.Content hideIn="xs" variant="underline" style={{outline: "0px solid lime"}} >

  </Navbar.Content>
  <Navbar.Content style={{outline: "0px solid red"}} >
    <Navbar.Link color="inherit" href="#">
      <FaHeart/>
      <span>
        Give 
      </span>

    </Navbar.Link>
    <Navbar.Link color="inherit" href="#">
      {/* Login */}
      <FaShoppingCart style={{color: ''}} />
      <span>
        Shop
      </span>
      
      <NewModal/>
      
    </Navbar.Link>
    <Navbar.Item>
      <Button auto flat as={Link} href="#">
      
      
      </Button>
    </Navbar.Item>
  </Navbar.Content>
</Navbar>

// </Layout>


  );
  
}

export default Nav
