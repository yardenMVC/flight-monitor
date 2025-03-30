import React, { useState } from "react";

const Inputs = ({ setLastFlight }) => {
  const [altitude, setAltitude] = useState("");
  const [his, setHis] = useState("");
  const [adi, setAdi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const alt = Number(altitude);
    const hisVal = Number(his);
    const adiVal = Number(adi);

    if (isNaN(alt) || alt < 0 || alt > 3000) {
      alert("Altitude must be between 0 and 3000");
      return;
    }
    if (isNaN(hisVal) || hisVal < 0 || hisVal > 360) {
      alert("HIS must be between 0 and 360");
      return;
    }
    if (isNaN(adiVal) || adiVal < -100 || adiVal > 100) {
      alert("ADI must be between -100 and 100");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/FlightData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ altitude: alt, his: hisVal, adi: adiVal }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        alert("Error: " + errorText);
        return;
      }

      const saved = await res.json();
      setLastFlight(saved.data);
      alert("Flight data saved successfully!");
    } catch (err) {
      alert("Failed to send data to server.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "2rem",
        paddingBottom: "4.5rem",
        maxWidth: "500px",
        margin: "2rem auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Altitude */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={{ minWidth: 100 }}>Altitude:</label>
          <input
            type="number"
            placeholder="0 - 3000"
            value={altitude}
            onChange={(e) => setAltitude(e.target.value)}
            required
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "60%",
            }}
          />
        </div>

        {/* HIS */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={{ minWidth: 100 }}>HIS:</label>
          <input
            type="number"
            placeholder="0 - 360"
            value={his}
            onChange={(e) => setHis(e.target.value)}
            required
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "60%",
            }}
          />
        </div>

        {/* ADI */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={{ minWidth: 100 }}>ADI:</label>
          <input
            type="number"
            placeholder="-100 - 100"
            value={adi}
            onChange={(e) => setAdi(e.target.value)}
            required
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "60%",
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          padding: "0.6rem 1.5rem",
          backgroundColor: "brown",
          color: "white",
          border: "none",
          borderRadius: "0 10px 10px 0",
          cursor: "pointer",
        }}
      >
        SEND
      </button>
    </form>
  );
};

export default Inputs;
