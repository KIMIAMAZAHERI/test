import React , {component} from "react";
import {BrowserRouter , Route, Routes} from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <Container>
    <div>
      <Header/>
    </div>
   
    <div className="container">
    
    <Routes> 
        <Route path="/about"  element={<About/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/contact"  element={<Contact/>}/>
    
    </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </Container>
   </BrowserRouter>
  );
}



export default App;
