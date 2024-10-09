import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const userId = '123'; // Fetch actual user ID from context or token

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await axios.get(`http://localhost:5000/api/trips/${userId}`);
      setTrips(response.data);
    };
    fetchTrips();
  }, []);

  return (
    <div>
      <h2>Your Trips</h2>
      {trips.map((trip) => (
        <div key={trip._id}>
          <h3>{trip.title}</h3>
          <p>{trip.destination}</p>
          <p>{trip.budget} USD</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;