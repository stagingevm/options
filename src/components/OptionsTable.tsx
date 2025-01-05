import React, { useState, useEffect } from "react";

interface OptionsTableProps {
  selectedTokenSymbol?: string | null; // Optional because it's not used in the current code
  currentPrice: number | null; // Current price of the token
}

const OptionsTable: React.FC<OptionsTableProps> = ({ currentPrice }) => {
  const [isMobile, setIsMobile] = useState(false); // Detect mobile view
  const [showLonger, setShowLonger] = useState(false); // Toggle for longer/shorter time frames on mobile

  const positiveValues = [
    { value: "+20%", shade: "#18e582", multiplier: 0.2, shortValues: [1200, 1140, 1080, 1020, 960], longValues: [900, 840, 780, 720, 660] },
    { value: "+10%", shade: "#28f087", multiplier: 0.1, shortValues: [683, 648, 614, 580, 546], longValues: [512, 478, 444, 410, 376] },
    { value: "+5%", shade: "#3bfa8f", multiplier: 0.05, shortValues: [424, 402, 380, 358, 336], longValues: [314, 292, 270, 248, 226] },
    { value: "+3%", shade: "#50ffa4", multiplier: 0.03, shortValues: [320, 303, 286, 269, 252], longValues: [235, 218, 201, 184, 167] },
    { value: "+1%", shade: "#71ffb8", multiplier: 0.01, shortValues: [217, 206, 195, 184, 173], longValues: [162, 151, 140, 129, 118] },
    { value: "+0.5%", shade: "#91ffd2", multiplier: 0.005, shortValues: [191, 182, 173, 164, 155], longValues: [146, 137, 128, 119, 110] },
    { value: "+0.25%", shade: "#c5ffe6", multiplier: 0.0025, shortValues: [178, 171, 164, 157, 150], longValues: [143, 136, 129, 122, 115] },
    { value: "UP", shade: "#c5ffe6", multiplier: 0, shortValues: [165, 159, 153, 147, 141], longValues: [134, 128, 122, 116, 110] },
  ];

  const negativeValues = [
    { value: "DOWN", shade: "#ff8080", multiplier: 0, shortValues: [165, 159, 153, 147, 141], longValues: [134, 128, 122, 116, 110] },
    { value: "-0.25%", shade: "#ff8080", multiplier: -0.0025, shortValues: [178, 171, 164, 157, 150], longValues: [143, 136, 129, 122, 115] },
    { value: "-0.5%", shade: "#ff6666", multiplier: -0.005, shortValues: [191, 182, 173, 164, 155], longValues: [146, 137, 128, 119, 110] },
    { value: "-1%", shade: "#ff4d4d", multiplier: -0.01, shortValues: [217, 206, 195, 184, 173], longValues: [162, 151, 140, 129, 118] },
    { value: "-3%", shade: "#ff3333", multiplier: -0.03, shortValues: [320, 303, 286, 269, 252], longValues: [235, 218, 201, 184, 167] },
    { value: "-5%", shade: "#ff1a1a", multiplier: -0.05, shortValues: [424, 402, 380, 358, 336], longValues: [314, 292, 270, 248, 226] },
    { value: "-10%", shade: "#ff0000", multiplier: -0.1, shortValues: [683, 648, 614, 580, 546], longValues: [512, 478, 444, 410, 376] },
    { value: "-20%", shade: "#ce0404", multiplier: -0.2, shortValues: [1200, 1140, 1080, 1020, 960], longValues: [900, 840, 780, 720, 660] },
  ];

  const timeLabels = [
    { time: "10m", shade: "#80e4ff" },
    { time: "30m", shade: "#67d6f9" },
    { time: "1h", shade: "#4fc9f3" },
    { time: "2h", shade: "#39bdeb" },
    { time: "4h", shade: "#28b2e5" },
    { time: "6h", shade: "#1aa6df" },
    { time: "12h", shade: "#0f97d9" },
    { time: "1d", shade: "#087cc2" },
    { time: "3d", shade: "#056fb2" },
    { time: "7d", shade: "#046aac" },
  ];

  const calculatePrice = (multiplier: number): string => {
    if (!currentPrice) return "N/A";
    return (currentPrice * (1 + multiplier)).toFixed(7);
  };

  const visibleTimeFrames = isMobile
    ? showLonger
      ? timeLabels.slice(5, 10) // Show longer time frames on mobile
      : timeLabels.slice(0, 5) // Show shorter time frames on mobile
    : timeLabels; // Show full chart on desktop

  const visibleValues = (row: { shortValues: number[]; longValues: number[] }) =>
    isMobile
      ? showLonger
        ? row.longValues
        : row.shortValues
      : [...row.shortValues, ...row.longValues]; // Concatenate for desktop

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div className="overflow-auto w-full h-full p-2">
      {/* Toggle button for mobile */}
      {isMobile && (
        <div className="flex justify-center mb-2">
          <button
            onClick={() => setShowLonger(!showLonger)}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            {showLonger ? "Show Shorter" : "Show Longer"}
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-fixed border-collapse border border-gray-700 text-white w-full">
          <tbody>
            {/* Positive values */}
            {positiveValues.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  className="border border-gray-700 text-center"
                  style={{ backgroundColor: row.shade, color: "black" }}
                >
                  {row.multiplier ? `$${calculatePrice(row.multiplier)}` : "⬆️"}
                </td>
                {visibleValues(row).map((value: number, colIndex: number) => (
                  <td
                    key={colIndex}
                    className="border border-gray-700 text-center"
                  >
                    {value || ""}
                  </td>
                ))}
              </tr>
            ))}

            {/* Time frame row */}
            <tr>
              <td
                className="border border-gray-700 bg-black text-center text-white"
                style={{ width: "10%" }}
              >
                {currentPrice ? `$${currentPrice.toFixed(7)}` : "Loading..."}
              </td>
              {visibleTimeFrames.map((label, index) => (
                <td
                  key={index}
                  className="border border-gray-700 text-center"
                  style={{ backgroundColor: label.shade }}
                >
                  {label.time}
                </td>
              ))}
            </tr>

            {/* Negative values */}
            {negativeValues.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  className="border border-gray-700 text-center"
                  style={{ backgroundColor: row.shade, color: "black" }}
                >
                  {row.multiplier ? `$${calculatePrice(row.multiplier)}` : "⬇️"}
                </td>
                {visibleValues(row).map((value: number, colIndex: number) => (
                  <td
                    key={colIndex}
                    className="border border-gray-700 text-center"
                  >
                    {value || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OptionsTable;
