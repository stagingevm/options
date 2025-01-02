// src/components/TokenCards.tsx
import React, { useEffect, useState } from "react";
import pythFeeds, { fetchLatestPrices, subscribeToPriceUpdates } from "../pythFeeds";
import { PriceUpdate } from "../types"; // Import PriceUpdate directly from types.ts

interface TokenCardsProps {
  onSelectToken: (id: string, price: number) => void;
}

interface Prices {
  [key: string]: number;
}

const TokenCards: React.FC<TokenCardsProps> = ({ onSelectToken }) => {
  const [prices, setPrices] = useState<Prices>({});
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const tokens = Object.keys(pythFeeds);
  const displayedTokens = tokens.slice(startIndex, startIndex + 10); // Display 10 cards at a time

  useEffect(() => {
    // Fetch initial prices
    fetchLatestPrices()
      .then((initialPrices: Prices) => {
        setPrices(initialPrices);
      })
      .catch((error) => {
        console.error("Error fetching initial prices:", error);
      });

    // Subscribe to price updates
    const unsubscribe = subscribeToPriceUpdates((priceUpdate: PriceUpdate) => {
      const token = Object.keys(pythFeeds).find(
        (key) => pythFeeds[key] === priceUpdate.id
      );

      if (token) {
        const price = Number(priceUpdate.priceData.price) / Math.pow(10, -Number(priceUpdate.priceData.expo));
        setPrices((prevPrices) => ({
          ...prevPrices,
          [token]: price,
        }));
      }
    });

    return () => {
      unsubscribe(); // Cleanup on unmount
    };
  }, []);

  const handleScroll = (direction: "up" | "down") => {
    const newIndex =
      direction === "up"
        ? Math.max(startIndex - 10, 0)
        : Math.min(startIndex + 10, tokens.length - 10);
    setStartIndex(newIndex);
  };

  return (
    <div style={styles.container}>
      <button style={styles.arrowButton} onClick={() => handleScroll("up")}>
        ↑
      </button>

      <div style={styles.cardsContainer}>
        {displayedTokens.map((token, index) => (
          <div
            key={index}
            className={`token-card ${
              selectedToken === token ? "selected" : ""
            }`}
            style={{
              ...styles.card,
              ...(selectedToken === token ? styles.selectedCard : {}),
            }}
            onClick={() => {
              setSelectedToken(token);
              onSelectToken(token, prices[token] || 0);
            }}
          >
            <div style={styles.tokenText}>
              <span style={styles.tokenName}>{token.toUpperCase()}</span>
              <span style={styles.price}>
                {prices[token] !== undefined
                  ? `$${prices[token].toFixed(2)}`
                  : "Loading..."}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button style={styles.arrowButton} onClick={() => handleScroll("down")}>
        ↓
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#000", // Black background
    gap: "5px",
    position: "relative",
    alignItems: "center",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between", // Align symbol and price on the same line
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    transition: "transform 0.3s, box-shadow 0.3s",
    marginBottom: "5px", // Space between cards
  },
  selectedCard: {
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
  },
  tokenText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 15px", // Adjust padding
  },
  tokenName: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  arrowButton: {
    width: "80%", // Wide button
    height: "30px", // Short height
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "center",
    transition: "background-color 0.3s",
  },
  arrowButtonHover: {
    backgroundColor: "#444",
  },
};

export default TokenCards;
