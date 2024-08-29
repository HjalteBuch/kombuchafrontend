const DropdownComponent = () => {
    return (
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
    );
}

export default DropdownComponent;
