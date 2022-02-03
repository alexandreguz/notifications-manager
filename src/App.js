import React from 'react';
// import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import CreateNotification from './components/CreateNotification';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/createnotification' element={<CreateNotification/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
