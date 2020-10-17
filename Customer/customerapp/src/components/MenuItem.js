import React from 'react'
import MenuDropdown from './MenuDropdown'

class MenuItem extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.props.price}</h3>
                <h4>{this.props.desc}</h4>
                <MenuDropdown itemDrop={this.props.dropdown} options={this.props.options} />
            </div>
        )

    }
}

export default MenuItem;