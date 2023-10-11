/**
 
 
 
 
Okay so let's just talk things through now. 

So I've got the modal working which is great. 


Now I just need to position it so that it is below the navbar and underneath it so that the 

navbar still has all it's functionality when it is open. 

Okay so I need to figure out how to design this modal navbar with the current amount of 

pages that I have and with the current layout and theme that I'm working with. 

So first of all let's make a list of the pages I want on my navbar. 

Then let's get some inspiration and try out different design patterns. 


Okay so things are starting to take shape. 

First of all the example I'm following seems to work with what I have. 

I can even include it on tablet mode. 

This design is quite straight forward. 

First of all there is the top of the mobile drop down menu. 

For our version this will be a modal that drops in from the center. 

The top of the mobile navbar is the exit area. 

The top left contains the logo which will lead to home and will exit out of the navbar. 

Then there is the exit button. 

This is animated but at the moment I'm not worrying about animation effects or styling. 

It's not that stage of the project. 


Okay so then there's the exit button. 

At the moment we just have a lettered button that does this but we can always swap it out for an 
icon. Then we move onto the next section of the mobile nav menu and this is the main 

content section of the drop down menu. 

This contains a stacked list of buttons that the user can click on to navigate to 

different areas of the website. They are placed to the left of the screen with some left margin and 

they are stacked one on top of the other and are displayed in a display of block. 

Then on tablet mode and on wider screens the top part of the modal contains two more 

buttons that are placed on the pc navbar and these are placed to the left of the exit button 
and spaced out evenly. 

And then at the bottom of the navbar menu there are the social media icons. 

These two features of the extra buttons and the social media icons don't necessarily need 
to be added in but if things go well and there is time then it would be a great design feature 

to add in.  

And regarding the buttons at the left hand side of the screen that are used for navigation in 

the mobile nav. These will remain fixed in their place but the width and margin to their right will 

increase along with the width of the screen. 


Okay so let's talk through the basic structure of the UI design of our mobile navbar. 

First of all we have the logo at the top left hand side of the screen and this is placed with a 

bit of margin both at the top and the left hand side. This is very nearly at the very 

top of the screen. 

It is in bold type with a very heavy weight. 

Then we have the exit button at the top right hand side of the screen. This is animated and 

closes the navbar. 


This is in the middle of the logo in terms of their bases and has some top and right margin. 

Then at the top center of this section there is whitespace. 

This will be filled later on to an extent with some extra navigation buttons on tablet mode. 

Now to address the issue of the pc navbar not having enough navigation. 

Well this is interwoven with the content of the website and is repeated on the footer as well as 

to an extent on the navbar and now it is also repeated on the mobile drop down navbar. 

Okay so that works out well. 

So now let's work out how we're going to structure this navbar. 

First of all we have the modal and it's a full screen modal and it contracts and expands in 
height with the amount of content that it has but it does not change it width it stays and the full 

width of the viewport. 


Now there is the body of the main modal and this contains all the content of the modal and 
there is the header and footer which contain the navigation buttons. 

In many ways it would be good to make sure that the navbar is completely opaque and 


that it is placed over everything else. Then it does not interfere with the navbar and 

it is not obscured by the content underneath. 

Okay so we could make it opaque and increase it's z-index. 

Next let's talk through the actual 


structure of the content container of the menu. 

Well first of all the header will contain the logo and exit button but that can be dealt with 


quite easily and is not being covered right now. 

Then we have all the navigation buttons 

This is a long list with it's list items. 

Each list item has a display of block and takes up the full view port width. 

So the the list itself it will take up the full viewport width. 

Then all the borders of the list and list items will have a set color and be set to a couple 

of pixels in width. 

Then within the list items we have another item that is positioned absolutely within the 

list item. The list item is positioned relatively within the list. 

This way each nested item can be set to a fixed percentage away from the left hand side of the screen 

and stay there relatively 
 

We could also clamp the percentage of the absolute positioning to make it a bit more responsive. 

This would be a lot more favorable then using media queries. 


Okay so I have a pretty good idea for the overall structure now. 

So let's start out with adding in the Log and then once that is done we can add in the close button 

and put it in the right place. 

Then once that is done we can add in a few other navigation buttons conditionally. 


Then once that is done I can put the list in place with it's list items and then nested items. 

Position everything and then get things working and add in the borders. 

Then once that is done I can conditionally add in the social media icons. 


Then once the mobile menu is done I can do three or four other UI components and work on a couple 

more UI components for the different pages and then I can put everything together 

polish everything up. 

Add in the styling and effects and then the animations. 

And once that is done I can add in the functionality and the structure and routing and 

once that is done then I can start on launching the website. 


 
 
Okay there's another task that it would be good to start with and that's the opening 

button for the modal. It's text icon and it's positioning. 

Once that is done then I can add in some conditional rendering to remove it and add in the close 
button or I can just keep the open button underneath the modal itself. 

Okay then I can do the modal header and once that is done the list and then the footer. 


 
 Okay so let's just talk things through. 
 
 First of all I have a basic working modal now. Which is great I just 
 
 need to get the basic internal structure working and then structure the 
 
 content within. 
 
 Okay so let's walk through what I need to do now is sort out the 
 
 positioning of the exit button and then once that is done I can start working on the Log 
 
 And then List. 
 
 Then once that is done I can do the nav buttons and then the footer social media 
 
 icons. 
 
 
 
 Okay so now the closing button has been sorted out it's time to focus on the opening button. 
 
 So I need some way of making the open button disappear when I click on it and I 
 
 need some way of making it reappear when I click on the close button. 
 
 This could be done with a state variable that toggles and then with inline 
 
 styles like a style variable that changes the opacity based on the 
 
 truthy value of a boolean state variable that is toggled by a function and 
 this function is activated by an on click event listener that is attached to both the 
 
 open and close buttons and this event handler function just flips the 
 
 boolean value of the state variable each time it is called. 
 
 So it will be changed from it's original value to the opposite of it's 
 default value. 
 
 This might not be that fast, however, but we'll have to see how things work out. 
 

Okay so let's just work out what I'm going to do now. 

Well first of all I'm going to get the logo fixed and then once that is done then 

I'm going to fix the open and close buttons and once that is done I'm going to add in the extra 
buttons and icons and try and get rid of the navbar buttons somehow. 

Once that is done I'm going to polish the main list and then once that is done I'm going 
to add in some functionality. 


Okay so let's just talk things through. 

As for the animation that should be taken care of. 

So I think I've worked it out. 

To trigger all of the buttons. 

And then there is the pointer events option as well. 


Okay so first of all. We have the state variable option. 


So the way this would work is we would have a state variable and a default state 

set to this state variable. 

Once this has been done then we would have one opening button and set it's 

open state condition to the default state of the state variable. 

Then we have an on click event handler. This will be attached to the opening button. 

When the opening button is clicked then it will trigger the event 

handling button and upon doing so will change the state of the state variable. 

Once that has been done then since the change has occurred and the value of the state 

variable is different then the opening button will disappear because it's display 

will be set to none and then another button will be set to a display of block. 

The opening and closing buttons will have an opacity of zero to make them invisible 

but the hamburger icon will be over and this is what the user will click on. 



 







 
*/

















