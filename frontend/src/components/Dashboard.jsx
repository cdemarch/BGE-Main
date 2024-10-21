import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [medications, setMedications] = useState([]);

    useEffect(() => {
        const fetchMedications = async () => {
            const response = await fetch('/api/medications', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                }
            });
            const data = await response.json();
            setMedications(data);
        };
        fetchMedications();
    }, []);

    return (
        <div>
            <h1>Your Medications</h1>
            <ul>
                {medications.map((med) => (
                    <li key={med._id}>{med.name} - {med.dosage}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
