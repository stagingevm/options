import React from "react";

const ChartComponent: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Chart Window</h2>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    flex: 2, // Take up more space vertically
    backgroundColor: "#132020", // Updated background color
    border: "2px solid #18e582", // Neon green border
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px", // Add some spacing
  },
  title: {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default ChartComponent;
