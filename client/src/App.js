import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

//Importing components
import Registr from './components/Registr';
import Login from './components/Login';
import Main from './components/Main';
import PageNotFound from './components/PageNotFound';

//Importing bootstrap and font-awesome
import 'font-awesome/css/font-awesome.css';
import "bootstrap/dist/css/bootstrap.min.css";



//Importing jquery and bootstrap js
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.bundle.min";

var axios = require("axios").default;

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}/> 
          <Route path="/register" element={<Registr />}/> 
          <Route path="/login" element={<Login />}/> 
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
