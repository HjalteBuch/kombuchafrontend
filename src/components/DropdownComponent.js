import { useState } from "react";
import { Button } from "react-bootstrap";

const baseUrl = 'http://localhost:5259';

const DropdownComponent = ({type, elements, getElements, setSelectedElement, setAmountOfSelectedElement}) => {
    const [addNew, setAddNew] = useState(false);

    const [newName, setNewName] = useState('');
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'addNew') {
            setAddNew(true);
        } else {
            setAddNew(false);
        }
        if (isNaN(selectedValue)) {
            setSelectedElement(null);
        } else {
            setSelectedElement(selectedValue);
        }
    };

    const handleSelectAmountChange = (e) => {
        var selectedValue = e.target.value;
        // if amount is not set, handle it
        if (selectedValue === "" || selectedValue === undefined) {
            selectedValue = "0";
        }
        setAmountOfSelectedElement(selectedValue);
    };

    const postElement = async (e) => {
        e.preventDefault();

        var element = {
            name: newName
        };

        const response = await fetch(`${baseUrl}/${type}`, {
            method: "POST",
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': "application/json;charset=UTF-8"
            },
            body: JSON.stringify(element)
        });
        if (response.ok) {
            var newElement = await response.json();
            await getElements();
            document.getElementById(type).value=newElement.id.toString();
        }
    }

    return (
        <div className="mb-3">
            <div className="row">
                <div className="col">
                    <label htmlFor={type} className="form-label">{type}:</label>
                    <select className="form-select" id={type} onChange={handleSelectChange}>
                        <option defaultValue>Choose a {type} type...</option>
                        { elements.map((element) => (
                            <option value={element.id} key={element.name + element.id}>{element.name}</option>
                        ))}
                        <option value="addNew">Add a new {type}</option>
                    </select>
                </div>
                { !addNew ? (
                    <div className="col">
                        <label htmlFor={`gramsOf${type}`} className="form-label">Grams of {type}:</label>
                        <input type="number" className="form-control" id={`gramsOf${type}`} onChange={handleSelectAmountChange}/>
                    </div>
                ) : (
                        <div className="col">
                            <label htmlFor={`${type}Name`} className="form-label">Name of {type}:</label>
                            <div className="d-flex">
                                <input type="form-control" className="form-control" id={`${type}Name`} onChange={handleNewName}/>
                                <Button variant="primary" onClick={postElement}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default DropdownComponent;
