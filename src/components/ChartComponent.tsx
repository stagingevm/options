import React from "react";
import OptionsTable from "./OptionsTable";
import SellerTable from "./SellerTable";

interface ChartComponentProps {
  selectedTokenPrice: number | null;
  currentView: "OBuyer" | "OSeller";
}

const ChartComponent: React.FC<ChartComponentProps> = ({ selectedTokenPrice, currentView }) => {
  return (
    <div style={styles.container}>
      {currentView === "OBuyer" ? (
        <OptionsTable selectedTokenPrice={selectedTokenPrice} />
      ) : (
        <SellerTable selectedTokenPrice={selectedTokenPrice} />
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
