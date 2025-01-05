// src/components/Sidebar.tsx
import React from "react";
import TokenCards from "./TokenCards";

interface SidebarProps {
  onSelectToken: (id: string, price: number) => void; // Type for the function passed as prop
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectToken }) => {
  return (
    <div style={styles.sidebar}>
      <TokenCards onSelectToken={onSelectToken} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: "5%", // Sidebar width
    height: "98%", // Full height of the parent (Main Layout)
    backgroundColor: "#1E293B", // Slate color
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    padding: "5px 0", // Padding for spacing
    overflow: "visible", // Allow overflow for raised elements
    position: "relative", // Required for z-index to work properly
  },
};

export default Sidebar;
