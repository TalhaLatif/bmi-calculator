import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [bmi, setBmi] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = async () => {
    try {
      // Check for valid inputs
      if (weight <= 0 || heightInches <= 0) {
        throw new Error('Please enter valid positive numbers for weight and height.');
      }

      // Convert height from inches to meters (1 inch = 0.0254 meters)
      const finalHeight = parseFloat(heightInches) * 0.0254;
      const finalWeight = parseFloat(weight); // Weight in kg remains the same

      // Validate converted height
      if (finalHeight <= 0) {
        throw new Error('Height must be greater than zero.');
      }

      const response = await fetch(`http://localhost:8080/api/bmi?weight=${finalWeight}&height=${finalHeight}`);
      if (!response.ok) {
        throw new Error('Failed to calculate BMI. Please check the input values.');
      }
      const result = await response.json();
      setBmi(result);
      setError('');
      giveFeedback(result);
    } catch (err) {
      setError(err.message);
      setBmi(null);
      setFeedback('');
    }
  };

  const giveFeedback = (bmi) => {
    if (bmi < 16) {
      setFeedback('Severely Underweight');
    } else if (bmi >= 16 && bmi < 18.5) {
      setFeedback('Underweight');
    } else if (bmi >= 18.5 && bmi < 25) {
      setFeedback('Normal');
    } else if (bmi >= 25 && bmi < 30) {
      setFeedback('Overweight');
    } else if (bmi >= 30 && bmi < 35) {
      setFeedback('Moderately Obese');
    } else if (bmi >= 35 && bmi < 40) {
      setFeedback('Severely Obese');
    } else {
      setFeedback('Morbidly Obese');
    }
  };

  return (
    <div className="App">
      <div className="container">
        {/* BMI Calculator */}
        <div className="calculator">
  <h1>BMI Calculator</h1>
  <div>
    <label>Weight (kg):</label>
    <input
      type="number"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
    />
  </div>
  <div>
    <label>Height (inches):</label>
    <input
      type="number"
      value={heightInches}
      onChange={(e) => setHeightInches(e.target.value)}
    />
  </div>
  <button className="button" onClick={calculateBMI}>Calculate BMI</button>
  
  {bmi !== null && (
    <div className="bmi-result">
      <h2>Your BMI: {bmi.toFixed(2)}</h2>
      <p className="feedback">{feedback}</p>
    </div>
  )}
  
  {error && (
    <div className="error">
      <p>{error}</p>
    </div>
  )}
</div>


        {/* WHO Adult BMI Categories Table */}
        <div className="bmi-table">
          <h2>WHO Adult BMI Categories</h2>
          <table>
            <thead>
              <tr>
                <th>BMI</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt; 16.0</td>
                <td>Severely Underweight</td>
              </tr>
              <tr>
                <td>16.0 - 18.4</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5 - 24.9</td>
                <td>Normal</td>
              </tr>
              <tr>
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 - 34.9</td>
                <td>Moderately Obese</td>
              </tr>
              <tr>
                <td>35.0 - 39.9</td>
                <td>Severely Obese</td>
              </tr>
              <tr>
                <td>&ge; 40.0</td>
                <td>Morbidly Obese</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
