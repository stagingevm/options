import React from "react";
import TokenCards from "./tokencards";

const Sidebar: React.FC = () => {
  return (
    <div style={styles.sidebar}>
      <TokenCards />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: "15%", // Sidebar width
    height: "100%", // Full height of the parent (Main Layout)
    backgroundColor: "#1E293B", // Slate color
    display: "flex",
    flexDirection: "column",
    padding: "5px 0", // Padding for spacing
    overflow: "hidden", // Prevent scrolling
  },
};

export default Sidebar;
