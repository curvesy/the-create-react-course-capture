import React from 'react';
import GlobalStyle from './components/GlobalStyle';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path="/" exact>
        <AboutUs />
      </Route>
      <Route path="/work">
        <OurWork />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
