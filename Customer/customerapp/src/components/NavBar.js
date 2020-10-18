import React from 'react';
import NCR from '../img/NCR.png';
import githublogo from '../img/github.svg'
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
                <NavbarBrand style={{ fontSize: "20x" }} href = "/"> < img src = { NCR } className = "App-logo" alt = "logo"
                    width="70px" /> | wable<NavbarText style={{color:"#5DB2B2", fontSize:"20x"}} >-CX</NavbarText></NavbarBrand> 
                <NavbarBrand className="ml-auto" href="https://github.com/MihirBafna/wable"><img src={githublogo} className="App-logo" alt="logo"
            width="30px" /></NavbarBrand>
        </Navbar> 
        </div>
    );
}

export default NavBar;