        /** 
         * 
        */


        'use client'


        import React from 'react'

        import yt from '../Styles/YouTube.module.css'; 
        
        // import '../Styles/Youtube.css'; 
        import { FaBeer } from "react-icons/fa";
        import { FaFacebook} from 'react-icons/fa'; 
        import { FaYoutube} from 'react-icons/fa'; 

        function YoutubeCTA() {
        return (
        
        // Add in the main component container here 
            <div id='component-container' >
            
            {/* Add in the component sub-container here  */}
            
            <div id='component-sub-container' >
            
            {/* Add in the text section container  */}
            
            <div id='text-section-container' >
            
            <div id='headline-container' >
            
            <div id='text-section-headline' >
                
            Join us for live Services Three Times a Week 
            
            
            </div>
            
            <div id='info-text-container' >
            
            <div id='info-text' >
            
            Get filled with the Word of God and the true Gospel Spoken from the Heart. The 
            Albanian Service is Friday Morning 7 am, the English Service is on Tuesday from 9pm to 10pm and the final service is on Kisha Online. 
            
                
            </div>

                
            </div>

                
            </div>

            
            
            
            {/* ---Text Section Container */}
            </div>
            
            {/* Add in the Youtube Section Container  */}
            
            <div id='live-link-section-container' >
            
            <div id='live-link-list-container' >
            
            {/* Add in the list her  */}
            <ul id='live-link-list'> 
            
            <li id='live-list-item' >
            
            {/* Add in the Icon here  */}
            
            {/* Create the button for the Live here  */}
            
            <button id='live-link-btn'>


            <FaYoutube id='youtube-link' />

            </button> 
            
            
            
            {/* Add in the Link to Facebook Live here  */}
                
            </li>
            <li id='live-list-item' >
            
            {/* Create the CTA Button here  */}
            <button id='live-link-btn'>


{/* <FaYoutube id='youtube-link' /> */}
            <FaFacebook id='facebook-link' />

</button> 
            
            {/* Add in the Icon here  */}
            
            {/* Add in the Link to the Youtube Channel here  */}
                            

            </li>
            </ul>
                
            </div>

            
            </div>

            
            {/* __________+++___------------ */}
        {/* -------Youtube-Section--------- */}
        <div id="cta-text-container">
            
            <div id="cta-text">
            
            Please watch below:
            
            </div>

            
            </div>
            
            <div id='youtube-section-container' >
            
            <div id='youtube-section' >
            
            <div id='youtube-video' style={{backgroundColor: 'red', width: '501px', minHeight: '45vh', margin: '0 auto'}}  >
            
            {/* Add in the embedded youtube Container here  */}
                
            {/* Add in the embedded video Link here  */}
                
            </div>
                
            </div>
                
                
            </div>
            
            
            {/* Component sub-container */}
            </div>
            
            
            {/* Add in the Link Section container here  */}
            
            
            
            {/* Youtube  */}
            {/* Component Container */}
            </div>
        )
        }
        
        export default YoutubeCTA
