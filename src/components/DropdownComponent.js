const DropdownComponent = ({elements}) => {
    console.log(elements);
    return (
        <div className="mb-3">
            <div className="row">
                <div className="col">
                    <label htmlFor="sugar" className="form-label">Sugar:</label>
                    <select className="form-select" id="sugar">
                        <option defaultValue={0}>Choose a </option>
                        { elements.map((element) => (
                            <option value={element.id}>{element.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="gramsOfSugar" className="form-label">Grams of sugar:</label>
                    <input type="number" className="form-control" id="gramsOfSugar" name="gramsOfSugar"/>
                </div>
            </div>
        </div>
    );
}

export default DropdownComponent;
