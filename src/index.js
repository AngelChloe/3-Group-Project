import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import  { Center, VStack, Heading, Tabs, Tab, TabList, TabPanel, TabPanels, ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/layout/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  <Footer />
);
