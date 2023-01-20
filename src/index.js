import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import NaveBarComponent from './components/navebar/naveBarComponent';
import Login from './pages/loginPage/login';
import Home from './pages/homePage/home';
import Fitness from './pages/fitnessPage/fitness';
import Nutrition from './pages/nutritionPage/nutrition';
import Zyms from './pages/zyms/zyms';
import Partners from './pages/partners/partner';
import About from './pages/about/about';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NaveBarComponent/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="fitness" element={<Fitness/>} />
      <Route path="nutrition" element={<Nutrition/>} />
      <Route path="zyms" element={<Zyms/>} />
      <Route path="partners" element={<Partners/>} />
      <Route path="about" element={<About/>} />
      <Route path="login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
