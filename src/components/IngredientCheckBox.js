import React from 'react';

const IngredientCheckBox = ({ ingredients }) => {
    return (
        ingredients.map((ing) => (
            <div className="mb-3 form-check">

                <input type="checkbox" className="form-check-control" id={ing.name} name={ing.name} value={ing.id} />
                <label for={ing.name} className="form-check-label mx-1">{ing.name}</label>
            </div>
        ))
    );
};

export default IngredientCheckBox;
