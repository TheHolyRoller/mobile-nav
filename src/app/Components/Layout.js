// import { Content } from '../Components/Content'; 

// Import home here 
import Home from '../page.tsx'; 

// Import the navbar in here 

import { Box } from "./Box.js";

export const Layout = ({ children }) => (

<div>
  
    {children}
    
    
    <Home/>
</div>
  
);
