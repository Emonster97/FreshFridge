import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useContext, useState } from 'react';

//Importing components
import Registr from './components/Registr';
import Login from './components/Login';
import Main from './components/Main';
import PageNotFound from './components/PageNotFound';
import Info from './components/Info';

//Importing providers
import { authContext } from './providers/AuthProvider';

//Importing bootstrap and font-awesome
import 'font-awesome/css/font-awesome.css';
import "bootstrap/dist/css/bootstrap.min.css";

//Importing jquery and bootstrap js
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.bundle.min";

var axios = require("axios").default;

function App() {
  const { auth, user, login, logout } = useContext(authContext);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Main />}/> 
          <Route path="/register" element={<Registr />}/> 
          <Route path="/login" element={!auth && <Login login={login} />}/> 
          <Route path="/info" element={<Info logout={logout} user={user} />}/> 
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
