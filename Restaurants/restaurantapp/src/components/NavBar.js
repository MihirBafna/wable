import React from 'react';
import NCR from '../img/NCR.png';
import githublogo from '../img/github.svg'
import analytics from '../img/analytics.svg'
import tableview from '../img/tableview.svg'

import {
    Navbar,
    NavbarBrand,
    NavbarText
} from 'reactstrap';

const NavBar = (props) => {

    return ( 
      <div>
        <Navbar color = "light" light expand = "md" >
                <NavbarBrand style={{ fontSize: "20x" }} href = "/"> < img src = { NCR } className = "App-logo" alt = "logo"
                    width="70px" /> | wable<NavbarText style={{color:"#5DB2B2", fontSize:"20x"}} >-RX</NavbarText></NavbarBrand> 
            <NavbarBrand className="ml-auto" href="/tableview" style={{ paddingRight: "1vw" }}><img src={tableview} className="App-logo" alt="logo"
            width="30px" />  </NavbarBrand>
            <NavbarBrand className="auto" href="/DataAnalytics" style={{ paddingRight: "1vw" }}> <img src={analytics} className="App-logo" alt="logo"
            width="30px" /></NavbarBrand>
                <NavbarBrand className="auto" href="https://github.com/MihirBafna/wable" style={{ paddingRight: "2vw" }}><img src={githublogo} className="App-logo" alt="logo"
            width="30px" /></NavbarBrand>
        </Navbar> 
        </div>
    );
}

export default NavBar;