import { Button, Modal } from "react-bootstrap";
import { useState } from 'react';

const baseUrl = 'http://localhost:5259';

export const BottleCreation = ({batch, ingredients, getIngredients}) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const [showBottleForm, setShowBottleForm] = useState(false);
    const handleCloseBottleForm = () => setShowBottleForm(false);
    const handleShowBottleForm = () => setShowBottleForm(true);

    const loadBottleForm = (e) => {
        e.preventDefault();
        handleShowBottleForm();
    };

    const postBottle = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData(document.querySelector(".bottleCreation"));
            var bottle = {
                tapDate: formData.get("tapDate"),
                daysOfFermentation: formData.get("daysOfFermentation"),
                batchId: batch.id,
                ingredients: selectedIngredients,
                description: formData.get("description"),
            };
            const response = await fetch(`${baseUrl}/Bottle`, {
                method: "POST",
                headers: {
                    'Accept': "application/json, text/plain",
                    'Content-Type': "application/json;charset=UTF-8"
                },
                body: JSON.stringify(bottle)
            });

            if (response.ok) {
            } else {
                console.error("Failed to create a bottle for some reason. Check the response.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="batchCreation">
            <Button onClick={loadBottleForm}>Create new Bottle</Button>

            <Modal show={showBottleForm} onHide={handleCloseBottleForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Bottle info:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="bottleCreation">
                        {/* Batch */}
                        <div className="mb-3">
                            <h3>Batch {batch.id} from {batch.startTime}</h3>
                        </div>

                        {/* TapDate */}
                        <div className="mb-3">
                            <label for="tapDate" className="form-label">Tap date:</label>
                            <input type="date" className="form-control" id="tapDate" name="tapDate"/>
                        </div>

                        {/* Days of fermenation */}
                        <div className="mb-3">
                            <label for="daysOfFermentation" className="form-label">Days of fermentation:</label>
                            <input type="number" className="form-control" id="daysOfFermentation" name="daysOfFermentation" defaultValue={0}/>
                        </div>

                        {/* Ingredients */}
                        <label className="form-label">Ingredients:</label>
                        <div className="d-flex flex-wrap">
                            {ingredients.map((ing) => (
                                <p>{ing.name}</p>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="mb-3 form-check">
                            <label for="description" className="form-label">Description:</label>
                            <input type="text" className="form-control" id="description" name="description"/>
                        </div>
                        <Button variant="primary" onClick={postBottle}>
                            Add bottle
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseBottleForm}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={postBottle}>
                        Add Bottle
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BottleCreation;
