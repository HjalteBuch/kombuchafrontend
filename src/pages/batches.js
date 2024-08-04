import React, { useEffect, useState } from "react";
import { getBatches } from '../services/api';
import BatchTable from '../components/BatchTable';
import BatchCreation from '../components/BatchCreation';

const baseUrl = 'http://localhost:5259';

const Batches = () => {
    const [batches, setBatches] = useState([]);

    useEffect(() => {
        //getBatches().then((response) => setBatches(response.data));
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
