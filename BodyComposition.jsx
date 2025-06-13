import React, { useState } from "react";
import "../styles/calculators.css";

function BodyComposition() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState(""); // <-- ✅ declare height
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);

  const calculateBodyFat = () => {
    let bodyFat = 0;

    if (gender === "male") {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + height - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    setResult(bodyFat.toFixed(2));
  };

  const getTips = () => {
    if (!result) return "";

    const fat = parseFloat(result);

    if (fat < 15) return "You are lean. Eat nutrient-rich meals and maintain consistent workouts.";
    if (fat >= 15 && fat <= 25)
      return "You have healthy body fat. Continue a balanced diet and regular exercise.";
    return "Consider a nutrition plan and cardio-based fitness to reduce body fat gradually.";
  };

  return (
    <div className="calculator-container">
      <h2>Body Composition Calculator</h2>
      <div className="input-group">
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <input type="number" placeholder="Waist (cm)" value={waist} onChange={(e) => setWaist(e.target.value)} />
        <input type="number" placeholder="Neck (cm)" value={neck} onChange={(e) => setNeck(e.target.value)} />

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button onClick={calculateBodyFat}>Calculate</button>
      </div>

      {result && (
        <div className="result-section">
          <h3>Estimated Body Fat: {result}%</h3>
          <p><strong>Tips:</strong> {getTips()}</p>
        </div>
      )}
    </div>
  );
}

export default BodyComposition;
