import React from "react";

const Navbar: React.FC = () => {
  return (
    <div style={styles.navbarContainer}>
      <h1 style={styles.navbarTitle}>Placeholder Navbar</h1>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px", // Increased height
    backgroundColor: "#0E1811", // Dark background color
    borderBottom: "2px solid #00FF00", // Neon green border
    color: "#fff", // White text color
  },
  navbarTitle: {
    fontSize: "34px", // Increased font size
    fontWeight: "bold",
  },
};

export default Navbar;
