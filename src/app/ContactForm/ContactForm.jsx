

'use client'


import React, { useState, useEffect, useMemo  } from "react";

// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';



// import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


// Import Font Awesome Icons here 
import ReactDOM from 'react-dom'





import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const options = [
  ' ',
  ' ',
  'Mr',
  'Mrs',
  'Dr', 
  'Rev',
  'Ms',
  'Sir',
  'Lady', 
  
];


import '../Styles/form.css'; 

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import { addDoc, getFirestore, collection } from 'firebase/firestore';
import Filter from "bad-words";
const filter = new Filter();

import { db } from '../Components/SingupModal'; 
import { app } from '../Components/SingupModal';


const ContactForm = () => {

   const productID = 'collection'; 


   const [formKey, setFormKey] = useState(0);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  
  
  const initialInputValues = useMemo(() => ({
    name: "",
    email: "",
    message: ""
  }), []);
  
    
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(" ");
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    // setLastNameError("");
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(" ");
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError(" ");
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError(" ");
  };
  

   
   


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [disabled, setDisabled] = useState(false);

 
  // const handleSubmit = async (e) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormKey(formKey + 1);
    
    let isValid = true;
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }
 
    if (!message) {
      setMessageError("Message is required");
      isValid = false;
    } else if (message.length > 500) {
      setMessageError("Message is too long");
      isValid = false;
    } else if (filter.isProfane(message)) {
      setMessageError("Message contains profanity");
      isValid = false;
    }
    
    // if (isValid) {

      
    // Add in the await code here from the other file 
    await addDoc(collection(db, productID ), {
      name:  name,
      email: email,
      phone: phone,
       message: message

  })
  
  setName(" ");
