import React from "react";

const StatsCard: React.FC = () => {
  return (
    <div style={styles.cardContainer}>
      <h3 style={styles.cardTitle}>Stats Card</h3>
      <p style={styles.cardContent}>This is the StatsCard content.</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  cardContainer: {
    width: "100%", // Full width of the container
    height: "300px", // Adjust as needed
    backgroundColor: "#0E1811",
    border: "2px solid #00FF00",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    boxSizing: "border-box",
    color: "#fff",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  cardContent: {
    fontSize: "14px",
  },
};

export default StatsCard;
