import React, { useState } from 'react';

const AutosForm = () => {
    const [auto, setAuto] = useState({
        Brand: '',
        Passengers: '',
        Color: '',
        Engine: '',
        Model: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/autos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(auto),
        }).then(() => {
            alert('Auto creado con éxito');
            setAuto({
                Brand: '',
                Passengers: '',
                Color: '',
                Engine: '',
                Model: '',
            });
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Brand" value={auto.Brand} onChange={(e) => setAuto({ ...auto, Brand: e.target.value })} />
            <input type="number" placeholder="Passengers" value={auto.Passengers} onChange={(e) => setAuto({ ...auto, Passengers: e.target.value })} />
            <input type="text" placeholder="Color" value={auto.Color} onChange={(e) => setAuto({ ...auto, Color: e.target.value })} />
            <input type="text" placeholder="Engine" value={auto.Engine} onChange={(e) => setAuto({ ...auto, Engine: e.target.value })} />
            <input type="text" placeholder="Model" value={auto.Model} onChange={(e) => setAuto({ ...auto, Model: e.target.value })} />
            <button type="submit">Register</button>
        </form>
    );
};

export default AutosForm;
