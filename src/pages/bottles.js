import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BottleCreation from "./bottleCreation";

const baseUrl = 'http://localhost:5259';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        const fetchBottles = async () => {
            const response = await fetch(`${baseUrl}/Bottle`);
            const bottles = await response.json();
            setBottles(bottles);
        };
        fetchBottles();
    }, []);

    return (
        <div class="container text-center">
            <div class="row border-top mt-5">
                <h1>24/07/2024</h1>
                <p>Batch ID: 5</p>
                <Link to="/BottleCreation" render={BottleCreation}>
                <Button class="btn btn-primary">Add bottle</Button>
                </Link>
                <div class="col">
                    <div class="card" style={{width: "18rem"}} >
                        <div class="card-body" style={{width: "18rem"}} >
                            <h5 class="card-title">bottle 1</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">dato</h6>
                            <p class="card-text">Blev tapped d: 04/08/2024</p>
                            <p class="card-text">Har fermenteret i 5 dage</p>
                            <p class="card-text">Ingredientser:</p>
                            <ul class="list-group">
                                <li class="list-group-item">Kirsebær</li>
                                <li class="list-group-item">Ingefær</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bottles">
                </div>
            </div>
        </div>
    );
};

export default Bottles;
