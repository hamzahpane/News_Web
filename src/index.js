import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Component/Navbar/Navbar';
import Footer from './Component/Footer';
import General from './Page/General';
import Bisnis from './Page/Bisnis';
import Sports from './Page/Sports';
import Tecknologi from './Page/Tecknologi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" element = {<App/>} />
     <Route path="/general" element={<General/>}></Route>
     <Route path="/business" element={<Bisnis/>}></Route>
     <Route path="/sports" element={<Sports/>}></Route>
     <Route path="/technology" element={<Tecknologi/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
