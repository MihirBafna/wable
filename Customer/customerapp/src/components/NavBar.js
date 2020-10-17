import React from 'react';
import NCR from '../img/NCR.png';
import {
    Navbar,
    NavbarBrand,
    NavLink,
    NavbarText
} from 'reactstrap';

const NavBar = (props) => {

    return ( 
      <div>
        <Navbar color = "light" light expand = "md" >
        <NavbarBrand href = "/"
        color = "" > < img src = { NCR }
        className = "App-logo"
        alt = "logo"
        width = "70px"/> | wable </NavbarBrand> 
        <NavbarText right = "" > < NavLink href = "https://github.com/MihirBafna/wable" > GitHub </NavLink> </NavbarText >
        </Navbar> 
        </div>
    );
}

export default NavBar;