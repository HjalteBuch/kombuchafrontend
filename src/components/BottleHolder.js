import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottleCreation from "../pages/bottleCreation";
import BottleCardPlaceholder from "./BottleCardPlaceholder";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const baseUrl = 'http://localhost:5259';

const BottleHolder = () => {
    const [bottles, setBottles] = useState([]);
    const [batches, setBatches] = useState([]);

    const fetchBatches = async () => {
        const response = await fetch(`${baseUrl}/Batch`);
        if (response.ok) {
            const batches = await response.json();
            setBatches(batches);
        } else {
            console.error("Failed to get batches");
        }

    };

    const fetchBottles = async () => {
        const response = await fetch(`${baseUrl}/Bottle`);
        if (response.ok) {
            const bottles = await response.json();
            setBottles(bottles);
        } else {
            console.error("Failed to get bottles");
        }

    };

    useEffect(() => {
        fetchBatches();
    }, []);

    return (
        <div class="row border-top mt-5">
            <h1>24/07/2024</h1>
            <p>Batch ID: 5</p>
            <Link to="/BottleCreation" render={BottleCreation}>
                <Button class="btn btn-primary">Add bottle</Button>
            </Link>
            <Container>
                <Row class="juhstify-content-center">
                    <Col class="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Bottle 1</Card.Title>
                                <Card.Subtitle class="text-body-secondary">Dato</Card.Subtitle>
                                <Card.Text>Blev tapped d: 04/08/2024</Card.Text>
                                <Card.Text>Har fermenteret i 5 dage</Card.Text>
                                <Card.Text>
                                    <ul class="list-group">
                                        <li class="list-group-item">Kirsebær</li>
                                        <li class="list-group-item">Ingefær</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <BottleCardPlaceholder />
                </Row>
            </Container>
            <div class="bottles">
            </div>
        </div>
    );
};

export default BottleHolder;
