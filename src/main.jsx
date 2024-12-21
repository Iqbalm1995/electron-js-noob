import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Import the App component
import { ChakraProvider, theme } from "@chakra-ui/react";

// Create the root element where React will mount
const root = ReactDOM.createRoot(document.getElementById("app"));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
