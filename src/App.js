import React, { useState } from 'react';
import './App.css';

function App() {
  const [speed, setSpeed] = useState(0);
  const [car, setCar] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuelConsumption, setFuelConsumption] = useState(0);
  const [travelTime, setTravelTime] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = speed > 0 && distance > 0;
    if (!formValid) {
      return;
    }
    
    const time = distance / speed;
    // const n = new Date(0, 0);
    // n.setMinutes(+time * 60);
    // const travelTime = n.toTimeString().slice(0, 5);
    const hours = Math.floor(time);
    const minutes = (time - hours) * 60;
    const rminutes = Math.round(minutes);
    let result;

    if (hours === 0 && rminutes > 0) {
      result = rminutes + " minutes";
    } else if (hours === 1 && rminutes === 0) {
      result = hours + " hour";
    } else if (hours > 1 && rminutes === 0) {
      result = hours + " hours";
    } else if (hours > 1 && rminutes > 1) {
      result = hours + " hours and " + rminutes + " minutes";
    } else {
      result = hours + " hours and " + rminutes + " minutes";
    }

    console.log(result);
    const travelTime = result;
    
    setTravelTime(travelTime);

    //If the speed of the car increases by 1km / h,
    //the fuel consumption will increase 1.009 times.
    let fuel = 3;
    for (let i = 0; i < speed; i++) {
      fuel = 1.0009 * fuel;
    }
    console.log(fuel);

    let fuel2 = 3.5;
    for (let i = 0; i < speed; i++) {
      fuel2 = 1.0009 * fuel2;
    }
    console.log(fuel2);

    let fuel3 = 4;
    for (let i = 0; i < speed; i++) {
      fuel3 = 1.0009 * fuel3;
    }
    console.log(fuel3);

    const consumption = distance * (fuel/100);

    const consumption2 = distance * (fuel2/100);

    const consumption3 = distance * (fuel3/100);


    let outcome;

    if (car === "A") {
      outcome = consumption.toFixed(2) + " litres";
    } else if (car === "B") {
      outcome = consumption2.toFixed(2) + " litres";
    } else if (car === "C") {
      outcome = consumption3.toFixed(2) + " litres";
    } else {
      outcome = "Could not calculate, try again";
    }

    console.log(outcome);
    const fuelConsumption = outcome;

    setFuelConsumption(fuelConsumption);


  };

  
 
    

  return (
    <div className="App">
      <form onSubmit={calculate}>

        <div>
          <label>Select car</label>
          <select id="carType" value={car} onChange={(e) => setCar(e.target.value)}>
            <option value="">Select car</option>
            <option value="A">Car A</option>
            <option value="B">Car B</option>
            <option value="C">Car C</option>
          </select>
        </div>

        <div>
          <label>Speed in km / h</label>
          <select id="carSpeed" value={speed} onChange={(e) => setSpeed(e.target.value)}>
            <option value="">Select speed</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
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
      <p>Fuel consumption: {fuelConsumption}</p>
    </div>
  );
}

export default App;