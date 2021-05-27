import React, { useState } from 'react';
import './App.css';

function App() {
  const [speed, setSpeed] = useState(0);
  // const [car, setCar] = useState(0);
  const [distance, setDistance] = useState(0);
  // const [fuelConsumption, setFuelConsumption] = useState(0);
  const [travelTime, setTravelTime] = useState(0);

  const calculateTravelTime = (e) => {
    e.preventDefault();
    const formValid = speed > 0 && distance > 0;
    if (!formValid) {
      return;
    }
    const time = distance / speed;
    const n = new Date(0, 0);
    n.setMinutes(+time * 60);
    const travelTime = n.toTimeString().slice(0, 5);
    setTravelTime(travelTime);
  };

  return (
    <div className="App">
      <form onSubmit={calculateTravelTime}>
        <div>
          <label>Speed in km / h</label>
          <input value={speed} onChange={(e) => setSpeed(e.target.value)} />
        </div>

        <div>
          <label>Distance in km</label>
          <input
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>

        <button type="submit">calculate</button>
      </form>
      <p>Travel time: {travelTime}</p>
    </div>
  );
}

export default App;