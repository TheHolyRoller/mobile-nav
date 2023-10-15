'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import GalleryHero from '../Components/Heros/GalleryHero'; 
import ga from '../Styles/Gallery.module.css'; 

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gallery() {
  return (
  
  
  <div id={ga.mainContainer} >
  
  <div id={ga.subContainer}>
  
  
  <GalleryHero/> 

  
  <div id={ga.gridContainer} >
  
  <div id={ga.galleryGrid} >

  
  <div id={ga.masonryItem} >

  

  
  {/* Add in the masonry here */}
  
  <Box sx={{ width: 500, minHeight: 377 }} style={{outline: '10px solid red', margin: '0 auto', position: 'relative'}} >
    
  <div id={ga.titleContainer} >
  
  <div id={ga.gridItemTitle} >
    
   Grid Item Title 

  </div>

  </div>  
 
      
    <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
      {heights.map((height, index) => (
        <Item key={index} sx={{ height }}>
          {index + 1}
        </Item>
      ))}
    </Masonry>
  </Box>
  

  </div>
  <div id={ga.masonryItem} >
  
  {/* Add in the title container here  */}
  
 
  {/* Add in the masonry here */}
  <Box sx={{ width: 500, minHeight: 377 }} style={{outline: '10px solid red', margin: '0 auto', position: 'relative'}} >
  <div id={ga.titleContainer} >
  
  <div id={ga.gridItemTitle} >
    
   Grid Item Title 

  </div>

  </div>
  
      
      
    <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
      {heights.map((height, index) => (
        <Item key={index} sx={{ height }}>
          {index + 1}
        </Item>
      ))}
    </Masonry>
  </Box>
  

  </div>
  {/* <div id={ga.masonryItem} >
  
  
  <div id={ga.titleContainer} >
  
  <div id={ga.gridItemTitle} >
    
   Grid Item Title  
    
    
  </div>

  </div>
  
  
  <Box sx={{ width: 500, minHeight: 377 }} style={{outline: '10px solid red', margin: '0 auto'}} >
    
      
      
    <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
      {heights.map((height, index) => (
        <Item key={index} sx={{ height }}>
          {index + 1}
        </Item>
      ))}
    </Masonry>
  </Box>

  </div> */}
  
    
    
    
  </div>
  <div id={ga.galleryGrid} >
    
   
  {/* First masonry Item container  */}
  
  <div id={ga.masonryItem} >
  
  {/* Add in the title container here  */}
  
  <div id={ga.titleContainer} >
  
  <div id={ga.gridItemTitle} >
    
   Grid Item Title  
    
    
  </div>

  </div>
  
  {/* Add in the masonry here */}
  
  <Box sx={{ width: 500, minHeight: 377 }} style={{outline: '10px solid red', margin: '0 auto'}} >
    
      
      
    <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
      {heights.map((height, index) => (
        <Item key={index} sx={{ height }}>
          {index + 1}
        </Item>
      ))}
    </Masonry>
  </Box>
  

  </div>
  <div id={ga.masonryItem} >
  
  {/* Add in the title container here  */}
  
  <div id={ga.titleContainer} >
  
  <div id={ga.gridItemTitle} >
    
   Grid Item Title 

  </div>

  </div>
  
  {/* Add in the masonry here */}
  <Box sx={{ width: 500, minHeight: 377 }} style={{outline: '10px solid red', margin: '0 auto'}} >
    
      
      
    <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
      {heights.map((height, index) => (
        <Item key={index} sx={{ height }}>
          {index + 1}
        </Item>
      ))}
    </Masonry>
  </Box>
  

  </div>
  {/* <div id={ga.masonryItem} >
  
  
  <div id={ga.titleContainer} >
  
  <div id={ga.gridItemTitle} >
    
   Grid Item Title  
    
    
  </div>

  </div>
  
  
  <Box sx={{ width: 500, minHeight: 377 }} style={{outline: '10px solid red', margin: '0 auto'}} >
    
      
      
    <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
      {heights.map((height, index) => (
        <Item key={index} sx={{ height }}>
          {index + 1}
        </Item>
      ))}
    </Masonry>
  </Box>

  </div> */}
  
    
    
    
  </div>
  
  
  
  </div>
  
  </div>
  
 
  </div>
    
  );
}