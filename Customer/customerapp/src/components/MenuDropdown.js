import React, {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



class MenuDropdown extends React.Component{
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.getActive = this.getActive.bind(this)
        this.state = {dropdownOpen: false};
        this.state = {active: ''};
    }

    toggle(){
        this.setState({dropdownOpen: !this.state.dropdownOpen})
    }

    handleChange(code){
        this.setState({
            active: code
        })
    }

    getActive(){
        console.log("ruhn")
        return this.state.active
    }

       render(){
           const dropdownOpen = this.state.dropdownOpen
        if(this.props.itemDrop == "yes"){
            let options = []
            for(var i = 0; i < this.props.options.length; i++){
                let value = this.props.options[i]
                options.push(<DropdownItem onClick={() => this.handleChange(value)}>{value}</DropdownItem>)
            }
         return(   <Dropdown isOpen={this.state.dropdownOpen} size = "sm" toggle={this.toggle}>
                <DropdownToggle>
                    {this.state.active}
                </DropdownToggle>
                <DropdownMenu>
                    {options}
                </DropdownMenu>
            </Dropdown>
         );
        }
        else{
            return null
        }
           
    }
    }


export default MenuDropdown;