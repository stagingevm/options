import React from "react";

interface SellerTableProps {
  selectedTokenPrice: number | null; // Accept price as a prop
}

const SellerTable: React.FC<SellerTableProps> = ({ selectedTokenPrice }) => {
  const sellerValues = [
    { value: "+20%", shade: "#18e582", values: [-1200, -1140, -1080, -1020, -960, -900, -840, -780, -720, -660] },
    { value: "+10%", shade: "#28f087", values: [-683, -648, -614, -580, -546, -512, -478, -444, -410, -376] },
    { value: "+5%", shade: "#3bfa8f", values: [-424, -402, -380, -358, -336, -314, -292, -270, -248, -226] },
    { value: "+3%", shade: "#50ffa4", values: [-320, -303, -286, -269, -252, -235, -218, -201, -184, -167] },
    { value: "+1%", shade: "#71ffb8", values: [-217, -206, -195, -184, -173, -162, -151, -140, -129, -118] },
    { value: "+0.5%", shade: "#91ffd2", values: [-191, -182, -173, -164, -155, -146, -137, -128, -119, -110] },
    { value: "+0.25%", shade: "#c5ffe6", values: [-178, -171, -164, -157, -150, -143, -136, -129, -122, -115] },
    { value: "UP", shade: "#c5ffe6", values: [-165, -159, -153, -147, -141, -134, -128, -122, -116, -110] },
    { value: "DOWN", shade: "#ff8080", values: [-165, -159, -153, -147, -141, -134, -128, -122, -116, -110] },
    { value: "-0.25%", shade: "#ff8080", values: [-178, -171, -164, -157, -150, -143, -136, -129, -122, -115] },
    { value: "-0.5%", shade: "#ff6666", values: [-191, -182, -173, -164, -155, -146, -137, -128, -119, -110] },
    { value: "-1%", shade: "#ff4d4d", values: [-217, -206, -195, -184, -173, -162, -151, -140, -129, -118] },
    { value: "-3%", shade: "#ff3333", values: [-320, -303, -286, -269, -252, -235, -218, -201, -184, -167] },
    { value: "-5%", shade: "#ff1a1a", values: [-424, -402, -380, -358, -336, -314, -292, -270, -248, -226] },
    { value: "-10%", shade: "#ff0000", values: [-683, -648, -614, -580, -546, -512, -478, -444, -410, -376] },
    { value: "-20%", shade: "#ce0404", values: [-1200, -1140, -1080, -1020, -960, -900, -840, -780, -720, -660] },
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
          {sellerValues
            .slice(0, sellerValues.findIndex((row) => row.value === "DOWN")) // Include values above DOWN
            .map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                <td
                  className="border border-gray-700 text-black text-center"
                  style={{ backgroundColor: row.shade, width: "10%" }}
                >
                  {row.value}
                </td>
                {timeLabels.map((_, colIndex) => (
                  <td
                    key={`value-${colIndex}`}
                    className="border border-gray-700 text-center"
                    style={{ backgroundColor: "transparent" }}
                  >
                    {row.values[colIndex]}
                  </td>
                ))}
              </tr>
            ))}

          {/* Time labels */}
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
                key={`time-${index}`}
                className="border border-gray-700 text-center"
                style={{ backgroundColor: label.shade }}
              >
                <span style={{ color: "#000" }}>{label.time}</span>
              </td>
            ))}
          </tr>

          {/* Render negative values */}
          {sellerValues
            .slice(sellerValues.findIndex((row) => row.value === "DOWN")) // Include values below UP
            .map((row, rowIndex) => (
              <tr key={`row-neg-${rowIndex}`}>
                <td
                  className="border border-gray-700 text-black text-center"
                  style={{ backgroundColor: row.shade, width: "10%" }}
                >
                  {row.value}
                </td>
                {timeLabels.map((_, colIndex) => (
                  <td
                    key={`neg-value-${colIndex}`}
                    className="border border-gray-700 text-center"
                    style={{ backgroundColor: "transparent" }}
                  >
                    {row.values[colIndex]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerTable;
