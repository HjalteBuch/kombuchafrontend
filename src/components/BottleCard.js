import React, { useEffect, useState } from 'react';
import { Col, Card } from 'react-bootstrap';

const BottleCard = ({bottle}) => {
    const [days, setDays] = useState("NaN");
    const [description, setDescription] = useState("NaN");

    useEffect(() => {
        if (bottle.daysOfFermentation != null) {
            setDays(bottle.daysOfFermentation);
        }
        if (bottle.description != null) {
            setDescription(bottle.description);
        }

    }, [bottle]);

    return (
        <Col className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title>Bottle ID: {bottle.id}</Card.Title>
                    <Card.Subtitle className="text-body-secondary">{bottle.tapDate}</Card.Subtitle>
                    <Card.Text className="mt-3">Days of fermentation: {days}</Card.Text>
                    <Card.Text>Description: {description}</Card.Text>
                    <ul className="list-group">
                        { bottle.ingredients.map((ingredient) => {
                            return (
                                <li className="list-group-item" key={ingredient.id}>{ingredient.name}</li>
                            );
                        })}
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BottleCard;
