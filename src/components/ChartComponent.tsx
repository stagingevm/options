import React from "react";
import OptionsTable from "./OptionsTable";

const ChartComponent: React.FC = () => {
  return (
    <div style={styles.container}>
      <OptionsTable />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    flex: 2, // Adjust to take more vertical space
    backgroundColor: "#132020",
    border: "2px solid #18e582",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    overflow: "hidden", // Prevent overflow issues
    height: "100%", // Allow it to stretch
  },
};

export default ChartComponent;
