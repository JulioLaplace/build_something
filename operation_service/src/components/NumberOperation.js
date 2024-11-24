import React, { useState, useEffect } from "react";
import axios from "axios";

const NumberOperation = () => {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend
      const response = await axios.post(
        "http://localhost:3001/api/number/update",
        {
          operation: operation,
        }
      );

      // Update the result and reset the error if there is one
      //   setResult(response.data.value);
      //   setError(null);

      // Reset the operation input
      setOperation("");
    } catch (err) {
      setError("Erreur lors de l'exécution de l'opération.");
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>Operation Service</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="operation">Enter an operation</label>
          <input
            type="text"
            id="operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            placeholder="ex: +5, *2, /3"
            required
          />
        </div>
        <button type="submit">Perform</button>
      </form>

      {/* {result !== null && (
        <div>
          <h2>Résultat : {result}</h2>
        </div>
      )} */}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default NumberOperation;
