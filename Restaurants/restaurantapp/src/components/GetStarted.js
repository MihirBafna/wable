import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap';

class GetStarted extends React.Component {
    render() {
        return (
            <Container style={{ padding: "5vh" }}>
                <div>
                    <Jumbotron >
                        <h1 className="display-3" style={{ fontWeight: 200, paddingBottom: "2vh" }}>Welcome to wable<span className="display-3" style={{ fontWeight: 200, paddingBottom: "2vh", color: "#5DB2B2" }}>-RX</span></h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <center>
                                <Button href="/" style={{ borderColor: "#5DB2B2", backgroundColor: "#5DB2B2", backgroundColor: "#5DB2B2" }}>Get Started</Button>
                            </center>
                        </p>
                    </Jumbotron>
                </div>
            </Container>
        );
    }
}

export default GetStarted;