import BottleHolder from '../components/BottleHolder';
import React, { useEffect, useState } from "react";
import BottleHolderLoading from '../components/BottleHolderLoading';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const Bottles = () => {
    const [batches, setBatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBatches = async () => {
        const response = await fetch(`${baseUrl}/Batch`);
        if (response.ok) {
            const batches = await response.json();
            setBatches(batches);
            setIsLoading(false);
        } else {
            console.error("Failed to get batches");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBatches();
    }, []);


    return (
        <div className="container text-center">
            { isLoading ? (
                <BottleHolderLoading />
            ) : (
                batches.map((batch) => (
                    <BottleHolder key={batch.id} batch={batch}/>
                ))
            )}
        </div>
    );
};

export default Bottles;
