import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useContext, useState } from 'react';

//Importing components
import Registr from './components/Registr';
import Login from './components/Login';
import Main from './components/Main';
import PageNotFound from './components/PageNotFound';
import Favourites from './components/Favourites';
import History from './components/History';
import Info from './components/Info';
import NavBar from './components/NavBar';
import PleaseLogin from './components/PleaseLogin';


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
    <>
    <BrowserRouter>
    <NavBar />
      <div className="App">
     
        <Routes>
          { auth && <Route path="/main" element={<Main />}/> }
          { !auth &&  <Route path="/main" element={<PleaseLogin />}/> }
          <Route path="/register" element={<Registr />}/> 
          { !auth && <Route path="/" element={<Login login={login} />}/>}
          {auth && <Route path="/" element={<PleaseLogin login={login} />}/> }
          <Route path="/info" element={<Info logout={logout} user={user} />}/> 
          <Route path="*" element={<PageNotFound/>}/>
          { auth && <Route path="/favourites" element={<Favourites/>}/> }
          { !auth &&  <Route path="/favourites" element={<PleaseLogin />}/> }
          { auth && <Route path="/history" element={<History/>}/> }
          { !auth &&  <Route path="/history" element={<PleaseLogin />}/> }
        </Routes>
        
      </div>
    </BrowserRouter> 
    </>
  );
}

export default App;
