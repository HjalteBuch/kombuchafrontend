import React, { useEffect, useState } from "react";
import StarRating from '../components/StarRating';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const BottleReviewCreation = () => {
    const [fizzLevel, setFizzLevel] = useState(1);
    const [funkLevel, setFunkLevel] = useState(1);
    const [tasteLevel, setTasteLevel] = useState(1);
    const [overAllRating, setOverAllRating] = useState(1);

    return (
        <div className="container-xl align-middle text-center mt-5">
            <form>
                <h1 className="fw-bolder">BottleName</h1>
                <StarRating metric="Fizz level" rating={fizzLevel} setRating={setFizzLevel} />
                <StarRating metric="Funk level" rating={funkLevel} setRating={setFunkLevel} />
                <StarRating metric="Taste level" rating={tasteLevel} setRating={setTasteLevel} />
                <StarRating metric="Overall Rating" rating={overAllRating} setRating={setOverAllRating} />
            </form>
        </div>
    );
};

export default BottleReviewCreation;
