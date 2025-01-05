// src/components/Sidebar.tsx
import React from "react";
import TokenCards from "./TokenCards";

interface SidebarProps {
  onSelectToken: (id: string, price: number) => void;
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
    width: "5%",
    height: "98%",
    backgroundColor: "#1E293B",
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    padding: "5px 0",
    overflow: "visible",
    position: "relative",
  },
};

export default Sidebar;
