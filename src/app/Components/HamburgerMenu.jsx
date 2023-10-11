


import React, {useState, useEffect, useReducer, useRef} from 'react'; 
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons library


// Import the style sheet here 


const HamburgerMenu = () => {


    const [toggle, setToggle] = useState(true); 
  
    const [className, setClassName] = useState("class1");
  
    const [isOpen, setIsOpen] = useState(true);
  
    // Define a function that toggles the state variable between true and false
    function toggleMenu() {
      // Set the state to the opposite of its current value
      setIsOpen(!isOpen);
      console.log("is this WORKING!#!@#!@#"); 
      
      
      
    }
    
    
    const menuStyle = {
        // Use absolute positioning to place the menu on the right side of the screen
        position: "absolute",
        top: 0,
        right: 0,
        // Use transform and transition to create a sliding effect
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
        // Use width, height, background, and padding to style the menu appearance
        width: "250px",
        height: "100vh",
        // background: "#fff",
        padding: "20px",
      };
      
      
      const iconStyle = {
        // Use absolute positioning to place the icon on the top right corner of the screen
        position: "absolute",
        top: "20px",
        right: "20px",
        // Use cursor to indicate that the icon is clickable
        cursor: "pointer",
      };
    



  return (
    <div style={menuStyle}  id="hamburger-main-container" >
    
    <main   id='hamburger-header-container' >
    
    <header id='hamburger-header'>
    
    Revival 
    </header>
    
    {/* Add in the open and close buttons here  */}
    
    <div id='open-close' >
    {isOpen ? (
        <FaTimes style={iconStyle} onClick={toggleMenu} />
      ) : (
        <FaBars style={iconStyle} onClick={toggleMenu} />
      )}
        
    </div>
    
    
    {/* Add in the extra buttons here  */}
    
    <div id='navigation-button-container' >
    
    <ul style={{}}  id='navigation-button-list' >
    
    <li id='navigation-button-list' >   
    

        
    </li>

    </ul>
        
    </div>
        
        
    </main>
    
    <div id='list-container' >
    
    <ul id='hamburger-list' >
    
    <li id='hamburger-list-item'>
    
    <div id='hamburger-item' >
    
    Hamburger 
    
    </div>
        
        
    </li>
    {/* onClick={toggleMenu()} */}
    <li   id='hamburger-list-item'>
    
    <div id='hamburger-item' >
    
    Hamburger 
    
    {/* onClick={event => { { toggleMenu; } }} */}
    <button >Toggle Menu</button>
    
    

    </div>
        
        
    </li>
    <li id='hamburger-list-item'>
    
    <div id='hamburger-item' >
    
    Hamburger 

    </div>
        
        
    </li>
    <li id='hamburger-list-item'>
    
    <div id='hamburger-item' >
    
    Hamburger 

    </div>
        
        
    </li>
    

    </ul>
    
    
    
        
        
    </div>
    
    {/* Add in the social media section here  */}
    
    <div id="social-media-container" >
    
    <ul>

        
        
    </ul>
        
    </div>
    
    HamburgerMenu
    
    
    
    </div>
  )
  
  
  
  
 
  
  
}

export default HamburgerMenu






