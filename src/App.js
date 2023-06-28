import React from 'react';
import CustomNavbar from './components/Navbar';
import './App.css'
import HomePage from './components/HomePage';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
