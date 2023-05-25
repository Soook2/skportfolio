import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './index.css';

import App from './App';
import About from './components/About';
import Project from './components/Project';
import ProjectModal1 from './components/ProjectModal1';
import Contact from './components/Contact';
import ProjectModal2 from './components/ProjectModal2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Project" element={<Project />}/>
        <Route path="/Project/AIStore" element={<ProjectModal1 />}/>
        <Route path="/Project/DeepProject" element={<ProjectModal2 />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      
    </BrowserRouter>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