'use client'
import { useDisclosure, useStatStyles } from '@chakra-ui/react';

import React, {useState, useEffect, useReducer, useRef} from 'react'; 
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
  
  import { CloseButton } from '@chakra-ui/react';
  
  import MenuIcon from '@mui/icons-material/Menu';
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

  import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
  
  import { useMediaQuery } from 'react-responsive'
  
//   Import the stylesheet here 
import '../Styles/NewModal.css'; 
import { FaShoppingCart } from 'react-icons/fa';

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          maxWidth: ["95%", "95%", "95%"],
          minWidth: "95%",
          // bg: "#00ff00"
          bg: "#161822"
        }
      })
    }
  }
});



 export default function NewModal() {
 
 
 const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  
 
 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')

    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    // 'xs', 'sm', 'md', 'lg', 'xl',
    const sizes = [ 'full'];
    
    // Add in the state variable for the visibility basis 
    const [open, setIsOpen] = useState('open');
    
    const [toggle, setToggle] = useState(true); 
    
    const [className, setClassName] = useState("class1");

    
    const handleClick = () => {

      
      // Toggle the visibility here 
      setIsOpen(!open);
      console.log("this has been toggled ")
      setToggle(!toggle); 
      
      if (className === "class1") {
        setClassName("class2");
      }
      // If the state is "class2", set it to "class1"
      else {
        setClassName("class1");
      }
      
      
      
    }
    
    
    useEffect(() => {
      // Get the button element by its id
      const button = document.getElementById("toggle-button");
      // If the toggle state is true, hide the button
      if (!toggle) {
        button.style.display = "none";
      }
      // If the toggle state is false, show the button
      else {
        button.style.display = "block";
      }
    }, [toggle, open]);
    
    
    const style1 = {
      // If the state is false, set the display to "none"
      display: className === "class1" ? "inlineBlock" : "none",
      fontSize: '2.1rem', 
      borderRadius: '5px', 
      marginLeft: '1rem', 

      
      

    };
    
    
    
    
    
    
    
  
    return (
      <>
      
      

      

        {sizes.map((size) => (
          <Button
          
          
          style={{outline: '0px solid lime', marginRight: '-3rem', marginTop: '3rem'}}
          
          id='modal-open-button'

            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
            >

            <div id='open-btn-container' style={{display: 'block', width: '8.1rem', height: '3.4rem', display: 'grid', alignContent: 'center', backgroundColor: 'white', borderRadius: '10px'}}   >
           
              <MenuIcon   id='toggle-button' className={className}  style={style1}  />
            <span style={{marginTop: '-1.69rem', transform: 'translate(0rem, 0rem)', position: 'relative', textTransform: 'uppercase', fontWeight: '550', marginLeft: '2.3rem'}} >
              Menu   
            </span> 
              
            </div>
          </Button>
        ))}
        
        <div id='second-menu-btn-container' >

          
        
        <MenuIcon   id='second-toggle-button' className={className}     />
        </div>
        
        

        
<ChakraProvider theme={theme}>

        <Modal 
        ml={0} pl={0}
        
        scrollBehavior={scrollBehavior}
        blockScrollOnMount={false} 
        
        colorScheme='orange'
        bg='#161822'
        style={{backgroundColor: '#161822'}}
        scrollBehavior="inside"   
        id='modal' onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay 

           opacity='1'
           backdropFilter='blur(30px) hue-rotate(190deg)'
            id='modal-overlay' />
          
          <ModalContent pl={0} ml={0}  id='modal-content' >
          

            <header id='modal-header-container' style={{outline: '0px solid red'}} >
            <ModalHeader id='menu-logo'>
            
            <div id='modal-logo-container' >
          
            <div id='modal-logo' >

            Revival

            </div>
              
            </div>

            <Button
          
          id='modal-close-button'

          style={{background: 'none'}}

          onClick={onClose} 

            key={size}
            m={4}
            >

            <ModalCloseButton id='modal-close-icon-button' onClick={onClose}    />
            <div id='close-btn-container' style={{}}   >


              {/* <MenuIcon   id='toggle-button' className={className}  style={style1}  /> */}
            <span id="close-modal-span"  >
              Close 
            </span> 
              
            </div>
          </Button>
            
            

            </ModalHeader>
            
      
            
            
            </header>

            <ModalBody overflowY="scroll" id='modal-body'>

            <div id='modal-content-container' >
            
            <div id='modal-list-container' style={{outline: '0px solid blue'}}  >
            <ul id='modal-list' style={{outline: '0px solid red'}}  >
           
            <li id='menu-list-item'style={{borderBottom: '0.0rem solid slategrey'}}   >

              
            <div id='list-item-content' style={{}}  >
                
            History 
            
            </div>

            </li>
            
            
            <li id='menu-list-item' style={{borderBottom: '0.0rem solid slategrey'}}   >

            <div id='list-item-content' style={{}}  >
                
            History 
            
            </div>

                
            </li>
            <li id='menu-list-item'style={{borderBottom: '0.0rem solid slategrey'}}   >

              
            <div id='list-item-content' style={{}}  >
                
            History 
            
            
            </div>

            
            </li>
            
            
            <li id='menu-list-item' style={{borderBottom: '0.0rem solid slategrey'}}   >
            
            {/* Add in the container for the list item's content  */}
            
            
            
            
            <div id='list-item-content' style={{}}  >
                
            History 
            
            </div>
                
                
                
                
            </li>

            
            {/* Add in the social media icons here  */}
            
            <div id='social-media-footer-section' >
            
            <ul id='social-media-footer-list' >
            
            <li id='social-media-item-footer' >
            
            <div id='social-footer-icon-container' >

              
            <FacebookRoundedIcon fontSize='5rem'  id='footer-icon' style={{color: 'white'}}  />

          
            </div>
                
                
            </li>
            <li id='social-media-item-footer' >
            
            <div id='social-footer-icon-container' >
            
            {/* Add in the icon here  */}
            <FacebookRoundedIcon fontSize='5rem' id='footer-icon' style={{color: 'white'}}  />
            
                
                
            </div>
                
            </li>
            
            <li id='social-media-item-footer' >
            
            <div id='social-footer-icon-container' >
            
            {/* Add in the icon here  */}
            <FacebookRoundedIcon id='footer-icon' fontSize='5rem' style={{color: 'white'}} />
            
            </div>
            </li>
            </ul>
                
            </div>
                
            </ul>
            </div>
            </div>

            </ModalBody>
            <ModalFooter id='modal-footer' style={{position: 'relative'}} >

            </ModalFooter>
          </ModalContent>
          
        </Modal>
</ChakraProvider>
        
      </>
    )
  }