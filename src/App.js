import React, { useState } from 'react';
import './App.css';

function App() {
  const [speed, setSpeed] = useState(0);
  const [speed2, setSpeed2] = useState(0);
  const [car, setCar] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuelConsumption, setFuelConsumption] = useState(0);
  const [fuelConsumption2, setFuelConsumption2] = useState(0);
  const [travelTime, setTravelTime] = useState(0);
  const [travelTime2, setTravelTime2] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = speed > 0 && distance > 0 && speed2 > 0;
    if (!formValid) {
      return;
    }
    

    //Calculate travel time 1
    const time = distance / speed;
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

    //Calculate travel time 2
    const time2 = distance / speed2;
    const hours2 = Math.floor(time2);
    const minutes2 = (time2 - hours2) * 60;
    const rminutes2 = Math.round(minutes2);
    let result2;

    if (hours2 === 0 && rminutes2 > 0) {
      result2 = rminutes2 + " minutes";
    } else if (hours2 === 1 && rminutes2 === 0) {
      result2 = hours2 + " hour";
    } else if (hours2 > 1 && rminutes2 === 0) {
      result2 = hours2 + " hours";
    } else if (hours2 > 1 && rminutes2 > 1) {
      result2 = hours2 + " hours and " + rminutes2 + " minutes";
    } else {
      result2 = hours2 + " hours and " + rminutes2 + " minutes";
    }

    console.log(result2);
    const travelTime2 = result2;
    
    setTravelTime2(travelTime2);
    

    //If the speed of the car increases by 1km / h,
    //the fuel consumption will increase 1.009 times.
    
    //Calculate fuel consumption 1 for first speed
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


    //Calculate fuel consumption 2 for second speed
    let fuel4 = 3;
    for (let i = 0; i < speed2; i++) {
      fuel4 = 1.0009 * fuel4;
    }
    console.log(fuel4);

    let fuel5 = 3.5;
    for (let i = 0; i < speed2; i++) {
      fuel5 = 1.0009 * fuel5;
    }
    console.log(fuel5);

    let fuel6 = 4;
    for (let i = 0; i < speed2; i++) {
      fuel6 = 1.0009 * fuel6;
    }
    console.log(fuel6);

    const consumption4 = distance * (fuel4/100);
    const consumption5 = distance * (fuel5/100);
    const consumption6 = distance * (fuel6/100);

    let outcome2;

    if (car === "A") {
      outcome2 = consumption4.toFixed(2) + " litres";
    } else if (car === "B") {
      outcome2 = consumption5.toFixed(2) + " litres";
    } else if (car === "C") {
      outcome2 = consumption6.toFixed(2) + " litres";
    } else {
      outcome2 = "Could not calculate, try again";
    }

    console.log(outcome2);
    const fuelConsumption2 = outcome2;

    setFuelConsumption2(fuelConsumption2);
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
          <label>Speed 1 in km / h</label>
          <select id="carSpeed" value={speed} onChange={(e) => setSpeed(e.target.value)}>
            <option value="">Select speed</option>
            <option value="80">80</option>
            <option value="120">120</option>
          </select>
        </div>

        <div>
          <label>Speed 2 in km / h</label>
          <select id="carSpeed" value={speed2} onChange={(e) => setSpeed2(e.target.value)}>
            <option value="">Select speed</option>
            <option value="80">80</option>
            <option value="120">120</option>
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
      <div>
        <p>Travel time 1: {travelTime}</p>
        <p>Fuel consumption 1: {fuelConsumption}</p>
      </div>
      <div>
        <p>Travel time 2: {travelTime2}</p>
        <p>Fuel consumption 2: {fuelConsumption2}</p>
      </div>
    </div>
  );
}

export default App;