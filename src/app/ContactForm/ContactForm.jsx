

'use client'




/** 
 * Okay so let's just talk things through. 
 
The main thing to polish up now is the contact form. 

So the main idea of the example contact form is that it either takes up nearly the 
whole screen or it is placed to one side of the screen. 


Then another theme is alignment. So the CTA Headline is aligned with the balancing text 

and then the balancing text is aligned with the Contact form. 

Then next theme is that Each input section has a clear headline acting as a title 

to direct the user. 


Each Input field that is required has a small red asterisk next to it. 


Now the next theme is that the input fields are expandable. 


This means that when the screen reaches a certain threshold the input fields start to 
expand in order to maintain the theme of the component taking most of the width of 
the screen or nearly half of the screen at one side of the screen. 


The next theme to consider is that certain inputs are lined up in a row. 

This means that even though this is the case all the input elements will increase in 

proportion to the width of the viewport all at once. 

There is one exception to this rule, however and that is in the full mobile 

view. In this case the inputs are all lined up one row at a time. So each input 
element has it's own line. 



So just to recap on full screen mode the contact form will be to one side of the screen 
take up roughly half of the view port width and will have it's elements left aligned 

and it's top row of input elements lined up on one line. 


 
Okay so there's been a change of plans. First of all I'm going to abide by the layout but 

I'm going to adapt the material UI component to work and look like the drop down menu. 

Once that is done I'll do the polishing and the changes needed to the contact form and then 

I'll start on the mobile nav. 


Okay so let's just talk through what's going on now. 

First of all in mobile mode there are some issues. 

The first issue is that the footer and the contact form are not at the right hand 

side of the screen all the way meaning that they do not cover the whole screen and there 
is a small gap at the right hand side. 

Next the items in the contact form are two close together. 

There might me a fix to this which could include having the top margin something 

that will increase as the width of the screen decreases. But otherwise 

a simple media query could accomplish the same task. 

Okay so there's the coverage and the top margin, next we have the text. 

First of all the text is really too big for the screen and it's squashed up against the 

left hand side of the screen so if I can increase it's weight and then give it a really 
small amount of left margin then it should work out quite well. 

If this does not work properly then we can try reducing it's width somehow and failing 
that I could always just conditionally render one block with less and another block 

of text with more words and of course with the same ids and classNames. 


Okay so that makes sense. 

Another thing that needs some tweaking is the CTA header this will need pushing slightly 

more to the right as it's more over to the left at the moment. 

And as for the footer well I already know what needs doing that there is still a lot of 

work to be done but that is for another day. 



Then there are the Cards but most of these issues can be fixed with some conditional rendering 
moving around and setting some maximum sizes for the images and the cards themselves. 


Once that has been done then I can do the text segments and properly clamp their sizes and 

sort out their line heights. 

Then I have move onto the header and here I can put a maximum limit on the height of the hero 

image and then sort out the hero text. Make sure it's responsive, clamped, in the right 

place and is styled according to the example. 

There there is the nav bar. The right buttons will need to be added and styled and then 

the Logo will need to be created and added in. 

Once that is done then the mobile nav button will need adding in with conditional rendering. 


Once that has been done then the mobile navigation menu will be created. 

When the basic structure is done then I can create the outline and add in the right 

features. 

Once the responsiveness has been added then I can start on my remaining 

UI components and once those are finished then I can start adding in the functional 

components and once that has been done then I can do the polishing, styling, affects, 

and then animations and once the responsiveness has been fully added in and 

the finishing touches done then I can add in the pages and routing with the right 

UI components and functional components. 

Once the integration has been completed then I can start on launching the website. 

To do this I can use a sub-domain and I can also use free hosting. 

Then once that is done I can add more features and improve the UI and UX of the site. 

And as I learn more languages and libraries and more about things like SEO then I can 

continually and gradually integrate these into the website. 

Once I have a large amount of UI components and layouts that are reusable as well 

as functional components then I can just add these fairly seamlessly 

into my next project. 

And once I have a few projects of my own done then I can start doing real world 

projects for free to get my free lance account properly going and then I can start applying 

for jobs once I have this portfolio going. 


Okay so that sounds good. 

Now let's focus what I'm going to do now. 

Well first of all I think it would be good to set the right media queries at the right 

break points and then add in what I want to change in these media queries and then once that 
is done then I can add in what I want to change in each id section. 


Once that is done then I can incrementally go through one id section at a time. 

Okay so first of all let's go through with what I'm going to do. 

Well I'm going to fix the right hand gap on the screen and then once that is done I'm going 
to fix the top margin then block of text and once that is done then I can fix the header. 


Once those things are done then I can tweak these things at different media queries 

and once that is done and there is time I can work on fixing thins up on the footer. 








*/


// import React from "react";

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
  'Mr',
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
    <div className='ContactForm'>
    
    {/* Add in the Headline text here  */}
    
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                
                
                {/* Add in a container here just for the content of the contact form  */}
                
                <div id='content-container' >

                  
                  <div id="CTA-container" >

                    
                
                <div id="CTA-Header"  style={{}} >
                Get in touch 

                   </div>
                  </div>
    
   <div id='CTA-text-container' >
    
    
    <text id='CTA-text'   >
    We love to hear from people, so if you'd like to ask a question, get some info or just want to say hi, drop us a message below.   
      
      
    </text>
    {/* <text id='CTA-text'   >
    We love to hear from people, so if you'd like to ask a question, get some info or just want to say hi, drop us a message below.
      
      
    </text> */}
   </div>
   
   
                <div id="name-row"  className='row formRow'>
                
                  <div id="name-column"  className=''>

                    
          <div id="name-header" >
          Name 
          <span id='name-asterisk' >
            * 
          </span>
            
            
          </div>

                <div id='drop-down-container'>
                
    {/* Try adding in a list item container here  */}
    
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
                    

                    
                    {/* <input
                    id="name-input"
                      type='text'
                      name='name'
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
                      placeholder='Last Name'
                    >
                    
                    </input> */}
                    
    </div>
                    
                      
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  
                  
                  </div>

                  
                </div>
                
                <ul id='input-list' >
                  <li id='input-list-item' >
                  <div id="email-row"  className='col-6'>
                  
                  {/* Add in the email title here  */}
                  
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
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                  </li>
                  <li id='input-list-item' >
                  <div id="phone-number-row"  className='row formRow'>
                  <div id="phone-input"  className='col'>
                  
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
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                  </li>
                  
                </ul>
              
              
                {/* Row 3 of form */}
                <div id="message-row"  className='row formRow'>
                
                {/* Add in the label here  */}
                
                <label id='text-area-label' >
                
                
                <div id='text-area-header' >

                Drop us a message 
                </div>
                
                
                <span id='asterisk' style={{}}  > *</span>
                  
                </label>
                
                  <div id="text-area-input"  className='col'>
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
                      
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>

                <button id="submit-button"  className='submit-btn' disabled={disabled} type='submit'  >
                  Submit 
                </button>
                
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