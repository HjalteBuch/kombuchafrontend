import { useEffect, useState } from "react";
import IngredientCheckBox from "../components/IngredientCheckBox";

const baseUrl = 'http://localhost:5259';

const BottleCreation = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const getIngredients = async () => {
            const response = await fetch(`${baseUrl}/Ingredients`);
            const ingredients = await response.json();
            setIngredients(ingredients);
        };
        getIngredients();
    }, []);


    return (
        <div class="container text-center">
            <form class="bottleCreation">
                {/* TapDate */}
                <div class="mb-3">
                    <label for="tapDate" class="form-label">Tap date:</label>
                    <input type="date" class="form-control" id="tapDate" name="tapDate"/>
                </div>

                {/* Days of fermenation */}
                <div class="mb-3">
                    <label for="fermentation" class="form-label">Days of fermentation:</label>
                    <input type="number" class="form-control" id="fermentation" name="fermentation"/>
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
            </form>
        </div>
    );
};

export default BottleCreation;
