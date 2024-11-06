// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/Home/AboutUs';
import WelcomeAVO from './Components/Home/WelcomeAVO';
import OurWork from './Components/Home/OurWork';
import Clock from './Components/Home/Clock';
import Portfolio from './Components/Home/Portfolio';
import HandWriting from './Components/Home/HandWriting';
import Keyboard from './Components/Home/Keyboard';
import Spiral from './Components/Home/Spiral';
import Clients from './Components/Home/Clients';
import RecentBlog from './Components/Home/RecentBlog';
import Footer from './Components/Home/Footer';
import Cards from './Components/Home/Cards';
import ExpertTeam from './Components/About/ExpertTeam';
import ContactUs from './Components/Contact/ContactUs';
import Inputs from './Components/Contact/Inputs';
import WrongIcon from './Components/Contact/WrongIcon';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main route for Home page */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <AboutUs />
              <WelcomeAVO />
              <OurWork/>
              <Clock/>
              <Portfolio/>
              <HandWriting/>
              <Keyboard/>
              <Spiral/>
              <Clients/>
              <Cards/>
              <RecentBlog/>
              <Footer/>
            </>
          } 
        />
        
        {/* Other routes */}
        <Route path="/about" element={
        <>
        <About />
        <AboutUs/>
        <WelcomeAVO/>
        <Cards/>
        <ExpertTeam/>
        <Clients/>
        <Footer/>
        </>
      } />
        <Route path="/work" element={
        <>
        <Work />
        <OurWork/>
        <Clock/>
        <Portfolio/>
        <HandWriting/>
        <Keyboard/>
        <Spiral/>
        <Footer/>
        </>
      } />
        <Route path="/blog" element={
        <>
        <Blog />
        <RecentBlog/>
        <Footer/>
        </>
      } />
        <Route path="/contact" element={
        <>        
        <Contact />
        <ContactUs/>
        <Inputs/>
        <WrongIcon/>
        <Footer/>
        </>

        } />
      </Routes>
    </Router>
  );
};

export default App;
