import React, { useEffect, useState } from "react";
import StarRating from '../components/StarRating';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const BottleReviewCreation = () => {
    const [fizzLevel, setFizzLevel] = useState(1);
    return (
        <div className="container-xl align-middle text-center mt-5">
            <form>
                <h1 className="fw-bolder">BottleName</h1>
                <StarRating metric="Fizz level" rating={fizzLevel} setRating={setFizzLevel} />
            </form>
        </div>
    );
};

export default BottleReviewCreation;
