import React, { useEffect, useState } from "react";

// Define the type for the price state object
type Prices = {
  [key: string]: number | undefined;
};

const TokenCards: React.FC = () => {
  const [prices, setPrices] = useState<Prices>({});

  const cards = [
    { color: "#F2A900", text: "BTC", id: "bitcoin" },
    { color: "#5c77e1", text: "ETH", id: "ethereum" },
    { color: "#92b0f4", text: "PENGU", id: "pudgy-penguins" },
    { color: "#f4052c", text: "OP", id: "optimism" },
    { color: "#447bbc", text: "ARB", id: "arbitrum" },
    { color: "#7d43dc", text: "POL", id: "matic-network" }, // Correct ID for Polygon
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

        // Ensure the API returns the expected structure
        console.log("Fetched data:", data);

        // Update the prices state with the fetched data, storing the price in USD
        const formattedPrices = Object.keys(data).reduce((acc: Prices, key: string) => {
          acc[key] = data[key].usd;
          return acc;
        }, {});

        setPrices(formattedPrices);
      } catch (error) {
        console.error("Error fetching token prices:", error);
      }
    };

    fetchPrices();
  }, [cards]);

  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div key={index} style={{ ...styles.card, backgroundColor: card.color }}>
          <div style={styles.tokenText}>
            <div style={styles.tokenName}>{card.text}</div>
            <div style={styles.price}>
              {prices[card.id] !== undefined ? `$${prices[card.id]?.toFixed(2)}` : "Loading..."}
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
    height: "100%", // Full height of the Sidebar
    width: "100%", // Full width of the Sidebar
    gap: "5px", // Spacing between cards
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
  },
  tokenText: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  tokenName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "black", // Ensure token name text is black
  },
  price: {
    fontSize: "28px",  // Double the size of the original font size
    fontWeight: "bold", // Make the price bold
    marginLeft: "10px", // Add space between the token text and price
    color: "black", // Ensure the price is black
  },
};

export default TokenCards;
