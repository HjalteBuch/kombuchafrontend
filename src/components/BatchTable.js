import React from 'react';
import { Table } from 'react-bootstrap';

const BatchTable = ({ batches }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Start time</th>
                    <th>Sugar</th>
                    <th>Tea</th>
                </tr>
            </thead>
            <tbody>
                {batches.map((batch) => (
                    <tr key={batch.id}>
                        <td>{batch.id}</td>
                        <td>{batch.startTime}</td>
                        <td>{batch.sugar}</td>
                        <td>{batch.tea}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default BatchTable;
