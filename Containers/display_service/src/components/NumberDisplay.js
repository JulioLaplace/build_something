import React, { useState, useEffect } from "react";
import axios from "axios";
import Counter from "./Counter";
import "./NumberDisplay.css";

const NumberDisplay = () => {
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fonction pour récupérer le nombre depuis l'API
  const fetchNumber = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error
    console.log("Trying to get the number");
    try {
      const response = await axios.get("http://localhost:8082/api/number"); // API URL
      setNumber(response.data.value); // Update number
    } catch (err) {
      console.error(err);
      setError("Error fetching data. Please try again later.");
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchNumber();
  }, []);

  return (
    <div>
      <h2>Current number</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Counter number={number} />
      )}
      <button onClick={fetchNumber} class="button-28" role="button">
        Actualize
      </button>
    </div>
  );
};

export default NumberDisplay;
