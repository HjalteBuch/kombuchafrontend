import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropdownComponent from './DropdownComponent';

const baseUrl = 'http://localhost:5259';

export const BatchCreation = () => {
    const [showBatchForm, setShowBatchForm] = useState(false);

    const [teas, setTeas] = useState([]);
    const getTeas = async () => {
        const response = await fetch(`${baseUrl}/Tea`);
        if (response.ok) {
            const teas = await response.json();
            setTeas(teas);
        }
    };

    const [sugars, setSugars] = useState([]);
    const getSugars = async () => {
        const response = await fetch(`${baseUrl}/Sugar`);
        if (response.ok) {
            const sugars = await response.json();
            setSugars(sugars);
        }
    };

    const handleCloseBatchForm = () => setShowBatchForm(false);
    const handleShowBatchForm = () => setShowBatchForm(true);

    const loadBatchForm = (e) => {
        e.preventDefault();
        handleShowBatchForm();
        getTeas();
        getSugars();
    };

    const postBatch = (e) => {
        e.preventDefault();
        const formData = new FormData(document.querySelector(".batchform"));

        var batch = {
            startTime: formData.get("startTime"),
            sugarId: formData.get("sugarId"),
            gramsOfSugar: formData.get("gramsOfSugar"),
            teaId: formData.get("teaId"),
            gramsOfTea: formData.get("gramsOfTea"),
            steepMinutes: formData.get("steepMinutes"),
            description: formData.get("description"),
        };

        const response = fetch(`${baseUrl}/Batch`, {
            method: "POST",
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': "application/json;charset=UTF-8"
            },
            body: JSON.stringify(batch)
        });
        console.log(response);
    }

    return (
        <div className="batchCreation">
            <Button onClick={loadBatchForm}>Create new Batch</Button>

            <Modal show={showBatchForm} onHide={handleCloseBatchForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Batch info:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={postBatch} className="batchform">
                        <div className="mb-3">
                            <label htmlFor="startTime" className="form-label">Date of creation:</label>
                            <input type="date" className="form-control" id="startTime" name="startTime"/>
                        </div>

                        <DropdownComponent elements={teas}/>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="tea" className="form-label">Tea:</label>
                                    <select className="form-select" id="tea" name="teaId">
                                        <option selected value="1">Ceylon, Colombo</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="gramsOfTea" className="form-label">Grams of tea:</label>
                                    <input type="number" className="form-control" id="gramsOfTea" name="gramsOfTea"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="steepMinutes" className="form-label">Steep minutes:</label>
                            <input type="number" className="form-control" id="steepMinutes" name="steepMinutes"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <textarea className="form-control" id="description" name="description"/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseBatchForm}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={postBatch}>
                        Add Batch
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BatchCreation;
