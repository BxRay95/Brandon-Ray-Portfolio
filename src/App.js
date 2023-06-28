import React from 'react';
import CustomNavbar from './components/Navbar';
import './App.css'
import HomePage from './components/HomePage';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App;
