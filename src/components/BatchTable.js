import React from 'react';
import { Button, Table } from 'react-bootstrap';

const baseUrl = 'http://localhost:5259';

const BatchTable = ({ batches }) => {
    const deleteBatch = (batchId) => {
        const response = fetch(`${baseUrl}/Batch/${batchId}`, {
            method: "DELETE"
        }).then((response) => {
            if (response.ok) {
                window.location.reload();
            }
        });
        console.log(response);
    };
    return (
        <Table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Start time</th>
                    <th>Sugar</th>
                    <th>Grams of Sugar</th>
                    <th>Tea</th>
                    <th>Grams of Tea</th>
                    <th>Steep minutes</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {batches.map((batch) => (
                    <tr key={batch.id}>
                        <td>{batch.id}</td>
                        <td>{batch.startTime}</td>
                        <td>{batch.sugarType}</td>
                        <td>{batch.gramsOfSugar}</td>
                        <td>{batch.teaType}</td>
                        <td>{batch.gramsOfTea}</td>
                        <td>{batch.steepMinutes}</td>
                        <td>{batch.description}</td>
                        <td>
                            <Button className="btn btn-danger" type="button" onClick={() => deleteBatch(batch.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default BatchTable;
