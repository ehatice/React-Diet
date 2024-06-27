import React, { useState } from "react";
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
