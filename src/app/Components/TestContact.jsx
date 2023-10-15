

'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';



import * as React from 'react';
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


const ContactForm = () => {







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
  
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);
      // Add in the extra input field options here
        
      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'  >
    
    {/* Add in the Headline text here  */}
    
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
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
                
    {/* Try adding in a list item container here  */}
    
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
                      
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      // /form-control
                      className=' formInput first-name '
                      placeholder='First Name'
                    >
                    
                    
                    </input>
                    
    </div>
                    


                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
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
                      
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      // /form-control
                      className=' formInput last-name'
                      placeholder=' Name'
                    >
                    
                    </input>
                    

                    
    </div>
                    
                      
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
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
                      
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      // form-control
                      className=' formInput emailaddress '
                      placeholder='Email address'
                      style={{color: 'black'}}
                      
                    ></input>
                    
                    {/* #!@#@$!@#$!@#$ */}
                    {/* ---Input Container Here end ------- */}
                  </div>
                    
                    
                    
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
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
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      
                      className='form-control formInput'
                      placeholder='Phone Number'
                      style={{color: 'black'}}
                      
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                    
                    
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
                      {...register('message', {
                        required: true
                      })}
                      id="message-textarea"
                      className='form-control formInput message-input '
                      placeholder='Message'
                      style={{color: 'black'}}
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                   
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
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;