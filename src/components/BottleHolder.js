import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottleCreation from "../pages/bottleCreation";
import BottleCardPlaceholder from "./BottleCardPlaceholder";
import { Container, Row, Button } from 'react-bootstrap';

const baseUrl = 'http://localhost:5259';

const BottleHolder = (batches) => {
    const [bottles, setBottles] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

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
        fetchBottles();
    }, []);

    return (
        <Container className="border-top mt-5">
            {isLoading ? (
                <p>loading</p>
            ) : (
                <p>finished</p>
                )
            }
            <h1>24/07/2024</h1>
                <p>Batch ID: 5</p>
                <Link to="/BottleCreation" render={BottleCreation}>
                    <Button className="btn btn-primary">Add bottle</Button>
                </Link>
                <Container className="mt-4">
                    <Row className="juhstify-content-center">
                        <BottleCardPlaceholder />
                    </Row>
                </Container>
                <div className="bottles">
                </div>
        </Container>
    );
};

export default BottleHolder;
