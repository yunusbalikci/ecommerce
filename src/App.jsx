import { useState } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import Home from './Pages/Home'
import Details from './Pages/Details'
import Login from './Pages/Login';
import Register from './Pages/Register';
import { CartProvider } from './Components/CartContext'; 
import Footer from './Components/Footer';

function App() {

  return (
    <>
    <CartProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
