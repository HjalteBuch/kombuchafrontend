import React, { useEffect, useState } from "react";
import { getBatches } from '../services/api';
import BatchTable from '../components/BatchTable';

const Batches = () => {
    const [batches, setBatches] = useState([]);

    useEffect(() => {
        getBatches().then((response) => setBatches(response.data));
    }, []);
    console.log(batches);

    return (
        <div className="batches">
            <p>This is the batches page</p>
            <BatchTable batches={batches}/>
        </div>
    );
};

export default Batches;