setLastName(" "); 
setEmail(" ");
setPhone(" ");
setMessage(" ");
// This will not work
      alert("Your message has been sent. Thank you!");
   
      
    // }
  };
  
  
  useEffect(() => {
    setName(initialInputValues.name);
    setEmail(initialInputValues.email);
    setMessage(initialInputValues.message);
  }, [formKey, initialInputValues]);


  return (
    <div className='ContactForm'  >
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form key={formKey} id='contact-form' onSubmit={handleSubmit} noValidate>
                {/* Row 1 of form */}
                
                
                {/* Add in a container here just for the content of the contact form  */}
                
                <div id='content-container' >

                  
                
    
   <div id='CTA-text-container'>
   
   
   <div id="CTA-container" >

  </div>
    
    
    <div id='CTA-text' style={{  }} >
    
    
    <div id="CTA-Header">

<span id='CTA-header-span' >
Get in touch 
</span>


   </div>
    
    
    We love to hear from people, so if you'd like to ask a question, get some info or just want to say hi, drop us a message below.   
      
      
    </div>
   
   </div>
                <div id="name-row"  className='row formRow'>
                
                  <div id="name-column"  className=''>
       <div id='drop-down-content-container' >
                <div  id='drop-down-container'>
    
    <div id="name-header" >
          Name 
          <span id='name-asterisk' >
            * 
          </span>
            
            
          </div>
    
    
    <div id='title-container' >
    
    
    <div id='dropdown-title' >
    
    Title 
    
    </div>
      
          
      <List
      
      id='drop-down-list'
        // style={{width: '16vw', borderRadius: '5px'}}
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
      
      
      
      {/* Add in the icon here  */}
      <ArrowDropDownIcon style={{color: '#0bb8d0', position: 'absolute', top: '23%', right: '18%'}} 
      onClick={handleClickListItem} 
      />
      
        <ListItem
        
        
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          // aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem} 
        >
          <ListItemText
            // primary="When device is locked"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
          
          
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    
    
    {/* Title container for the text  */}
    </div>
    
    
    
    
    {/* Drop down container */}
    </div>
    
    
    {/* Add in the end of the Drop down Content container here  */}
    </div>
    
    
    {/* Add in the first name title here  */}
    
    
    
    {/* Try adding in an input container here  */}
    
    <div id='first-name-container' >
    
    {/* Add in the title here  */}
      
      {/* Modify the container so that it can hold both the input and the title  */}
      <div id='first-name-title' >
          
    First 
    <span style={{display: 'inline', marginLeft: '0.5rem'}} >Name </span>
      
      
    </div>
      
      
      
                    <input
                    id="name-input"
                      type='text'
                      name='name'
                      style={{color: 'black'}}
                      onChange={handleNameChange}
                      
                      // {...register('name', {
                      //   required: {
                      //     value: true,
                      //     message: 'Please enter your name'
                      //   },
                      //   maxLength: {
                      //     value: 30,
                      //     message: 'Please use 30 characters or less'
                      //   }
                      // })}
                      // /form-control
                      className=' formInput first-name '
                      placeholder='First Name'
                    >
                    
                    
                    </input>
                    
    </div>
                    



                    {/* {errors.name && <span className='errorMessage'>{errors.name.message}</span>} */}
                  <div id="name-column"  className=''>
                    
                   
                    
                    
                    
                    
    {/* Add in the input container here  */}
    
    <div id='last-name-title-container' >

      {/* Add in the title here  */}
      
      <div id='name-headline-title' >
                      Last 
                      <span id='last-name-span' style={{display: 'inline', marginLeft: '0.5rem'}} >
                        Name 
                      </span>
                      
                    </div>
            
                    <input
                    id="name-input"
                      type='text'
                      name='name'
                      style={{color: 'black'}}
                      onChange={handleLastNameChange}
                     
                      // /form-control
                      className=' formInput last-name'
                      placeholder=' Name'
                    >
                    
                    </input>
                    

                    
    </div>
                    
                      

                    {/* {errors.name && <span className='errorMessage'>{errors.name.message}</span>} */}
                  </div>
                  
                  
                  </div>
                  
                </div>
                
                <ul id='input-list' >
                  <li id='input-list-item' >
                  <div id="email-row"  className='col-6'>
                  
                  <div id='input-main-container' >

                      
                      
                  <div id='email-title' >
                    Email 
                    <span id='email-asterisk' >* </span>
                    
                  </div>
                  
                  
                    <input
                    id='email-input'
                      type='email'
                      name='email'
                     
                      className=' formInput emailaddress '
                      placeholder='Email address'
                      style={{color: 'black'}}
                      onChange={handleEmailChange}
                      
                      
                    ></input>
                    
                    {/* #!@#@$!@#$!@#$ */}
                    {/* ---Input Container Here end ------- */}
                  </div>
                    
          
                  </div>
                  </li>
                  <li id='input-list-item' >
                  <div id="phone-number-row"  className='row formRow'>
                  <div id="phone-input"  className='col'>
                  
                  
                  <div id='phone-input-content-container' >
                    
                  <div id='phone-title' >
                    Phone 
                  </div>
                  
                  
                    <input
                    id='phone-input'
                      type='text'
                      name='subject'
                      onChange={handlePhoneChange}

                      
                      className='form-control formInput'
                      placeholder='Phone Number'
                      style={{color: 'black'}}
                      
                    ></input>

                    {/* {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )} */}
                    
                    
                    {/* Add in the end of the phone input container here  */}
                    
                    
                  </div>
                    
                    
                  </div>
                  
                  
                  
                </div>
                  </li>
                  
                </ul>
              
              
                {/* Row 3 of form */}
                <div id="message-row"  className='row formRow'>
                
                {/* Add in the label here  */}
                
              
                
                  <div id="text-area-input"  className='col' >
                  
                  
                  <div id='text-area-content-container'  style={{position: 'relative'}} >

                  <label id='text-area-label' style={{outline: '00px solid red', position: 'absolute', left: '1%',  top: '-30%', zIndex: '10' }} >
                
                
                    <div id='text-area-header' >

                    Drop us a message 
                    </div>
                
                
                    <span id='asterisk' style={{}}  > *</span>
                  
                </label>

                    
                    
                  
                  
                  
                    <textarea
                    // id='message-input'
                      rows={3}
                      name='message'
                      onChange={handleMessageChange}
                      id="message-textarea"
                      className='form-control formInput message-input '
                      placeholder='Message'
                      style={{color: 'black'}}
                    ></textarea>

                   
                    {/* content container  */}
                  </div>
                  
                  <button id="submit-button"  className='submit-btn' disabled={disabled} type='submit' >
                  Submit 
                </button>
                    
                    {/* Text area container  */}
                  </div>
                </div>

              
                
                </div>
                
              </form>
            </div>
            {/* <ToastContainer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;