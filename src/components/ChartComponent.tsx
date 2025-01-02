import React from "react";
import OptionsTable from "./OptionsTable";

interface ChartComponentProps {
  selectedTokenSymbol: string | null; // Token name
  currentPrice: number | null; // Current price of the token
  currentView: "OBuyer" | "OSeller";
}

const ChartComponent: React.FC<ChartComponentProps> = ({ selectedTokenSymbol, currentPrice, currentView }) => {
  return (
    <div style={styles.container}>
      {currentView === "OBuyer" ? (
        <OptionsTable selectedTokenSymbol={selectedTokenSymbol} currentPrice={currentPrice} /> // Pass both props
      ) : (
        <div>{selectedTokenSymbol || "Select a token"}</div> // Placeholder for OSeller view
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    flex: 2,
    backgroundColor: "#132020",
    border: "2px solid #18e582",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    overflow: "hidden",
    height: "100%",
  },
};

export default ChartComponent;
