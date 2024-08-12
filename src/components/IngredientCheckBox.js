import React from 'react';

const IngredientCheckBox = ({ ingredients }) => {
    return (
        ingredients.map((ing) => (
            <div class="mb-3 form-check">

                <input type="checkbox" class="form-check-control" id={ing.name} name={ing.name} value={ing.id} />
                <label for={ing.name} class="form-check-label mx-1">{ing.name}</label>
            </div>
        ))
    );
};

export default IngredientCheckBox;
