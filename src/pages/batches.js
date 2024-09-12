import React, { useEffect, useState } from "react";
import BatchTable from '../components/BatchTable';
import BatchCreation from '../components/BatchCreation';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const Batches = () => {
    const [batches, setBatches] = useState([]);

    useEffect(() => {
        const fetchBatches = async () => {
            const response = await fetch(`${baseUrl}/Batch`);
            const batches = await response.json();
            setBatches(batches);
        };
        fetchBatches();
    }, []);

    return (
        <div className="batches">
            <BatchCreation />
            <BatchTable batches={batches} />
        </div>
    );
};

export default Batches;
