import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Component/Navbar/Navbar';
import Category from './Component/Category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" element = {<App/>} />
     <Route path="/general" element={<Category cat="general"/>}></Route>
     <Route path="/business" element={<Category cat="business"/>}></Route>
     <Route path="/sports" element={<Category cat="sports"/>}></Route>
     <Route path="/technology" element={<Category cat="technology"/>}></Route>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
