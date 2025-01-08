import React from "react";
import Navbar from "components/navbar";
import Window from "components/Window";
import Card from "components/card";

const App: React.FC = () => {
  return (
    <div style={styles.appContainer}>
      <Navbar /> {/* Navbar remains at the top */}
      <div style={styles.contentContainer}>
        <Window /> {/* Window added to the center of the app */}
        <div style={styles.cardsContainer}>
          <Card title="Card 1" content="This is the first card." />
          <Card title="Card 2" content="This is the second card." />
          <Card title="Card 3" content="This is the third card." />
          <Card title="Card 4" content="This is the fourth card." />
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
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center content horizontally
    flex: 1,
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", // Allow wrapping for smaller screens
    gap: "20px", // Space between cards
    marginTop: "10px", // Reduced space between window and cards
    marginBottom: "25px",
  },
};

export default App;
