import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
