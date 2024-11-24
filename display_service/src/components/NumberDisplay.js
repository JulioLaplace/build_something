import React, { useState, useEffect } from "react";
import axios from "axios";

const NumberDisplay = () => {
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fonction pour récupérer le nombre depuis l'API
  const fetchNumber = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error
    try {
      const response = await axios.get("http://localhost:3001/api/number"); // API URL
      setNumber(response.data.value); // Update number
    } catch (err) {
      setError("Error fetching data. Please try again later.");
    } finally {
      // Wait 500ms before ending loading
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchNumber();
  }, []);

  return (
    <div>
      <h2>Current number :</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{number}</p>
      )}
      <button
        onClick={fetchNumber}
        style={{ padding: "10px 20px", fontSize: "1rem" }}
      >
        Actualize
      </button>
    </div>
  );
};

export default NumberDisplay;
