import React from 'react'

class MenuDropdown extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.options)
        if(this.props.itemDrop == "yes"){
            let options = []
            for(var i = 0; i < this.props.options.length; i++){
                options.push(<li>{this.props.options[i]}</li>)
            }
            return <ul>{options}</ul>
        }
        else{
            return null
        }
    }
}

export default MenuDropdown;