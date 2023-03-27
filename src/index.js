
/*
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Functionality from "./Functionality";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <Functionality/>
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
**/

/*
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Homepage from "./Homepage";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <Homepage/>
    </ChakraProvider>
  </StrictMode>,
  rootElement
); 
*/



import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import PySparkTutorial from "./PySparkTutorial";
import "./styles.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <PySparkTutorial/>
    </ChakraProvider>
  </StrictMode>,
  rootElement
); 
