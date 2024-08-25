import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const baseUrl = 'http://localhost:5259';

const BottleCreation = () => {
    const navigate = useNavigate();
    const [ingredients, setIngredients] = useState([]);
    const [batches, setBatches] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleSelectChange = (e) => {
        setSelectedBatch(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        const { name, checked, value } = e.target;
        setSelectedIngredients((prev) => {
            const existingIngredient = prev.find((ingredient) => ingredient.name === name);

            if (existingIngredient) {
                return prev.map((ingredient) => ingredient.name === name ? { ...ingredient, checked } : ingredient );
            } else {
                return [...prev, { name, checked, value }];
            }
        });
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

    const postBottle = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData(document.querySelector(".bottleCreation"));
            var bottle = {
                tapDate: formData.get("tapDate"),
                daysOfFermentation: formData.get("daysOfFermentation"),
                batchId: selectedBatch,
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
                navigate('/bottles');
            } else {
                console.error("Failed to create a bottle for some reason. Check the response.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container text-center">
            <form className="bottleCreation">
                {/* Batch */}
                <div className="mb-3">
                    <label for="batchId" className="form-label">Batch:</label>
                    <select id="batchId" className="form-select" value={selectedBatch} onChange={handleSelectChange}>
                        <option value="" disabled>Select a batch</option>
                        {batches.map((batch) => (
                            <option value={batch.id}>{batch.startTime}</option>
                        ))}
            </select>
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
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-control" id={ing.name} name={ing.name} value={ing.id} onChange={handleCheckboxChange}/>
                            <label for={ing.name} className="form-check-label mx-1">{ing.name}</label>
                        </div>
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
        </div>
    );
};

export default BottleCreation;
