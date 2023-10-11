/** 

Okay so let's just talk things through. 

I need to finish the image slider. 


First of all I need to make sure the all the text including the button is 

properly centered. 


Then once that is done I need to adjust things with media queries at different screen 

widths. 

Once that is done then I need to work on the appearance of the text. 

One idea I have is to do the same thing with the image labels as I have done with the typography. 

That way each image can have it's own unique label and button. 


Okay so once that is done I need to make sure everything is fully responsive. 

Then I can move onto other UI components. 


Okay so let's talk through what I'm going to do now. 

First of all I'm going to add in a working button to each img object. 

Once that has been done them I'm going to add in a label and a title. 

Once that has been done them I'm going to add in the typography to render this text and the 

button and then once I've added the ids in and added them to the CSS stylesheet then 

I'm going to move this typography around so that it is in the right place and 

then I'm going to work on making it responsive. 



 
 
 
 * 
\*/






import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// Import the stylesheet here 

import '../Styles/Slider.css'; 

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: 'Make the most of it',
    label: 'San Francisco – Oakland Bay Bridge, United States',
    button: <button id='object-btn' > Take Action </button>, 
    imgPath:
      'https://images.unsplash.com/photo-1611303822411-e890e5c105bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNub3d5JTIwbW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&h=1100&q=60',
  },
  {
    title: 'Let Us Start', 
    button: <button id='object-btn'> Take Action  </button>, 
    label: 'Help us make a start on our Make the most vision project, a building that will reach then next generation, provide ways to connect and form a community together ',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1100&h=450&q=60',
  },
  {
    title: 'Help Out ',
    label: 'The Make the Most project supported by our Vision Offering is more than a building that will reach the next generation, a building that will,  provide ways to connect, form community and grow together ',
    button: <button id='object-btn'> Take Action</button>,
    // <Button id='object-button'  to='/nav' alt='alt' > Learn More  </Button>
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1100&h=450',
  },
  {
    title: 'Volunteer',
    label: 'Make the Most',
    button: <button id='object-btn' style={{}} > Take Action   </button>, 
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=1100&h=450&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box id='slider-container'  sx={{ maxWidth: 1700, minHeight: 930, flexGrow: 1 }}    >
      <Paper
      id='slider-paper'
      style={{outline: '00px solid blue', }}
        // square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
      
      <div id='main-slider-text-container' >
        
        
      <Typography id='slider-text' >{images[activeStep].title}
        
         
       
        
        </Typography>
        
        
        
        
        
      <Typography id='slider-header' >
        
        
        
        {images[activeStep].label}
        <Typography id='slider-btn' >
        
        
          {images[activeStep].button}

        
        </Typography>
        

        
        
        </Typography>

        
        
        
     
        
      
      
      </div> 
      
       
        {/* <div id='slider-btn-container' >

          
        <Typography id='slider-btn' >

{images[activeStep].button}

</Typography> 
          
        </div> */}
        

        {/* <div id='slider-button'  className="carousel--content-butt"><a href="http://renewalcc.com/letusstart" title="" target="" className="myButton">FIND OUT MORE</a></div> */}
        
        
      </Paper>
      <AutoPlaySwipeableViews
      
      id='slider-autoplay'
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div id='slider-img-container'  key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              
              id='slider-img-box'
              style={{outline: '0px solid red', position: 'relative'}}
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 1700,
                  minHeight: 530,
                  
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}

              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      
      id='mobile-slider-stepper'
      style={{outline: '0px solid lime', }}
      
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
          
          id='slider-right-btn'
          style={{outline: '0px solid lime', transform: 'translate(-12rem, -17rem)'}}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            
            
          >
          {/* <svg width="42" height="44" xmlns="http://www.w3.org/2000/svg"><path d="M21.085 42c-.761 0-1.463-.121-2.085-.36a48.03 48.03 0 0 1-7.287-3.41c-2.238-1.268-4.505-2.858-6.733-4.726-1.019-.867-1.713-1.98-2.012-3.226A35.812 35.812 0 0 1 2 22c0-2.728.34-5.542 1.011-8.363.31-1.189.917-2.227 1.759-3.021 2.197-2.013 4.328-3.583 6.527-4.81A40.507 40.507 0 0 1 19.134 2.3c1.2-.4 2.531-.401 3.74.003a40.535 40.535 0 0 1 7.842 3.51c2.357 1.387 4.544 2.999 6.504 4.792a5.666 5.666 0 0 1 1.773 3.048C39.659 16.273 40 19.093 40 22c0 2.728-.34 5.542-1.011 8.363-.317 1.214-.945 2.259-1.822 3.04-2.179 1.996-4.31 3.565-6.507 4.791a37.905 37.905 0 0 1-7.706 3.503 5.99 5.99 0 0 1-1.869.304zm.898-26.112L15.62 21.81a.825.825 0 0 0 0 1.212l6.364 5.923a.82.82 0 0 0 1.165-.044.829.829 0 0 0-.043-1.168l-5.714-5.318 5.713-5.317a.828.828 0 0 0 .044-1.168c-.554-.236-.942-.25-1.165-.043z" stroke="#FFF" strokewidth="{2.2}" fill="none" fillrule="evenodd" /></svg> */}
            
          <svg id='slider-right-svg'  width="42" height="44" xmlns="http://www.w3.org/2000/svg"><path d="M20.915 42c.761 0 1.463-.121 2.085-.36a48.03 48.03 0 0 0 7.287-3.41c2.238-1.268 4.505-2.858 6.733-4.726 1.019-.867 1.713-1.98 2.012-3.226.643-2.701.968-5.486.968-8.279 0-2.728-.34-5.542-1.011-8.363-.31-1.189-.917-2.227-1.759-3.021-2.197-2.013-4.328-3.583-6.527-4.81A40.507 40.507 0 0 0 22.866 2.3a5.944 5.944 0 0 0-3.74.003 40.535 40.535 0 0 0-7.842 3.51 38.743 38.743 0 0 0-6.504 4.792 5.666 5.666 0 0 0-1.773 3.048C2.341 16.273 2 19.093 2 22c0 2.728.34 5.542 1.011 8.363.317 1.214.945 2.259 1.822 3.04 2.179 1.996 4.31 3.565 6.507 4.791a37.905 37.905 0 0 0 7.706 3.503 5.99 5.99 0 0 0 1.869.304zm-.898-26.112l6.364 5.923a.825.825 0 0 1 0 1.212l-6.364 5.923a.82.82 0 0 1-1.165-.044.829.829 0 0 1 .043-1.168l5.714-5.318-5.713-5.317a.828.828 0 0 1-.044-1.168c.554-.236.942-.25 1.165-.043z" stroke="#FFF" strokeWidth={2.2} fill="none" fillRule="evenodd" /></svg>

          
          </Button>
          
          
        }
        backButton={
          <Button 
          id='slider-left-btn'
          style={{outline: '0px solid blue', transform: 'translate(12rem, -17rem)'}}
          size="small" onClick={handleBack} disabled={activeStep === 0}>

            
            <svg id='slider-left-svg'  width="42" height="44" xmlns="http://www.w3.org/2000/svg"><path d="M21.085 42c-.761 0-1.463-.121-2.085-.36a48.03 48.03 0 0 1-7.287-3.41c-2.238-1.268-4.505-2.858-6.733-4.726-1.019-.867-1.713-1.98-2.012-3.226A35.812 35.812 0 0 1 2 22c0-2.728.34-5.542 1.011-8.363.31-1.189.917-2.227 1.759-3.021 2.197-2.013 4.328-3.583 6.527-4.81A40.507 40.507 0 0 1 19.134 2.3c1.2-.4 2.531-.401 3.74.003a40.535 40.535 0 0 1 7.842 3.51c2.357 1.387 4.544 2.999 6.504 4.792a5.666 5.666 0 0 1 1.773 3.048C39.659 16.273 40 19.093 40 22c0 2.728-.34 5.542-1.011 8.363-.317 1.214-.945 2.259-1.822 3.04-2.179 1.996-4.31 3.565-6.507 4.791a37.905 37.905 0 0 1-7.706 3.503 5.99 5.99 0 0 1-1.869.304zm.898-26.112L15.62 21.81a.825.825 0 0 0 0 1.212l6.364 5.923a.82.82 0 0 0 1.165-.044.829.829 0 0 0-.043-1.168l-5.714-5.318 5.713-5.317a.828.828 0 0 0 .044-1.168c-.554-.236-.942-.25-1.165-.043z" stroke="#FFF"  stroke-width='2.2' strokewidth="{2.2}" fill="none" fillrule="evenodd" /></svg>
            
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;