import React, { useState } from "react";
import "../styles/calculators.css";

const TdeeCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [tdee, setTdee] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  const calculateTDEE = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    let bmr = gender === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;

    const calculatedTDEE = Math.round(bmr * parseFloat(activity));
    setTdee(calculatedTDEE);

    let rec = "";
    if (calculatedTDEE < 1800) {
      rec = "Eat nutrient-dense foods like eggs, nuts, whole grains. Practice light yoga or walking.";
    } else if (calculatedTDEE < 2500) {
      rec = "Follow a balanced diet with lean protein, veggies, fruits. Try daily breathing meditation.";
    } else {
      rec = "Consider splitting meals into 5–6 portions. Incorporate HIIT or strength training.";
    }
    setRecommendation(rec);
  };

  return (
    <div className="calculator">
      <h2>TDEE Calculator</h2>
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="1.2">Sedentary</option>
        <option value="1.375">Lightly active</option>
        <option value="1.55">Moderately active</option>
        <option value="1.725">Very active</option>
        <option value="1.9">Super active</option>
      </select>
      <button onClick={calculateTDEE}>Calculate</button>
      {tdee && (
        <div className="result">
          <p>Your TDEE is: <strong>{tdee} kcal/day</strong></p>
          <p className="recommendation">{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default TdeeCalculator;
