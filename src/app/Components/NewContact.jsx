/**

Okay so let's just talk things through. 

So the day has gone pretty well. 

So far all that has been left unfinished  is the footer and the contact form. 

So basically the plan with the form is to create the UI first and then add in the firebase 
functionality later. 

So I think the way I'll do the contact form is I'll get an example and adapt it from 

code pen. 

Once this example has been changed accordingly. 

So the plan with making the contact form is that I'm going to take an example from github 
and adapt it because making one from scratch is extremely time consuming. 

So I'm going to adapt the design and I'm not going to follow the website design completely 
either because It's just not very practical. 






*/





import React, { useState } from 'react'

function NewContact() {

    const options = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.']

    // Define the state for the selected option
    const [selected, setSelected] = useState (options[0])
  
    // Define the handler for changing the selected option
    const handleChange = (event) => {
      setSelected (event.target.value)
    }


  return (
    <div className="mainContainer" style={{backgroundColor: "#00c670", width: "100vw", marginLeft: '-1.9rem', minHeight: "110vh", display: "flex", justifyItems: "flex-start", position: 'relative'}}>
    
    
                                    {/* ADD IN THE FORM ID HERE  */}
                                    {/*  onSubmit={submitHandler} */}
    <form className="form" style={{outline: '10px solid lime', position: 'absolute', left: '5%', top: '20%'}}  >
        
    <div className="headlineContainer">
      
    <div className="headlineContainer">
    
    Get in Touch 

    </div>
    
    
    {/* Add in the paragraph container here    */}
    <text>
    
    We love to hear from people, so if you'd like to ask a question, get some info or just want to say hi, drop us a message below.

    
    
    </text>
      
      
    </div>        

    {/* {submitted ? <div className="submittedMessage">Thanks for reaching out! </div> : <div></div>} */}
      <div className="form-group" style={{outline: '10px solid blue'}}>
        
       <text>
       {/* Name  */}
       
       </text>
        
      <div id='title-selection' style={{display: "inline-block", marginRight: "2rem"}}  >
      <label htmlfor="title">Choose your title:</label>
      <select style={{color: "black", minWidth: '3rem', display: "inline-block"}}  id="title" value="{selected}" onChange={event => { { handleChange; } }}>
        {options.map (option => (
          <option key="{option}" value="{option}">
            {option}
          </option>
        ))}
      </select>
    </div>
    
    
{/* Add in the white background segment for the input here  */}
    
    {/* <div id="background-segment" style={{backgroundColor: "white", border: "2px solid grey", width: '4rem', minHeight: "2rem", }} >

                
            
    </div> */}
    
        <div>
            First Name 
        </div>

        <input className="input"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        //   value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ outline: '0px solid lime', marginRight: "2rem", marginBottom: "3rem", color: 'black'}}
          
          />
          
          <div style={{transform: "translate(0rem, -1.4rem)"}} >
         Last Name    
        </div>
        <input className="input"
          type="text"
          name="last name "
          id="name"
          placeholder="name"
        //   value={name}
          onChange={(e) => setName(e.target.value)}
          required
          
          style={{color: "black", position: 'relative', zIndex: '5', display: 'inline-block' }}
          />
          {/* Add in the Background div here  */}
          
          <div id="background-section" style={{backgroundColor: 'white', width: '14.3rem', minHeight: "4rem", borderRadius: "8%", transform: "translate(0, -3rem)", position: 'relative', zIndex: '0'}} >

          
          </div>
          
      </div>

      
      <div className="form-group">

        <input
            className="input"
          type="email"
          name="email"
          id="email"

          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{color: 'black'}}
          />
      </div>
      <div className="form-group">

        <input
        className="input"
          type="tel"
          id="phone"
          name="phone"
        //   value={phone}
          placeholder="telephone"
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{color: 'black'}}
          />
      </div>
      <div className="form-group">


        <textarea 
        className="message"
          id="message"
          name="message"
          placeholder="message"
        //   value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{color: "black"}}
          
          />
      </div>
      <button className="submitButton"  type="submit">Submit</button>
      
    </form>
    
          </div>
  )
}

//  default NewContact
