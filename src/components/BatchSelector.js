import React from 'react';

const BatchSelector = ({ batches }) => {
    return (
            <select class="form-select">
                {batches.map((batch) => (
                    <option value={batch.id}>{batch.startTime}</option>
                ))}
            </select>
    );
};

export default BatchSelector;
