import BottleHolderLoading from '../components/BottleHolderLoading';
import BottleHolder from '../components/BottleHolder';
import React, { useEffect, useState } from "react";

const baseUrl = 'http://localhost:5259';

const Bottles = () => {
    const [batches, setBatches] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const fetchBatches = async () => {
        const response = await fetch(`${baseUrl}/Batch`);
        if (response.ok) {
            const batches = await response.json();
            setBatches(batches);
            setIsLoading(false);
        } else {
            console.error("Failed to get batches");
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchBatches();
    }, []);


    return (
        <div class="container text-center">
            {isLoading ? (
                <BottleHolderLoading />
            ) : (
                <BottleHolder batches={batches}/>
                )
            }
        </div>
    );
};

export default Bottles;
