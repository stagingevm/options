/**
 * Function to calculate smoothed payouts for movements.
 * @param multiplier Multiplier for the percentage movement (e.g., 20 for 20%).
 * @param maxMultiplier Maximum multiplier (e.g., 80 for 20%).
 * @param maxPayout Maximum payout (e.g., 1200).
 * @param minPayout Minimum payout (e.g., 165).
 * @returns Smoothed payout.
 */
export const calculateSmoothedPayout = (
    multiplier: number,
    maxMultiplier: number,
    maxPayout: number,
    minPayout: number
  ): number => {
    // Base payout using scaling factor
    const scalingFactor = maxPayout / maxMultiplier; // e.g., 1200 / 80 = 15
    const basePayout = multiplier * scalingFactor;
  
    // Baseline adjustment
    const baselineAdjustment =
      minPayout - (minPayout * multiplier) / maxMultiplier;
  
    // Smoothed payout
    return Math.round(basePayout + baselineAdjustment);
  };
  
  // Payout settings for positive and negative movements
  export const positiveMovements = [
    { value: "+20%", multiplier: 80, shade: "#18e582", maxPayout: 1200 },
    { value: "+10%", multiplier: 40, shade: "#28f087" },
    { value: "+5%", multiplier: 20, shade: "#3bfa8f" },
    { value: "+3%", multiplier: 12, shade: "#50ffa4" },
    { value: "+1%", multiplier: 4, shade: "#71ffb8" },
    { value: "+0.5%", multiplier: 2, shade: "#91ffd2" },
    { value: "+0.25%", multiplier: 1, shade: "#c5ffe6", minPayout: 165 },
  ];
  
  export const negativeMovements = [
    { value: "-0.25%", multiplier: 1, shade: "#ff8080", minPayout: 165 },
    { value: "-0.5%", multiplier: 2, shade: "#ff6666" },
    { value: "-1%", multiplier: 4, shade: "#ff4d4d" },
    { value: "-3%", multiplier: 12, shade: "#ff3333" },
    { value: "-5%", multiplier: 20, shade: "#ff1a1a" },
    { value: "-10%", multiplier: 40, shade: "#ff0000" },
    { value: "-20%", multiplier: 80, shade: "#ce0404", maxPayout: 1200 },
  ];
  
  // Calculate payouts for 10-minute column
  export const calculateTenMinutePayouts = () => {
    const maxMultiplier = 80;
    const maxPayout = 1200;
    const minPayout = 165;
  
    // Positive movements
    const positivePayouts = positiveMovements.map((movement) =>
      calculateSmoothedPayout(
        movement.multiplier,
        maxMultiplier,
        maxPayout,
        minPayout
      )
    );
  
    // Negative movements
    const negativePayouts = negativeMovements.map((movement) =>
      calculateSmoothedPayout(
        movement.multiplier,
        maxMultiplier,
        maxPayout,
        minPayout
      )
    );
  
    return { positivePayouts, negativePayouts };
  };
  