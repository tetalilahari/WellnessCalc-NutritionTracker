import React, { useState } from "react";
import "../styles/calculators.css";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [recommendations, setRecommendations] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const h = height / 100;
      const result = (weight / (h * h)).toFixed(2);
      setBmi(result);

      let cat = "";
      let rec = "";

      if (result < 18.5) {
        cat = "Underweight";
        rec = "Eat protein-rich foods, peanut butter, nuts, bananas, whole grains.";
      } else if (result < 24.9) {
        cat = "Normal weight";
        rec = "Maintain with balanced diet: fruits, vegetables, and whole foods.";
      } else if (result < 29.9) {
        cat = "Overweight";
        rec = "Include salads, lean proteins, yoga, and morning walks.";
      } else {
        cat = "Obese";
        rec = "Follow a calorie-deficit diet, consult a nutritionist, meditate daily.";
      }

      setCategory(cat);
      setRecommendations(rec);
    }
  };

  return (
    <div className="calculator-container">
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result-box">
          <p>Your BMI is: <strong>{bmi}</strong></p>
          <p>Category: <strong>{category}</strong></p>
          <div className="recommendations">
            <h4>Recommendations:</h4>
            <ul>
              {recommendations.split(",").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
