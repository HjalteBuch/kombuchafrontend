import React from "react";
import BottleCardPlaceholder from "./BottleCardPlaceholder";
import { Container, Row, Button } from 'react-bootstrap';


const BottleHolderLoading = () => {
    const cardPlaceHolders = Array.from({ length: 5 });

    return (
        <Container className="border-top mt-5">
            <h1><span className="placeholder col-2"></span></h1>
                <p><span className="placeholder col-1"></span></p>
                <Button className="btn btn-primary" disabled>Add bottle</Button>
                <Container className="mt-4">
                    <Row className="juhstify-content-center">
                    {cardPlaceHolders.map((_, index) => (
                        <BottleCardPlaceholder />
                    ))}
                    </Row>
                </Container>
        </Container>
    );
};

export default BottleHolderLoading;

