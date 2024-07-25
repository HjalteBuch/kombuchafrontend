import React from 'react';
import { Table } from 'react-bootstrap';

const BatchTable = ({ batches }) => {
    return (
        <Table class="table table-hover">
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
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default BatchTable;
