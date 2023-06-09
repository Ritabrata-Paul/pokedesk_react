import React from 'react'
import Background from './components/Background';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import Wrapper from './sections/Wrapper';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './scss/index.scss';
import Search from './pages/Search';
import Mylist from './pages/Mylist';
import About from './pages/About';
import Compare from './pages/Compare';
import Pokemon from './pages/Pokemon';

const App = () => {
  return (
    <div className='main-container'>
    <Background />
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <Routes>
        <Route element={<Search />} path="/search" />
        <Route element={<Mylist />} path="/list" />
        <Route element={<About />} path="/about" />
        <Route element={<Compare />} path="/compare" />
        <Route element={<Pokemon />} path="/pokemon/:id" />
        <Route element={<Navigate to="/pokemon/1" />} path="*" />
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App;