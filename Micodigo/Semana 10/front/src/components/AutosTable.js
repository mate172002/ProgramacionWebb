import React, { useEffect, useState } from 'react';

const AutosTable = () => {
    const [autos, setAutos] = useState([]);

    useEffect(() => {
        fetch('/autos')
            .then((res) => res.json())
            .then((data) => setAutos(data));
    }, []);

    const deleteAuto = (id) => {
        fetch(`/autos/${id}`, { method: 'DELETE' }).then(() => {
            setAutos(autos.filter((auto) => auto.id !== id));
        });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Brand</th>
                    <th>Passengers</th>
                    <th>Color</th>
                    <th>Engine</th>
                    <th>Model</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {autos.map((auto) => (
                    <tr key={auto.id}>
                        <td>{auto.id}</td>
                        <td>{auto.Brand}</td>
                        <td>{auto.Passengers}</td>
                        <td>{auto.Color}</td>
                        <td>{auto.Engine}</td>
                        <td>{auto.Model}</td>
                        <td>
                            <button onClick={() => deleteAuto(auto.id)}>Delete</button>
                            <button>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AutosTable;
