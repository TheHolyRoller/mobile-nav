/** 

Okay so let's just talk through what I'm going to do today. 


So first of all there are three components that need polishing. 


So those will need to be thoughoughly tested and polished. 

Then we have the popup modal that will be used to make people signup to the newsletter. 

Okay so that will need to be designed and created. 

I think the best approach will be to start with the popup modal and then once that 

is finished and polished to a degree then I can finish polishing off those 

other three components. 

Then once that is done I can do the planning and layout for the pages and the effects & animations. 

Then once that is done. It shouldn't take too long then we can move onto getting the built 

functional components working. 


Then if that is started today another day I can start on adapting the different 

UI components for the other pages and polishing them up and then integrating the functional 

components in. 

And then another day I can add the routing, effects and animations. 

Okay so that sounds great once that is done then I can get on with hosting the website. 

So let's talk through how I'm going to go about designing and implementing this modal 

that will be used as a signup form. 

I'll start with going through some examples online and then creating a strategy 

to implement the right one. 












*/


















 'use client'
 
 
 
import React, {useState, useEffect, useReducer, useRef} from 'react'; 
import { useDisclosure, useStatStyles } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react';
  
  
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
 export default function NewDrawer() {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleClick(size)}
            key={size}
            m={4}
          >{`Open ${size} Drawer`}</Button>
        ))}
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                Lectus vestibulum mattis ullamcorper velit.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }