import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Workshops from './components/Workshops'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Routes>
                  <Route exact path="/" element={<Home />}/>
                  <Route path="/shop" element={<Shop />}/>
                  <Route path="/workshops" element={<Workshops />}/>
                  <Route path="/aboutus" element={<Aboutus />}/>
                  <Route path="/contact" element={<Contact />}/>
                  <Route path="/cart" element={<Cart />}/>
                </Routes>
              <Footer />
             </div>
       </BrowserRouter>
    );
  }
}

export default App;
