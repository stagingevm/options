import React, { useEffect, useState } from "react";

interface TokenCardsProps {
  onSelectToken: (id: string, price: number) => void;
}

const TokenCards: React.FC<TokenCardsProps> = ({ onSelectToken }) => {
  const [prices, setPrices] = useState<{ [key: string]: number }>({});
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

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
      const ids = cards.map((card) => card.id).join(",");
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        const formattedPrices = Object.keys(data).reduce((acc, key) => {
          acc[key] = data[key].usd;
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
          className={`token-card ${selectedToken === card.id ? "selected" : ""}`}
          style={{
            ...styles.card,
            backgroundColor: card.color,
          }}
          onClick={() => {
            setSelectedToken(card.id);
            onSelectToken(card.id, prices[card.id] || 0);
          }}
        >
          {selectedToken === card.id && (
            <div
              className="liquid"
              style={{
                ...styles.liquid,
                backgroundColor: card.color,
              }}
            ></div>
          )}
          <div style={styles.tokenText}>
            <div style={styles.tokenName}>{card.text}</div>
            <div style={styles.price}>
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
    borderRadius: "10px",
    padding: "10px",
    cursor: "pointer",
    position: "relative", // Necessary for the liquid effect
    overflow: "hidden", // Prevent overflow of the liquid effect
    color: "white", // Default text color
  },
  liquid: {
    position: "absolute",
    top: "-80px",
    left: "0",
    width: "200px",
    height: "200px",
    boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.5)",
    transition: "0.5s",
    zIndex: 0, // Ensure liquid stays behind the text
  },
  tokenText: {
    display: "flex", // Align token name and price horizontally
    justifyContent: "space-between", // Space between the name and the price
    width: "100%", // Full width of the card
    alignItems: "center",
    position: "relative", // Ensure text stays above the liquid effect
    zIndex: 1, // Ensure text is above the liquid effect
  },
  tokenName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white", // Ensure text is white for visibility
  },
  price: {
    fontSize: "24px",
    fontWeight: "bold",
    marginLeft: "10px", // Add space between the name and price
    color: "white", // Ensure price is white for visibility
  },
};

export default TokenCards;
