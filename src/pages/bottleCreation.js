import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import IngredientCheckBox from "../components/IngredientCheckBox";

const baseUrl = 'http://localhost:5259';

const BottleCreation = () => {
    const [ingredients, setIngredients] = useState([]);
    const [batches, setBatches] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState([]);

    const handleSelectChange = (e) => {
        setSelectedBatch(e.target.value);
    };

    useEffect(() => {
        const getIngredients = async () => {
            const response = await fetch(`${baseUrl}/Ingredients`);
            const ingredients = await response.json();
            setIngredients(ingredients);
        };

        const getBatches = async () => {
            const response = await fetch(`${baseUrl}/Batch`)
            const batches = await response.json();
            setBatches(batches);
        };

        getBatches();
        getIngredients();
    }, []);

    const postBottle = (e) => {
        e.preventDefault();
        const formData = new FormData(document.querySelector(".bottleCreation"));
        var bottle = {
            tapDate: formData.get("tapDate"),
            daysOfFermentation: formData.get("daysOfFermentation"),
            batchId: selectedBatch,
        };
        console.log(bottle);
    }

    return (
        <div class="container text-center">
            <form class="bottleCreation">
                {/* Batch */}
                <div class="mb-3">
                    <label for="batchId" class="form-label">Batch:</label>
                    <select id="batchId" class="form-select" value={selectedBatch} onChange={handleSelectChange}>
                        <option value="" disabled>Select a batch</option>
                        {batches.map((batch) => (
                            <option value={batch.id}>{batch.startTime}</option>
                        ))}
            </select>
                </div>

                {/* TapDate */}
                <div class="mb-3">
                    <label for="tapDate" class="form-label">Tap date:</label>
                    <input type="date" class="form-control" id="tapDate" name="tapDate"/>
                </div>

                {/* Days of fermenation */}
                <div class="mb-3">
                    <label for="daysOfFermentation" class="form-label">Days of fermentation:</label>
                    <input type="number" class="form-control" id="daysOfFermentation" name="daysOfFermentation" defaultValue={0}/>
                </div>

                {/* Ingredients */}
                <label class="form-label">Ingredients:</label>
                <div class="d-flex flex-wrap">
                    <IngredientCheckBox ingredients={ingredients} />
                </div>

                {/* Description */}
                <div class="mb-3 form-check">
                    <label for="description" class="form-label">Description:</label>
                    <input type="text" class="form-control" id="description" name="description"/>
                </div>
                <Button variant="primary" onClick={postBottle}>
                    Add bottle
                </Button>
            </form>
        </div>
    );
};

export default BottleCreation;
