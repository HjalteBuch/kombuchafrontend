import React from 'react';
import { Col, Card } from 'react-bootstrap';

const BottleCardPlaceHolder = () => {
    return (
        <Col className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title><span className="placeholder col-4"></span></Card.Title>
                    <Card.Subtitle className="text-body-secondary"><span className="placeholder col-2"></span></Card.Subtitle>
                    <Card.Text><span className="placeholder col-6"></span></Card.Text>
                    <Card.Text><span className="placeholder col-5"></span></Card.Text>
                    <Card.Text>
                        <ul className="list-group">
                            <li className="list-group-item"><span className="placeholder col-2"></span></li>
                            <li className="list-group-item"><span className="placeholder col-3"></span></li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BottleCardPlaceHolder;
