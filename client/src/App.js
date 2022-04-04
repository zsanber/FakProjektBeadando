import React,{useEffect, useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import axios from 'axios';
import {Navbar} from './components/Navbar'
import {Home} from './components/Home'
import {Filter} from './components/Filter'
import {Statistic} from './components/Statistic'

function App() {
    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
