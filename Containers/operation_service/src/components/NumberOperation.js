import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NumberOperation.css";

const NumberOperation = () => {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend
      const response = await axios.post(
        "http://localhost:8082/api/number/update",
        {
          operation: operation,
        }
      );

      // Reset the operation input
      setOperation("");
    } catch (err) {
      setError("Wrong operation");
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
        <button class="button-28" role="button" type="submit">
          Perform
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default NumberOperation;
