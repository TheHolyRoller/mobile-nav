

'use client'


import React, { useState } from 'react'


import '../Styles/NewContact.css'; 

import Filter from "bad-words";
const filter = new Filter();

import { addDoc, getFirestore, collection } from 'firebase/firestore';

import { db } from '../Components/SingupModal'; 
import { app } from '../Components/SingupModal';


 export function NewContact() {

    const options = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'];
    
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [messageError, setMessageError] = useState("");

    // Define the state for the selected option
    const [selected, setSelected] = useState (options[0])
  
    // Define the handler for changing the selected option
    const handleChange = (event) => {
      setSelected (event.target.value)
    }
    
    const handleNameChange = (e) => {
      setName(e.target.value);
      setNameError("");
    };
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailError("");
    };
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
      setPhoneError("");
    };
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
      setMessageError("");
    };
    
    


  return (
    <div id='main-form-container'  className="mainContainer" >
    
    
                                    {/* ADD IN THE FORM ID HERE  */}
                                    {/*  onSubmit={submitHandler} */}
    <form id='form'  className="form" >
        
    <div id='headline-container'  className="headlineContainer">
      
    <div id='contact-header-text'  className="headlineContainer">
    
    Get in Touch 

    </div>
    
    
    {/* Add in the paragraph container here    */}
    <text id='contact-headline-text' >
    
    We love to hear from people, so if you'd like to ask a question, get some info or just want to say hi, drop us a message below.

    
    
    </text>
      
      
    </div>        

    {/* {submitted ? <div className="submittedMessage">Thanks for reaching out! </div> : <div></div>} */}
      <div id='form-group'  className="form-group" >
        
 
        
      <div id='title-selection'>
      <label id='input-title-label'  htmlfor="title">Choose your title:</label>
      <select id='title-selection-dropdown'  value="{selected}" onChange={event => { { handleChange; } }}>
        {options.map (option => (
          <option id='title-option'  key="{option}" value="{option}">
            {option}
          </option>
        ))}
      </select>
    </div>
    
    
        <div id='first-name-text' >
            First Name 
        </div>

        <input id='name-input'  className="input"
          type="text"
          name="name"
          // id="name"
          placeholder="name"
        //   value={name}
          onChange={(e) => setName(e.target.value)}
          required
                    
          />
          
          
          <div id='last-name-text'   >
         Last Name    
        </div>
        <input className="input"
          type="text"
          name="last name "
          id='last-name-input'
          // id="name"
          placeholder="name"
        //   value={name}
          onChange={(e) => setName(e.target.value)}
          // required
          
         
          />
          {/* Add in the Background div here  */}
          
          
          {/* The placement and hierarchy might be the reason for the background problems */}
          <div id="background-section" >

          
          </div>
          
      </div>

      
      <div id='email-form-group'  className="form-group">

        <input
            className="input"
          type="email"
          name="email"
          id='email-input'
          // id="email"

          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required

          />
      </div>
      <div id='form-input'  className="form-group">

        <input
        className="input"
          type="tel"
          id='phone-input'
          // id="phone"
          name="phone"
        //   value={phone}
          placeholder="telephone"
          onChange={(e) => setPhone(e.target.value)}
          // required
        
          />
      </div>
      <div id='form-group'  className="form-group">



        <textarea 
        className="message"
        id='message-input'
          // id="message"
          name="message"
          placeholder="message"
        //   value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          
          
          />
      </div>
      <button id='submit-button'  className="submitButton"  type="submit">Submit</button>
      
    </form>
    
          </div>
  )
}

//  default NewContact
