import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropdownComponent from './DropdownComponent';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const BatchCreation = () => {
    const [tea, setTea] = useState();
    const [teaGrams, setTeaGrams] = useState();
    const [sugar, setSugar] = useState();
    const [sugarGrams, setSugarGrams] = useState();
    const [showBatchForm, setShowBatchForm] = useState(false);

    const [teas, setTeas] = useState([]);
    const getTeas = async () => {
        const response = await fetch(`${baseUrl}/Tea`);
        if (response.ok) {
            setTeas(await response.json());
        }
    }

    const [sugars, setSugars] = useState([]);
    const getSugars = async () => {
        const response = await fetch(`${baseUrl}/Sugar`);
        if (response.ok) {
            setSugars(await response.json());
        }
    }

    const handleCloseBatchForm = () => setShowBatchForm(false);
    const handleShowBatchForm = () => setShowBatchForm(true);

    const loadBatchForm = (e) => {
        e.preventDefault();
        handleShowBatchForm();
    };

    const postBatch = async (e) => {
        e.preventDefault();
        const formData = new FormData(document.querySelector(".batchform"));

        var batch = {
            startTime: formData.get("startTime"),
            sugarId: sugar,
            gramsOfSugar: sugarGrams,
            teaId: tea,
            gramsOfTea: teaGrams,
            steepMinutes: formData.get("steepMinutes"),
            description: formData.get("description"),
        };

        const response = await fetch(`${baseUrl}/Batch`, {
            method: "POST",
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': "application/json;charset=UTF-8"
            },
            body: JSON.stringify(batch)
        });
        if (response.ok) {
            window.location.reload();
        }
    }

    useEffect(() => {
        getTeas();
        getSugars();
    }, []);

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

                        <DropdownComponent type={"Tea"} elements={teas} getElements={getTeas} selectedElement={tea} setSelectedElement={setTea} setAmountOfSelectedElement={setTeaGrams}/>
                        <DropdownComponent type={"Sugar"} elements={sugars} getElements={getSugars} selectedElement={sugar} setSelectedElement={setSugar} setAmountOfSelectedElement={setSugarGrams}/>

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
