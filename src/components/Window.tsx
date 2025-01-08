import React from "react";

const Window: React.FC = () => {
  return (
    <div style={styles.windowContainer}>
      <div style={styles.windowContent}>
        <h2 style={styles.title}>Window Content</h2>
        {/* Your additional content goes here */}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  windowContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // Align closer to the top
    height: "100%", // Full height for the parent container
    width: "100%", // Full width for the parent container
    padding: "10px", // Adds spacing around the window
    marginTop: "20px", // Increased space between Navbar and Window
  },
  windowContent: {
    width: "100%",
    maxWidth: "900px", // Maximum width set to 900px
    height: "60vh", // 3/4 of the viewport height for desktop
    backgroundColor: "#0E1811", // Same dark color as navbar
    borderRadius: "8px", // Rounded corners for a smooth look
    border: "2px solid #00FF00", // Neon green border
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxSizing: "border-box", // Ensures padding doesn't affect width
    color: "#fff", // White text for contrast
  },
  title: {
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "5px",
  },
};

export default Window;
