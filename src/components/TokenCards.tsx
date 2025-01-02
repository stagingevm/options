import React, { useEffect, useState } from "react";

// Define the props that TokenCards will receive
interface TokenCardsProps {
  onSelectToken: (id: string, price: number) => void; // Function to call when selecting a token
}

const TokenCards: React.FC<TokenCardsProps> = ({ onSelectToken }) => {
  const [prices, setPrices] = useState<{ [key: string]: number }>({});
  const cards = [
    { color: "#F2A900", text: "BTC", id: "bitcoin" },
    { color: "#5c77e1", text: "ETH", id: "ethereum" },
    { color: "#92b0f4", text: "PENGU", id: "pudgy-penguins" },
    { color: "#f4052c", text: "OP", id: "optimism" },
    { color: "#447bbc", text: "ARB", id: "arbitrum" },
    { color: "#7d43dc", text: "POL", id: "matic-network" },
    { color: "#024bda", text: "APE", id: "apecoin" },
    { color: "#f50073", text: "UNI", id: "uniswap" },
    { color: "#353896", text: "ZK", id: "zksync" },
  ];

  useEffect(() => {
    const fetchPrices = async () => {
      const ids = cards.map(card => card.id).join(",");
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Format the fetched data into the prices object
        const formattedPrices = Object.keys(data).reduce((acc, key) => {
          acc[key] = data[key].usd; // Store price in USD
          return acc;
        }, {} as { [key: string]: number });

        setPrices(formattedPrices);
      } catch (error) {
        console.error("Error fetching token prices:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{ ...styles.card, backgroundColor: card.color }}
          onClick={() => onSelectToken(card.id, prices[card.id] || 0)} // Passing the dynamic price
        >
          <div style={styles.tokenText}>
            <div style={styles.tokenName}>{card.text}</div>
            <div style={styles.price}>
              {/* Show the price, or "Loading..." if not available yet */}
              {prices[card.id] !== undefined ? `$${prices[card.id].toFixed(2)}` : "Loading..."}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    gap: "5px",
  },
  card: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "10px",
    padding: "10px",
    cursor: "pointer", // Make the card clickable
  },
  tokenText: {
    display: "flex", // Align token name and price horizontally
    justifyContent: "space-between", // Space between the name and the price
    width: "100%", // Full width of the card
    alignItems: "center",
  },
  tokenName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "black",
  },
  price: {
    fontSize: "24px",
    fontWeight: "bold",
    marginLeft: "10px", // Add space between the name and price
    color: "black",
  },
};

export default TokenCards;
