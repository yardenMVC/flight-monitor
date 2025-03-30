import React from "react";
import './visual.css';

const VisualDisplay = ({ data }) => {
  const altitudeOffset = (data.altitude / 3000) * 100;
  const adiColor = data.adi === 100 ? "blue" : data.adi === 0 ? "green" : `rgb(0, ${255 - data.adi * 2.55}, ${data.adi * 2.55})`;
  const hisAngle = data.his;

  return (
    <div className="panel-container">
      {/* Altitude Bar */}
      <div className="altitude-track">
        <div className="altitude-labels">
          <span>3000</span>
          <span>2000</span>
          <span>1000</span>
          <span>0</span>
        </div>
        <div
          className="altitude-arrow-line"
          style={{ bottom: `${altitudeOffset}%` }}
        />
        <div
          className="altitude-arrow-head"
          style={{ bottom: `${altitudeOffset}%` }}
        />
      </div>

      {/* HIS Compass */}
      <div className="his-wrapper">
        <div className="his-pointer" />
        <div
          className="his-disk"
          style={{ transform: `rotate(-${hisAngle}deg)` }}
        >
          <div className="his-ring" />
          <div className="his-dot" />
          <div className="his-num top" style={{ transform: `rotate(${hisAngle}deg)` }}>0</div>
          <div className="his-num right" style={{ transform: `rotate(${hisAngle}deg)` }}>90</div>
          <div className="his-num bottom" style={{ transform: `rotate(${hisAngle}deg)` }}>180</div>
          <div className="his-num left" style={{ transform: `rotate(${hisAngle}deg)` }}>270</div>
        </div>
      </div>

      {/* ADI */}
      <div className="adi-indicator" style={{ backgroundColor: adiColor }} />
    </div>
  );
};

export default Visual;