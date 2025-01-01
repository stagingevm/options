import React from "react";

const TokenCards: React.FC = () => {
  const cards = [
    { color: "#F2A900", text: "BTC" },
    { color: "#5c77e1", text: "ETH" },
    { color: "#92b0f4", text: "PENGU" },
    { color: "#f4052c", text: "OP" },
    { color: "#447bbc", text: "ARB" },
    { color: "#7d43dc", text: "POL" },
    { color: "#024bda", text: "APE" },
    { color: "#f50073", text: "UNI" },
    { color: "#353896", text: "ZK" },

  ];

  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div key={index} style={{ ...styles.card, backgroundColor: card.color }}>
          {card.text}
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%", // Full height of the Sidebar
    width: "100%", // Full width of the Sidebar
    gap: "5px", // Spacing between cards
  },
  card: {
    flex: 1, // Ensures cards grow equally to fill the Sidebar space
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "10px",
  },
};

export default TokenCards;
