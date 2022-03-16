import React from 'react';
import Logo from '../images/logo.jpg';
// import { Link } from 'react-router-dom'
import { Navbar as NavBarComponent, NavItem, Icon } from 'react-materialize';


const Navbar = () => {
    return (
        <NavBarComponent
            alignLinks="right"
            brand={<a href="/" className="center brand-logo">
                    <img src={Logo} alt='logo' />
                </a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavItem href="/">
                Home
            </NavItem>
            <NavItem href="/workshops">
                Workshops
            </NavItem>
            <NavItem href='/aboutus'>
                About Us
            </NavItem>
            <NavItem href='/contact'>
                Contact
            </NavItem>
            <NavItem href='/cart'>
                <Icon right>
                    shopping_cart
                </Icon>
            </NavItem>
        </NavBarComponent>
            // <nav className="nav">
            //     <div className="nav-wrapper white">
            //         <a href="#!" className="center brand-logo">
            //             <img src={Logo} alt='logo'></img>
            //         </a>
            //         <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons blue">menu</i></a>
            //         <br/>
            //         <div className="center brand-logo">
            //             <ul className="hide-on-med-and-down">
            //                 <li><Link className="blue-text" to="/">Home</Link></li> <li><Link className="blue-text" to="/shop">Shop</Link></li>
            //                 <li><Link className="blue-text" to="/workshops">Workshops</Link></li>
            //                 <li><Link className="blue-text" to="/aboutus">About us</Link></li>
            //                 <li><Link className="blue-text" to="/contact">Contact</Link></li>
            //             </ul>
            //         </div>
            //         <div className="right">
            //         <Link className="blue-text"to="/cart">
            //             <i className="material-icons">shopping_cart</i>
            //         </Link>
            //         </div>
            //         <ul className="sidenav" id="mobile-demo">
            //                 <li><Link className="blue-text" to="/">Home</Link></li> <li><Link className="blue-text" to="/shop">Shop</Link></li>
            //                 <li><Link className="blue-text" to="/workshops">Workshops</Link></li>
            //                 <li><Link className="blue-text" to="/aboutus">About us</Link></li>
            //                 <li><Link className="blue-text" to="/contact">Contact</Link></li>
            //             </ul>
            //     </div>
            // </nav>
   
        
    )
}

export default Navbar;