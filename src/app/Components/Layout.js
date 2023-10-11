// import { Content } from '../Components/Content'; 

// Import home here 
import Home from '../page.tsx'; 

// Import the navbar in here 

import { Box } from "./Box.js";

export const Layout = ({ children }) => (

<div>
  {/* // <Box */}
  
  {/* // style={{backgroundColor: "white", padding: '0', margin: '0'}}
  //   css={{
  //     maxW: "100%"
  //   }}
  // > */}
  
    {children}
    
    {/* Add in the home Component here  */}
    
    {/* Add in the navbar in here  */}
    
    <Home/>
    
    
    {/* <Content /> */}
  {/* // </Box> */}
  
</div>
  
);
