import React from "react";
import ReactDOM from "react-dom";
import { SimpleGrid, Text, ChakraProvider } from "@chakra-ui/react";

import { load } from "./store";
// load("hv-taplist");
load("growlers-tap-station");

import Search from "./components/Search";
import Taps from "./components/Taps";
import Cart from "./components/Cart";

import "./index.css";
// import ReactQueryProvider from "./components/ReactQueryProvider";
// import ReactQueryData from "./components/ReactQueryData";

const H3 = ({ children }) => (
  <Text fontSize="xl" mb={3} fontWeight="bold" textAlign="center">
    {children}
  </Text>
);

const App = () => (
  <div>hithere</div>
  // <ReactQueryProvider>
  //   <ReactQueryData />
  // </ReactQueryProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
