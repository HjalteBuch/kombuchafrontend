const BottleCreation = () => {
    return (
        <div class="container text-center">
            <form>
                {/* TapDate */}
                <div class="mb-3">
                    <label for="tapDate" class="form-label">Tap date:</label>
                    <input type="date" class="form-control" id="tapDate" name="tapDate"/>
                </div>

                {/* Days of fermenation */}
                <div class="mb-3">
                    <label for="fermentation" class="form-label">Days of fermentation:</label>
                    <input type="number" class="form-control" id="fermentation" name="fermentation"/>
                </div>

                {/* Ingredients */}
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="flexCheckDefault" name="ingredients"/>
                    <label for="ingredients" class="form-label">Ingredients:</label>
                </div>

                {/* Description */}
                <div class="mb-3 form-check">
                    <label for="description" class="form-label">Description:</label>
                    <input type="text" class="form-control" id="description" name="description"/>
                </div>
            </form>
        </div>
    );
};

export default BottleCreation;
