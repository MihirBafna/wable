import React from 'react'
import { Button} from 'reactstrap';
import Add from '../img/addbutton.svg';

class AddCart extends React.Component{
    render(){
        return(
            <Button color="link"><img style={{width:"4vh"}} src={Add}></img></Button>
        );
    }
}

export default AddCart;