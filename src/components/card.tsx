import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={styles.cardContainer}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardContent}>{content}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  cardContainer: {
    width: "200px", // Fixed card width
    height: "150px", // Fixed card height
    backgroundColor: "#2A2723", // Dark background color
    border: "4px solid #00FF00", // Neon green border
    borderRadius: "8px", // Rounded corners
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: "10px",
    boxSizing: "border-box",
    color: "#fff", // White text for contrast
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "16px",
    marginBottom: "8px",
  },
  cardContent: {
    fontSize: "14px",
  },
};

export default Card;
