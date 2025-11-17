import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import N from './N';
import Movies from './Movies';
import Modal from './Modal';
function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/N" element={<N/>}/>
       <Route path="/Modal" element={<Modal/>}/>
       <Route path="/Movies" element={<Movies/>}/>
       </Routes>
  )
}

export default App