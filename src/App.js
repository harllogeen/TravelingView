import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Watch from './Pages/Watch'
import SignUp from './Pages/SignUp';
import './App.css'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact  element={<Home />} />
        <Route path="/products" exact  element={<Products />} />
        <Route path="/services" exact  element={<Services />} />
        <Route path="/watch" exact  element={<Watch />} />
        <Route path="/sign-up" exact  element={<SignUp />} />
      </Routes>
    </Router>
      
    
  );
}

export default App;
