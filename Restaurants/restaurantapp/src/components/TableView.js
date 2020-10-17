import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import TableRow from './TableRow'

class TableView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let tablegrid = [];
        for(var i=0;i<this.props.rows;i++){
            tablegrid.push(<Row><TableRow cols={ this.props.cols}/></Row>)
        }
        return (
            tablegrid
        );
    }
}

export default TableView