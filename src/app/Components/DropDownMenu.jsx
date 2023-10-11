// DropdownMenu.js


'use client'

import React, { useState } from "react";

// Define the component as a function
const DropdownMenu = ({ options, initialValue, onChange }) => {
  // Use state to store the current value and the open status of the dropdown menu
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);

  // Define a function to handle the click on the dropdown menu
  const handleClick = () => {
    // Toggle the open status
    setOpen(!open);
  };

  // Define a function to handle the selection of an option
  const handleSelect = (option) => {
    // Set the value to the selected option
    setValue(option);
    // Close the dropdown menu
    setOpen(false);
    // Call the onChange function with the selected option
    onChange(option);
  };

  // Define a style object for the dropdown menu container
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "5px",
    cursor: "pointer",
  };

  // Define a style object for the dropdown menu value
  const valueStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    fontSize: "16px",
    fontWeight: "bold",
  };

  // Define a style object for the dropdown menu icon
  const iconStyle = {
    marginLeft: "10px",
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease-in-out",
  };

  // Define a style object for the dropdown menu options
  const optionsStyle = {
    display: open ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "5px",
    overflowY: "auto",
  };

  // Define a style object for each option
  const optionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontSize: "14px",
    padding: "5px",
    cursor: "pointer",



  }
  
  
}