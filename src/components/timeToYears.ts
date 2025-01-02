/**
 * Converts a time label (e.g., "10m", "1h", "1d") into years.
 * @param timeLabel Time label as a string
 * @returns Time in years
 */
export const timeLabelToYears = (timeLabel: string): number => {
    const value = parseFloat(timeLabel.replace(/[a-z]/gi, ""));
    if (timeLabel.includes("m")) return value / (365 * 24 * 60); // Minutes to years
    if (timeLabel.includes("h")) return value / (365 * 24); // Hours to years
    if (timeLabel.includes("d")) return value / 365; // Days to years
    return 0; // Default case
  };
  