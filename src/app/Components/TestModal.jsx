
import React from 'react'; 

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box, 
    Button
    
  } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
  


 export default function TestModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
  
    return (
      <>
        {/* <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
          Some other content that'll receive focus on close.
        </Box> */}
  
        <Button mt={4} onClick={onOpen}>
          Open Modal
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} style={{position: 'relative', zIndex: '20'}} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }