'use client'

import React from 'react'

import g  from '../Styles/Give.module.css'; 

import GivingHero from '../Components/GivingHero'; 





function GiveCTA() {
  
  // Define a function that takes a custom URL as a parameter
function openDonationWindow (customUrl) {
  // Use window.open () to open a new window with the custom URL
  // You can also specify the window name, features, and replace flag as optional parameters
  // For example, you can set the window name to "Donation", the features to "width=800,height=600", and the replace flag to true
  // See the web search results for more details on how to use window.open ()
  let donationWindow = window.open (customUrl, "Donation", "width=800,height=600", true);
  // Check if the window was opened successfully
  if (donationWindow) {
    // Focus on the new window
    donationWindow.focus ();
  } else {
    // Alert the user that the window could not be opened
    alert ("The donation window could not be opened. Please check your browser settings.");
  }
}

// Call the function with your custom URL
// For example, you can use the Stripe donation link that you mentioned
// openDonationWindo w ("https://checkout.stripe.com/pay/cs_test_a1hjQ6l0Y8zGw7gq3Y9t7oZ1Xm4xQ2Wq8J0yKvX9tZnL6fUc4j5f5pRb00");

const openDonation = () => {

openDonationWindow ("https://donate.stripe.com/test_7sI5kOexagFeeJicMN");
  
}

  return (
    <div id={g.maincontainer}>
    
    {/* Add in the component container here */}
    <GivingHero/> 
    
    <div id={g.componentcontainer}>
    
    {/* Add in the subcontainer here  */}
    
    <div id={g.componentsubcontainer}>

    {/* Add in the top text section container  */}
    
    <div id={g.toptextsection}>
    
    {/* Add in the top text container here  */}
    
    
    
    <div id={g.toptextcontainer}>
    
    Because of the great gift we have been given in Jesus, we are committed to living lives of sacrificial generosity. God calls us to give. Not only to meet the internal needs of the church, but also to reach our local community and the world

    </div>
        
        
        
    </div>
    
    
    {/* Add in the main text section here  */}
    
    <div id={g.maintextsection}>
    
    
    {/* Add in the headline container here */}
    
    <div id={g.mainheadlinecontainer}> 
    
    <div id={g.headlinecontainer}>

    <h1 id={g.giveheadline}>
    How to Give 
    </h1>
    </div>
        
    </div>
    
    
    {/* Add in the bullet list container here  */}
    
    <div id={g.giveoptionscontainer}>
    
    {/* Add in the give options list here  */}
    <ul id={g.giveoptionslist}>
    
    <li id={g.givelistitem}>
    
    {/* Add in the top section container  */}
    
    <div id={g.titlecontainer}>
    
    <div id={g.givetitle}> 
    
    1. In Person 
        
    </div>

    </div>
        
    {/* Add in the give details container here  */}
    
    <div id={g.givedetailscontainer}> 
    
    <div id={g.givedetails}>
    Drop your a cash or check offering in the basket during the designated time in a service. Make checks out to The River Family Church.
    
        
        
    </div>
        
    </div>

        
    </li>
    <li id={g.givelistitem}>
    
    {/* Add in the top section container  */}
    
    <div id={g.titlecontainer}>
    
    <div id={g.givetitle}> 
    
    2. By Mail        
    </div>

    </div>
        
    {/* Add in the give details container here  */}
    
    <div id={g.givedetailscontainer}> 
    
    <div id={g.givedetails}>
    You can mail a check made out to The River Family Church to our offices at 390 Mimosa Avenue, Vista CA, 92081.
    
        
        
    </div>
        
    </div>

        
    </li>
    <li id={g.givelistitem}>
    
    {/* Add in the top section container  */}
    
    <div id={g.titlecontainer}>
    
    <div id={g.givetitle}> 
    
    3. Online     
    </div>

    </div>
        
    {/* Add in the give details container here  */}
    
    <div id={g.givedetailscontainer}> 
    
    <div className="givebtncta"  id={g.givedetailsbtn} style={{backgroundColor: 'white', color: 'black'}} >
        
        
    </div>
        
    </div>

        
    </li>

    
    
    </ul>
    
    
    
    </div>
        
        
    </div>
    
    
    {/* CTA Button Section */}
    
    {/* Add in the button section container here  */}

    <div id={g.buttonsectioncontainer}>
    
    {/* Add in the button section subcontainer here  */}
    
    <div id={g.buttonsectionsubcontainer} >
    
    {/* Add in the button container here  */}
    <div id={g.buttoncontainer}>
    
    <div id={g.btnsubcontainer}>

      
   
    <button href='https://donate.stripe.com/test_7sI5kOexagFeeJicMN'  id={g.givebtn} onClick={openDonation} > 
    
    Give Online 
    
    
    </button>
      
    </div>
    </div>
    
    
    {/* Add in the options container here  */}
    
    <div id={g.optionscontainer}>
    
    {/* Add in the options subcontainer here  */}

    
    <div id={g.optionssubcontainer}> 

    
    
    <ul id={g.optionslist}>

 
        
    </ul>
    
    </div>
    
    
    
    
    </div>
        
    </div>
    
    
    



    </div>
        
    </div>

    
    
    </div>
    

    </div>
  )
}

export default GiveCTA
