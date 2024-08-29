import { useState } from "react";
import { Button } from "react-bootstrap";

const baseUrl = 'http://localhost:5259';

const DropdownComponent = ({elements, type}) => {
    const [addNew, setAddNew] = useState(false);
    const [selectedValue, setSelectedValue] = useState(false);

    const [newName, setNewName] = useState('');
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'addNew') {
            setAddNew(true);
        } else {
            setSelectedValue(selectedValue);
            setAddNew(false);
        }
    };

    const postElement = (e) => {
        e.preventDefault();

        var element = {
            name: newName
        };

        const response = fetch(`${baseUrl}/${type}`, {
            method: "POST",
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': "application/json;charset=UTF-8"
            },
            body: JSON.stringify(element)
        });
        console.log(response);
        if (response.ok) {
            // Get new list of elements
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
                            <option value={element.id} key={element.name}>{element.name}</option>
                        ))}
                        <option value="addNew">Add a new {type}</option>
                    </select>
                </div>
                { !addNew ? (
                    <div className="col">
                        <label htmlFor={`gramsOf${type}`} className="form-label">Grams of {type}:</label>
                        <input type="number" className="form-control" id={`gramsOf${type}`}/>
                    </div>
                ) : (
                        <div className="col">
                            <label htmlFor={`${type}Name`} className="form-label">Name of {type}:</label>
                            <div className="d-flex">
                                <input type="form-control" className="form-control" id={`${type}Name`} onChange={handleNewName}/>
                                <Button variant="primary" onClick={postElement}/>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default DropdownComponent;
