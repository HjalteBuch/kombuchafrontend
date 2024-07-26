import React, { useEffect, useState } from "react";
import { getBatches } from '../services/api';
import BatchTable from '../components/BatchTable';
import BatchCreation from '../components/BatchCreation';

const Batches = () => {
    const [batches, setBatches] = useState([]);

    useEffect(() => {
        getBatches().then((response) => setBatches(response.data));
    }, []);
    console.log(batches);

    return (
        <div className="batches">
            <BatchTable batches={batches} />
            <BatchCreation />
        </div>
    );
};

export default Batches;
