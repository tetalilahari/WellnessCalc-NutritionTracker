import React, { useState } from "react";
import "../styles/calculators.css";

const BmrCalculator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmr, setBmr] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  const calculateBMR = () => {
    let calculatedBMR = 0;
    if (gender === "male") {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setBmr(calculatedBMR);
    generateRecommendation(calculatedBMR);
  };

  const generateRecommendation = (bmr) => {
    let food, meditation, diet;

    if (bmr < 1400) {
      food = "Nuts, Avocado, Whole Milk";
      meditation = "Mindfulness for 5 min/day";
      diet = "Increase protein and good fats";
    } else if (bmr < 1800) {
      food = "Lean meat, Brown rice, Oats";
      meditation = "Deep breathing 10 min";
      diet = "Balanced carbs and fiber intake";
    } else {
      food = "Quinoa, Greek Yogurt, Salmon";
      meditation = "Guided Meditation 15 min";
      diet = "Lean protein and complex carbs";
    }

    setRecommendation(
      `🍽️ Food: ${food} | 🧘 Meditation: ${meditation} | 🥗 Diet: ${diet}`
    );
  };

  return (
     <div className="calculator">
      <h2>BMR Calculator</h2>
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateBMR}>Calculate</button>

      {bmr && (
        <div className="result-section">
          <h3>Your BMR is: 🔥 {bmr.toFixed(2)} kcal/day</h3>
          <p className="recommendation">{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default BmrCalculator;
