import React, { useEffect, useState } from "react";
import BottleCardLoader from "./BottleCardLoader";
import BottleCard from "./BottleCard";
import { Container, Row } from 'react-bootstrap';
import BottleHolderLoading from "./BottleHolderLoading";
import BottleCreation from "./BottleCreation";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const BottleHolder = ({batch}) => {
    const cardPlaceHolders = Array.from({ length: 5 });
    const [bottles, setBottles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isBottles, setIsBottles] = useState(false);

    const fetchBottlesFromBatchId = async (batchId) => {
        const response = await fetch(`${baseUrl}/Bottle/ByBatchId/${batchId}`);
        if (response.ok) {
            const bottles = await response.json();
            setBottles(bottles);
            setIsLoading(false);
            setIsBottles(true);

        } else {
            setIsLoading(false);
            setIsBottles(false);
            console.error("Failed to get bottles");
        }
    };

    useEffect(() => {
        fetchBottlesFromBatchId(batch.id);
    }, [batch.id]);

    return (
        <Container className="mt-5">
            { isLoading ? (
                <BottleHolderLoading />
            ) : (
                    <Container className="border-top mt-5">
                        <h1>{batch.startTime}</h1>
                        <p>Batch ID: {batch.id}</p>
                        <BottleCreation batch={batch} fetchBottles={fetchBottlesFromBatchId}/>
                        <Container className="mt-4">
                            <Row className="justify-content-center">
                                { isBottles ? (
                                    bottles.map((bottle) => {
                                        return (
                                            <BottleCard bottle={bottle} key={bottle.id}/>
                                        );
                                    })
                                ) : (
                                        cardPlaceHolders.map((_, index) => (
                                            <BottleCardLoader key={index}/>
                                        ))
                                    )
                                }
                            </Row>
                        </Container>
                    </Container>
                )}
        </Container>
    );
};

export default BottleHolder;
