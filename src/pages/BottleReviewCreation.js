import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from '../components/StarRating';
import BottleCard from '../components/BottleCard';
import BottleCardLoader from "../components/BottleCardLoader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const BottleReviewCreation = () => {
    const navigate = useNavigate();
    const { bottleName } = useParams();
    const [bottle, setBottle] = useState();
    const [isBottle, setIsBottle] = useState(false);
    const [fizzLevel, setFizzLevel] = useState(1);
    const [funkLevel, setFunkLevel] = useState(1);
    const [tasteLevel, setTasteLevel] = useState(1);
    const [overAllRating, setOverAllRating] = useState(1);
    const [comment, setComment] = useState("");

    const handleTextChange = (e) => {
        setComment(e.target.value);
    };

    const postReview = async (e) => {
        e.preventDefault();
        var review = {
            BottleId: bottle.id,
            FizzLevel: fizzLevel,
            FunkLevel: funkLevel,
            TasteLevel: tasteLevel,
            OverAllRating: overAllRating,
            Description: comment,
        }
        const response = await fetch(`${baseUrl}/BottleReview`, {
            method: "POST",
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': "application/json;charset=UTF-8"
            },
            body: JSON.stringify(review)
        });
        
        if (response.ok) {
            navigate('/reviews');
        } else {
            console.log("Failed submitting review");
        }
    }

    const getBottle = async () => {
        const response = await fetch(`${baseUrl}/Bottle/NewestWithBottleName/${bottleName}`);
        if (response.ok) {
            setBottle(await response.json());
            setIsBottle(true);
        }
    }

    useEffect(() => {
        getBottle();
    }, []);
    return (
        <div className="container-xl align-middle text-center mt-5">
            <div className="w-50 mx-auto">
                { isBottle ? (
                    <BottleCard bottle={bottle} />
                ) : (
                        <BottleCardLoader />
                    )}
            </div>
            <form>
                <h1 className="fw-bolder">BottleName</h1>
                <StarRating metric="Fizz level" rating={fizzLevel} setRating={setFizzLevel} />
                <StarRating metric="Funk level" rating={funkLevel} setRating={setFunkLevel} />
                <StarRating metric="Taste level" rating={tasteLevel} setRating={setTasteLevel} />
                <StarRating metric="Overall rating" rating={overAllRating} setRating={setOverAllRating} />
                <div className="mb-3">
                    <h3>Comments:</h3>
                    <textarea className="form-control w-50 mx-auto" id="description" rows="3" value={comment} onChange={handleTextChange}></textarea>
                </div>
                <Button variant="primary" onClick={postReview}>Submit review</Button>
            </form>
        </div>
    );
};

export default BottleReviewCreation;
