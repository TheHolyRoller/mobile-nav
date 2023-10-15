'use client'    



// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import '../Styles/SignupModal.css'; 

import  { forwardRef } from "react";

import {
    ChakraProvider,
    extendTheme,
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      Button
    } from '@chakra-ui/react';
    
import { useDisclosure, useStatStyles } from '@chakra-ui/react';
import React, {useState, useEffect, useReducer, useRef} from 'react'; 
    
import { CloseButton } from '@chakra-ui/react';
  
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import { useMediaQuery } from 'react-responsive'
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
    
// Import the stylesheet here 
const theme = extendTheme({
    components: {
      Modal: {
        baseStyle: (props) => ({
          dialog: {

            
            bg: "#161822"
          }
        })
      }
    }
  });
  
  const firebaseConfig = {
    apiKey: "AIzaSyD6VYOfuhsxcj_UVkQu9goxCjdZSh-CFUE",
    authDomain: "emailsignup-54a97.firebaseapp.com",
    projectId: "emailsignup-54a97",
    storageBucket: "emailsignup-54a97.appspot.com",
    messagingSenderId: "74279721731",
    appId: "1:74279721731:web:710a01abdfadc53014a736",
    measurementId: "G-31FQ1CQKFT"
  };
  const app = initializeApp(firebaseConfig);
  
  // Initialize the database here 

  // This might be causing the error 
 const db = getFirestore(app);

const productID = 'myid'

  
  export  const NewSignupModal = () => {
    const [size, setSize] = React.useState('md')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const sizes = [ 'full'];
  const [email, setEmail] = useState("");
      
     
          const viewportHeight = window.innerHeight;
          var pageHeight = document.documentElement.scrollHeight;
          const scrollableSpace = pageHeight - viewportHeight;
          const threshold = scrollableSpace * 0.8;

        
        
          useEffect(() => {
            // Define a function to handle the scroll event
            const handleScroll = () => {
              // Get the viewport height
              const viewportHeight = window.innerHeight;
              // Get the page height
              var pageHeight = document.documentElement.scrollHeight;
              // Calculate the scrollable space
              const scrollableSpace = pageHeight - viewportHeight;
          
              // Set a threshold for opening the modal, such as 80% of the scrollable space
              const threshold = scrollableSpace * 0.8;
          
              // If the scroll position is greater than the threshold, open the modal
              if (window.scrollY > threshold) {
                isOpen();
              }
            };
          
            // Add the scroll event listener using the named function
            document.addEventListener("scroll", handleScroll);
          
            // Return a cleanup function to remove the scroll event listener using the named function
            return () => {
              document.removeEventListener("scroll", handleScroll);
            };
          }, []);
          
        
        
        
        
        
        
        
        
        
      return (
  
            <>
                  <Button
                  style={{outline: '0px solid lime', marginRight: '-3rem', marginTop: '3rem'}}
                  
                  id='modal-open-button'
          
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    >
          
                    <div id='open-btn-container' style={{display: 'block', width: '8.1rem', height: '3.4rem', display: 'grid', alignContent: 'center', backgroundColor: 'white', borderRadius: '10px'}}   >
                   
                      {/* <MenuIcon   id='toggle-button' className={className}  style={style1}  /> */}
                    <span style={{marginTop: '-1.69rem', transform: 'translate(0rem, 0rem)', position: 'relative', textTransform: 'uppercase', fontWeight: '550', marginLeft: '2.3rem'}} >
                      Menu   
                    </span> 
                      
                    </div>
                  </Button>
            
                
          <ChakraProvider id='chakra-theme-provider'  theme={theme}>
          
          
          <Modal    id='main-signup-modal'  onClose={onClose} size={size} isOpen={isOpen}>
                  <ModalOverlay />
                  <ModalContent id='signup-modal-content' >
                    <ModalHeader  id='modal-signup-title' >
                    
                    <div id='modal-signup-title' style={{color: 'white', margin: '0 auto', 
                      width: '77%', display: 'flex', flexWrap: 'wrap', 
                      textAlign: 'center', marginTop: '1rem'}}  >
                    Subscribe to our newsletter for the latest updates 
                    </div>
          
                    </ModalHeader>
                    <ModalCloseButton id='signup-modal-close-btn' style={{color: 'white'}}  />
                    <ModalBody id='modal-signup-body' >
                    
                    {/* Add in the Supporting Text here and the Input element with the submit button */}
                    {/* Add in the CTA text container here  */}
                    
                    <div id='modal-signup-text' style={{color: 'white', width: '70%', margin: '0 auto', textAlign: 'center'}}  >
                    A new way of reaching the gospel to the  unreached, with God's love
                    {/* growing the Kingdom of God  */}
                    </div>
                    
                    {/* Add in the input section container here  */}
                    
                  <form onSubmit={(e) => sendMessage(e)}   style={{position: 'relative', margin: '0 auto', padding: '0', width: '0',  }} >
                    <div id='modal-signup-input-container-section'  style={{outline: '0px solid blue', margin: '0 auto', display: 'grid', placeContent: 'center', }} >
          
                  
                  <div id='modal-signup-input-container' style={{position: 'relative', outline: '0px solid blue'}}  >
              {/* <label htmlfor="messageInput" hidden>
                  Enter your Email 
                  
                </label> */}
                  
                  <input
                  id='modal-signup-input' 
                  style={{margin: ' 0 auto', outline: '0px solid lime', 
                  borderRadius: '8px', height: '3.5rem', 
                  color: 'black',
                  width: '20rem', marginTop: '1rem', textAlign: 'default'}} 
                  // id="messageInput"
                  name="emailInput"
                  type="text"
                  className="form-input__input"
                  placeholder="Enter your email..."
                  value={email}
                  // onChange={(e) => setMessage(e.target.value)}
          
                  onChange={(e) => setEmail(e.target.value)}
                  
                /> 
                
                  <div id='modal-signup-submit-btn-container' style={{position: 'absolute', outline: '0px solid red', top: '33%', right: '3%', }}  >
              
              
              {/* Add in an even listener here  */}
                  <button type='submit'  id='modal-signup-btn' style={{backgroundColor: '#01c06d', width: '6rem', height: '2.5rem', borderRadius: '6px', color: 'white', fontWeight: '600'}}  >
                      Sing Up 
          
                  
                  </button>
                      
                  </div>
                  
                  
                  </div>
                  
                      
                    </div>
              </form>
          
                    
                    
                    </ModalBody>
                    <ModalFooter id='signup-modal-footer' >
                      {/* <Button id='signup-modal-closer'  onClick={onClose}>Close</Button> */}
                    </ModalFooter>
                  </ModalContent>
                </Modal>
          </ChakraProvider>
                </>
            );
        
        
    }