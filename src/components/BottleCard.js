import React, { useEffect, useRef, useState } from 'react';
import { Col, Card, Button, Modal } from 'react-bootstrap';

const baseUrl = 'http://localhost:5259';

const BottleCard = ({bottle}) => {
    const [isFermentationDaysSet, setIsFermentationDaysSet] = useState(false);
    const [description, setDescription] = useState("NaN");
    const [showDatePicker, setShowDatePicker] = useState(false);


    const handleShow = () => setShowDatePicker(true);
    const handleClose = () => setShowDatePicker(false);

    const deleteBottle = async (bottleId) => {
        const response = await fetch(`${baseUrl}/Bottle/${bottleId}`, {
            method: "DELETE"
        });
        if (response.ok) {
            window.location.reload();
        }
    };

    const addFermentationDays = async (event, bottleId) => {
        event.preventDefault();
        setShowDatePicker(false);
        const formData = new FormData(document.querySelector(".fermentationDays"));
        const endOfFermentation = formData.get("endOfFermentationDate");
        const response = await fetch(`${baseUrl}/Bottle/UpdateFermentationDays/${bottleId}`, {
            method: "PUT",
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': "application/json;charset=UTF-8"
            },
            body: JSON.stringify({ endOfFermentation: endOfFermentation })
        });
        if (response.ok) {
            window.location.reload();
        }
    }

    useEffect(() => {
        if (bottle.daysOfFermentation != null) {
            setIsFermentationDaysSet(true);
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
                    <Card.Text className="mt-3">Days of fermentation:&nbsp;
                        { isFermentationDaysSet ? (
                            bottle.daysOfFermentation 
                        ) : (
                                <Button className="btn btn-secondary btn-sm" onClick={handleShow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </Button>
                            )
                        }
                    </Card.Text>
                    <Card.Text>Description: {description}</Card.Text>
                    <ul className="list-group">
                        { bottle.ingredients.map((ingredient) => {
                            return (
                                <li className="list-group-item" key={ingredient.id}>{ingredient.name}</li>
                            );
                        })}
                    </ul>
                    <Button className="btn btn-danger mt-2" onClick={() => deleteBottle(bottle.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </Button>
                </Card.Body>
            </Card>
            


            <Modal show={showDatePicker} onHide={handleClose}>
                <form className="fermentationDays" onSubmit={(event) => addFermentationDays(event, bottle.id)}>
                    <label htmlFor="endOfFermentationDate" className="form-label mx-2">When was the bottle moved to the refrigirator:</label>
                    <input type="date" className="form-control" id="endOfFermentationDate" name="endOfFermentationDate"/>
                    <Button className="m-2" variant="primary" type="submit">
                        Update
                    </Button>
                </form>
            </Modal>
        </Col>
    );
};

export default BottleCard;
