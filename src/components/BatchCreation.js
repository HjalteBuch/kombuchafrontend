import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const BatchCreation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="batchCreation">
            <Button onClick={handleShow}>Create new Batch</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Batch info:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="mb-3">
                            <label for="startTime" class="form-label">Date of creation:</label>
                            <input type="date" class="form-control" id="startTime"/>
                        </div>

                        <label for="sugar" class="form-label">Sugar:</label>
                        <div class="mb-3" id="sugar">
                            <div class="row">
                                <div class="col">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="caneSugar" name="sugarRadio"/>
                                        <label for="caneSugar" class="form-check-label">Cane sugar</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="whiteSugar" name="sugarRadio"/>
                                        <label for="whiteSugar" class="form-check-label">White sugar</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="gramsOfSugar" class="form-label">Grams of sugar</label>
                                    <input type="number" class="form-control" id="gramsOfSugar"/>
                                </div>
                            </div>
                        </div>
                        <label for="tea" class="form-label">Tea:</label>
                        <div class="mb-3 container" id="tea">
                            <div class="row">
                                <div class="col">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="ceylon" name="teaRadio"/>
                                        <label for="ceylon" class="form-check-label">Ceylon, Colombo</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="gramsOfTea" class="form-label">Grams of tea</label>
                                    <input type="number" class="form-control" id="gramsOfTea"/>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="steepMinutes" class="form-label">Steep minutes:</label>
                            <input type="number" class="form-control" id="steepMinutes"/>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description:</label>
                            <textArea class="form-control" id="description"/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add Batch
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BatchCreation;
