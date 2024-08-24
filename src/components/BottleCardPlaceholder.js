import React from 'react';
import { Col, Card } from 'react-bootstrap';

const BottleCardPlaceHolder = () => {
    return (
        <Col class="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title><span class="placeholder col-4"></span></Card.Title>
                    <Card.Subtitle class="text-body-secondary"><span class="placeholder col-2"></span></Card.Subtitle>
                    <Card.Text><span class="placeholder col-6"></span></Card.Text>
                    <Card.Text><span class="placeholder col-5"></span></Card.Text>
                    <Card.Text>
                        <ul class="list-group">
                            <li class="list-group-item"><span class="placeholder col-2"></span></li>
                            <li class="list-group-item"><span class="placeholder col-3"></span></li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BottleCardPlaceHolder;
