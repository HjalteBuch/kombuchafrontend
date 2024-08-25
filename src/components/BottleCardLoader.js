import React from 'react';
import { Col, Card } from 'react-bootstrap';

const BottleCardLoader = () => {
    return (
        <Col className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title><span className="placeholder col-4"></span></Card.Title>
                    <Card.Subtitle className="text-body-secondary"><span className="placeholder col-2"></span></Card.Subtitle>
                    <Card.Text><span className="placeholder col-6"></span></Card.Text>
                    <Card.Text><span className="placeholder col-5"></span></Card.Text>
                    <ul className="list-group">
                        <li className="list-group-item" key="1"><span className="placeholder col-2"></span></li>
                        <li className="list-group-item" key="2"><span className="placeholder col-3"></span></li>
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BottleCardLoader;
