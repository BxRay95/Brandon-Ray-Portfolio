import React from 'react';
import CustomNavbar from './components/Navbar';
import './App.css'
import HomePage from './components/HomePage';
import MyProjects from './components/MyProjects';

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <MyProjects />
    </div>
  );
}

export default App;
