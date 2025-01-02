import React from "react";

interface OptionsTableProps {
  selectedTokenPrice: number | null; // Current price of the token
}

const OptionsTable: React.FC<OptionsTableProps> = ({ selectedTokenPrice }) => {
  const positiveValues = [
    { value: "+20%", shade: "#18e582" },
    { value: "+10%", shade: "#28f087" },
    { value: "+5%", shade: "#3bfa8f" },
    { value: "+3%", shade: "#50ffa4" },
    { value: "+1%", shade: "#71ffb8" },
    { value: "+0.5%", shade: "#91ffd2" },
    { value: "+0.25%", shade: "#c5ffe6", },
    { value: "UP", shade: "#c5ffe6", values: [165, 159, 153, 147, 141, 134, 128, 122, 116, 110]  },
  ];

  const negativeValues = [
    { value: "DOWN", shade: "#ff8080", values: [165, 159, 153, 147, 141, 134, 128, 122, 116, 110]  },
    { value: "-0.25%", shade: "#ff8080"},
    { value: "-0.5%", shade: "#ff6666" },
    { value: "-1%", shade: "#ff4d4d" },
    { value: "-3%", shade: "#ff3333" },
    { value: "-5%", shade: "#ff1a1a" },
    { value: "-10%", shade: "#ff0000" },
    { value: "-20%", shade: "#ce0404" },
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

  return (
    <div className="overflow-auto w-full h-full p-2">
      <table className="table-fixed border-collapse border border-gray-700 text-white w-full h-full">
        <tbody>
          {/* Render positive values */}
          {positiveValues.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className="border border-gray-700 text-black text-center"
                style={{ backgroundColor: row.shade, width: "10%" }}
              >
                {row.value}
              </td>
              {timeLabels.map((_, colIndex) => (
                <td
                  key={colIndex}
                  className="border border-gray-700 text-center"
                  style={{ backgroundColor: "transparent" }}
                >
                  {row.values && row.values[colIndex] !== undefined
                    ? `+${row.values[colIndex]}`
                    : ""}
                </td>
              ))}
            </tr>
          ))}

          {/* Middle row for current price and time labels */}
          <tr>
            <td
              className="border border-gray-700 bg-black text-white text-center"
              style={{ width: "10%" }}
            >
              {selectedTokenPrice !== null
                ? `$${selectedTokenPrice.toFixed(2)}`
                : "Loading..."}
            </td>
            {timeLabels.map((label, index) => (
              <td
                key={index}
                className="border border-gray-700 text-center"
                style={{ backgroundColor: label.shade }}
              >
                <span style={{ color: "#000" }}>{label.time}</span>
              </td>
            ))}
          </tr>

          {/* Render negative values */}
          {negativeValues.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className="border border-gray-700 text-black text-center"
                style={{ backgroundColor: row.shade, width: "10%" }}
              >
                {row.value}
              </td>
              {timeLabels.map((_, colIndex) => (
                <td
                  key={colIndex}
                  className="border border-gray-700 text-center"
                  style={{ backgroundColor: "transparent" }}
                >
                  {row.values && row.values[colIndex] !== undefined
                    ? `+${row.values[colIndex]}`
                    : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptionsTable;
