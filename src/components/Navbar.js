import React from 'react';
import M from 'materialize-css';
import Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });

    return(
        
            <nav class="nav">
                <div class="nav-wrapper white">
                    <a href="#!" class="center brand-logo">
                        <img src={Logo}></img>
                    </a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons blue">menu</i></a>
                    <br/>
                    <div class="center brand-logo">
                        <ul class="hide-on-med-and-down">
                            <li><Link class="blue-text" to="/">Home</Link></li> <li><Link class="blue-text" to="/shop">Shop</Link></li>
                            <li><Link class="blue-text" to="/workshops">Workshops</Link></li>
                            <li><Link class="blue-text" to="/aboutus">Aboutus</Link></li>
                            <li><Link class="blue-text" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div class="right">
                    <Link class="blue-text"to="/cart">
                            <i className="material-icons">shopping_cart</i>
                        </Link>
                    </div>
                    <ul class="sidenav" id="mobile-demo">
                            <li><Link class="blue-text" to="/">Home</Link></li> <li><Link class="blue-text" to="/shop">Shop</Link></li>
                            <li><Link class="blue-text" to="/workshops">Workshops</Link></li>
                            <li><Link class="blue-text" to="/aboutus">Aboutus</Link></li>
                            <li><Link class="blue-text" to="/contact">Contact</Link></li>
                        </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;