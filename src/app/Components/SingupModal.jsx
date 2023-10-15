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
   export const app = initializeApp(firebaseConfig);

   
export const db = getFirestore(app);

 export const productID = 'myid'

 
 
 function SignupModal(props, ref) {

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [hasOpened, setHasOpened] = useState(true); 
  const [modalOpened, setModalOpened] = useState(false);
  

  // Define a ref to access the element that you want to scroll
  const scrollRef = useRef(null);
  
  
  
const validateEmail = (email) => {

  if (!email || !emailPattern.test(email)) {
    return false;
  }
  return true;
  
};

  
  useEffect(() => {
    // Define a state variable to track whether the modal has been opened or not
  
    // Define a function to handle the scroll event
    const handleScroll = () => {
      // Get the viewport height
      const viewportHeight = window.innerHeight;
      // Get the page height
      var pageHeight = document.documentElement.scrollHeight;
      // Calculate the scrollable space
      const scrollableSpace = pageHeight - viewportHeight;
  
      // Set a threshold for opening the modal, such as 80% of the scrollable space
      const threshold = scrollableSpace * 0.18;
  
      // If the scroll position is greater than the threshold and the modal has not been opened yet, open the modal and set the modalOpened state to true
      if (window.scrollY > threshold && !modalOpened) {
        onOpen();
        setModalOpened(true);
      }
    };
   
    // Add the scroll event listener to the body element using the named function
    window.addEventListener("scroll", handleScroll);
  
    // Return a cleanup function to remove the scroll event listener using the named function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [modalOpened]); // Include modalOpened in the dependency array
  
      
  const sendMessage = async (e) => {
    e.preventDefault();
    e.target.reset();
    
    
    
    // Add in the email validation here 
    
    // if (validateEmail(email)) {
    await addDoc(collection(db, productID ), {
              email: email,
              
              // Add in the extra fields for email and name here 
              

    })
    
    // Close the Modal here 
    setMessage("");
    alert('You have been signed up!  '); 
    onClose(); 
    
    console.log(message); 
    console.log(message.text); 
    console.log(db); 
    
    
  // }
  
  // else{

  // alert("Please enter a valid email"); 
  
    
  // }

    
  };
  
  
  
  const handleKeyPress = (e) => {
    // Check if the enter key is pressed and the input is valid
    if (e.key === "Enter" && validateEmail(email)) {
      // Trigger the submit event
      handleSubmit(email);
      
    }
  };
  
  const handleClose = () => {
    

    onClose(); 
    console.log('just closed'); 
    
    
  }
  
  console.log("This is harder than expected"); 
  
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
     
        // const { isOpen, onOpen, onClose } = useDisclosure()
        const [size, setSize] = React.useState('md')
    
        const [scrollBehavior, setScrollBehavior] = React.useState('inside')
        const handleSizeClick = (newSize) => {
          setSize(newSize)
          onOpen();
          
        }
      
        // 'xs', 'sm', 'md', 'lg', 'xl',
        const sizes = [ 'xl'];
        
        // Add in the state variable for the visibility basis 
        const [open, setIsOpen] = useState('open');
        
        const [toggle, setToggle] = useState(true);     

        const handleChange = () => {
          
          setEmail(e.target.value); 
          
          
        }


  return (
  
  <>
      
      
      <ChakraProvider id='chakra-theme-provider'  theme={theme}>



        <Modal id='main-signup-modal'  onClose={onClose} size={size} isOpen={isOpen}>
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

export default forwardRef(SignupModal); 

