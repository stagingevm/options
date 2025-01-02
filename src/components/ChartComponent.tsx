import React from "react";
import OptionsTable from "./OptionsTable";

interface ChartComponentProps {
  selectedTokenPrice: number | undefined; // Expecting the selected token price from the parent
}

const ChartComponent: React.FC<ChartComponentProps> = ({ selectedTokenPrice }) => {
  return (
    <div style={styles.container}>
      {/* Pass selectedTokenPrice to the OptionsTable */}
      <OptionsTable selectedTokenPrice={selectedTokenPrice} />
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
