import React, { useState } from "react";
import "../styles/calculators.css";

const StressLevelCalculator = () => {
  const [hoursSleep, setHoursSleep] = useState("");
  const [exerciseMinutes, setExerciseMinutes] = useState("");
  const [moodScore, setMoodScore] = useState("");
  const [stressLevel, setStressLevel] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  const calculate = () => {
    const sleep = parseFloat(hoursSleep);
    const exercise = parseFloat(exerciseMinutes);
    const mood = parseFloat(moodScore);

    const score = sleep * 0.4 + exercise * 0.3 + mood * 0.3;

    if (score >= 8) {
      setStressLevel("Low Stress");
      setRecommendation("Keep it up! Continue yoga, gratitude journaling, and a diet rich in leafy greens & berries.");
    } else if (score >= 5) {
      setStressLevel("Moderate Stress");
      setRecommendation("Try meditation, walking in nature, avoid caffeine & eat magnesium-rich foods.");
    } else {
      setStressLevel("High Stress");
      setRecommendation("Consider deep breathing, therapy support, and avoid sugar/heavy meals. Do light stretching.");
    }
  };

  return (
    <div className="calculator">
      <h2>Stress Level Calculator</h2>
      <input type="number" placeholder="Hours of Sleep" value={hoursSleep} onChange={(e) => setHoursSleep(e.target.value)} />
      <input type="number" placeholder="Minutes of Exercise" value={exerciseMinutes} onChange={(e) => setExerciseMinutes(e.target.value)} />
      <input type="number" placeholder="Mood Score (1-10)" value={moodScore} onChange={(e) => setMoodScore(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      {stressLevel && (
        <div className="result">
          <p>Your Stress Level: <strong>{stressLevel}</strong></p>
          <p className="recommendation">{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default StressLevelCalculator;
