import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [ounces, setOunces] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const pounds = Math.floor(ounces / 16);
    const remainingOunces = parseFloat((ounces % 16).toFixed(3));
    setResult(
      `${pounds} pound${pounds != 1 ? 's' : ''} and ${remainingOunces} ounces`
    );
  };

  return (
    <div>
      <h4>Enter ounces to see the conversion to pounds and ounces</h4>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            onChange={(e) => setOunces(e.target.value)}
            value={ounces}
            className="input"
            placeholder="Enter ounces here..."
          ></input>
          <button type="submit" className="submit-button">
            Enter
          </button>
        </form>
      </div>
      <div className="results-container">
        <h3>{result}</h3>
      </div>
    </div>
  );
}

export default App;
