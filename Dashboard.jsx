import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation on logout

import BmiCalculator from './BmiCalculator';
import BmrCalculator from './BmrCalculator';
import TdeeCalculator from './TdeeCalculator';
import BodyComposition from './BodyComposition';
import StressLevelCalculator from './StressLevelCalculator';
import About from './About';
import Contact from './Contact';

import './Dashboard.css';

const tabs = [
  "BMI Calculator",
  "BMR Calculator",
  "TDEE Calculator",
  "Body Composition",
  "Stress Level",
  "About Page",
  "Contact Page"
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Clear auth tokens/session here if any
    navigate('/'); // redirect to home page
  };

  return (
    <div className="dashboard">
      <h2>Welcome to WellnessCalc</h2>

      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

        {/* Logout button separate style */}
        <button
          className="logout-btn"
          onClick={handleLogout}
          style={{ marginLeft: 'auto', backgroundColor: '#f44336', color: 'white' }}
        >
          Logout
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "BMI Calculator" && <BmiCalculator />}
        {activeTab === "BMR Calculator" && <BmrCalculator />}
        {activeTab === "TDEE Calculator" && <TdeeCalculator />}
        {activeTab === "Body Composition" && <BodyComposition />}
        {activeTab === "Stress Level" && <StressLevelCalculator />}
        {activeTab === "About Page" && <About />}
        {activeTab === "Contact Page" && <Contact />}
      </div>
    </div>
  );
}

export default Dashboard;
