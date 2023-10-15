// Import React from "react";
import React from "react";

// Import Link from "next/link";
import { Link } from "next/link";

// Create a button component that takes a route prop
 export const LinkButton = ({ href, route, children, className, onClick }) => {
  // Return the button JSX wrapped in a Link component
  return (
    <Link href={route}>
      <button>{children}</button>
    </Link>
  );
};

// Export the button component
// export default LinkButton;
