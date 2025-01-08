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
    width: "260px", // Default desktop width
    height: "150px",
    backgroundColor: "#0E1811",
    border: "2px solid #00FF00",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    boxSizing: "border-box",
    color: "#fff",
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

// Apply media query for mobile
if (window.innerWidth <= 768) {
  styles.cardContainer.width = "134px"; // Set width for mobile
}

export default Card;
