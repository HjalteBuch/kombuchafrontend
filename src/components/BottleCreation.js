import { Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import DropdownComponent from "./DropdownComponent";

const baseUrl = 'http://localhost:5259';

export const BottleCreation = ({batch, ingredients, getIngredients}) => {
    const [selectedIngredient, setSelectedIngredient] = useState();
    const [ingredientAmount, setIngredientAmount] = useState();
    const [ingredientsInBottle, setIngredientsInBottle] = useState([]);

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
                ingredients: ingredientsInBottle,
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
                            <label htmlFor="tapDate" className="form-label">Tap date:</label>
                            <input type="date" className="form-control" id="tapDate" name="tapDate"/>
                        </div>

                        {/* Days of fermenation */}
                        <div className="mb-3">
                            <label htmlFor="daysOfFermentation" className="form-label">Days of fermentation:</label>
                            <input type="number" className="form-control" id="daysOfFermentation" name="daysOfFermentation" defaultValue={0}/>
                        </div>

                        {/* Ingredients */}
                        <DropdownComponent type={"Ingredients"} setSelectedElement={setSelectedIngredient} setAmountOfSelectedElement={setIngredientAmount} />
                        <Button className="ms-1 my-4" variant="info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                        </Button>

                        {/* Description */}
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <input type="text" className="form-control" id="description" name="description"/>
                        </div>
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
