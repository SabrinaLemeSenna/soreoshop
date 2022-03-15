import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Workshops from './components/Workshops'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/workshops" component={Workshops}/>
                    <Route path="/aboutus" component={Aboutus}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
