import React from "react";
import Navbar from "components/navbar";
import Window from "components/Window";
import Card from "components/card";
import TradingCard from "components/TradingCard";
import StatsCard from "components/StatsCard";

const App: React.FC = () => {
  return (
    <div style={styles.appContainer}>
      <Navbar />
      <div style={styles.contentContainer}>
        <Window />
        <div style={styles.cardsContainer}>
          <Card title="Card 1" content="This is the first card." />
          <Card title="Card 2" content="This is the second card." />
          <Card title="Card 3" content="This is the third card." />
          <Card title="Card 4" content="This is the fourth card." />
        </div>
        <div style={styles.bottomContainer}>
          <TradingCard />
          <StatsCard />
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#0c0c0c",
    overflowY: "auto", // Enables vertical scrolling
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "10px",
    marginBottom: "25px",
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // Aligns to top of the container
    width: "100%",
    maxWidth: "900px", // Matches the width of Window
    gap: "20px", // Space between TradingCard and StatsCard
    marginTop: "20px",
    padding: "10px",
  },
};

export default App;
