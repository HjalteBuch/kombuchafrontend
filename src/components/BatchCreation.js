import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const BatchCreation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const baseUrl = 'http://localhost:5259';
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
            <Button onClick={handleShow}>Create new Batch</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Batch info:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={postBatch} className="batchform">
                        <div className="mb-3">
                            <label for="startTime" className="form-label">Date of creation:</label>
                            <input type="date" className="form-control" id="startTime" name="startTime"/>
                        </div>

                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <label for="sugar" className="form-label">Sugar:</label>
                                    <select className="form-select" id="sugar" name="sugarId">
                                        <option selected value="1">Cane sugar</option>
                                        <option value="2">White sugar</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label for="gramsOfSugar" className="form-label">Grams of sugar:</label>
                                    <input type="number" className="form-control" id="gramsOfSugar" name="gramsOfSugar"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <label for="tea" className="form-label">Tea:</label>
                                    <select className="form-select" id="tea" name="teaId">
                                        <option selected value="1">Ceylon, Colombo</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label for="gramsOfTea" className="form-label">Grams of tea:</label>
                                    <input type="number" className="form-control" id="gramsOfTea" name="gramsOfTea"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="steepMinutes" className="form-label">Steep minutes:</label>
                            <input type="number" className="form-control" id="steepMinutes" name="steepMinutes"/>
                        </div>
                        <div className="mb-3">
                            <label for="description" className="form-label">Description:</label>
                            <textArea className="form-control" id="description" name="description"/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
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
