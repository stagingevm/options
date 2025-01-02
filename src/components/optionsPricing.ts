export interface OptionsPricingParams {
    movement: number; // Percentage movement, e.g., 0.25 for 0.25%
    timeframe: number; // Time in minutes, e.g., 10 for 10m
    base10MinPayout: number; // Payout for 10 minutes (base case)
    base7DayPayout: number; // Payout for 7 days (base case)
  }
  
  // Function to calculate smoothed payouts based on movement and timeframe
  export const calculatePayout = ({
    movement,
    timeframe,
    base10MinPayout,
    base7DayPayout,
  }: OptionsPricingParams): number => {
    const maxTimeframe = 7 * 24 * 60; // 7 days in minutes
    const minTimeframe = 10; // Base 10-minute timeframe
  
    // Calculate time smoothing factor
    const timeFactor = Math.pow((maxTimeframe - timeframe) / (maxTimeframe - minTimeframe), 0.5);
  
    // Interpolate payout based on time and movement
    const payout = base10MinPayout + (base7DayPayout - base10MinPayout) * timeFactor;
  
    // Scale payout by movement
    return payout * (movement / 0.25);
  };
  
  // Predefined payout data for positive and negative movements
  export const predefinedMovements = [
    { movement: 20, base10MinPayout: 1200 },
    { movement: 10, base10MinPayout: 683 },
    { movement: 5, base10MinPayout: 424 },
    { movement: 3, base10MinPayout: 320 },
    { movement: 1, base10MinPayout: 217 },
    { movement: 0.5, base10MinPayout: 191 },
    { movement: 0.25, base10MinPayout: 178 },
  ];
  
  // Timeframes in minutes
  export const predefinedTimeframes = [
    { label: "10m", minutes: 10 },
    { label: "30m", minutes: 30 },
    { label: "1h", minutes: 60 },
    { label: "2h", minutes: 120 },
    { label: "4h", minutes: 240 },
    { label: "6h", minutes: 360 },
    { label: "12h", minutes: 720 },
    { label: "1d", minutes: 1440 },
    { label: "3d", minutes: 4320 },
    { label: "7d", minutes: 10080 },
  ];
  
  // Function to generate the full payout matrix
  export const generatePayoutMatrix = (
    base10MinPayout: number,
    base7DayPayout: number
  ): { movement: number; payouts: number[] }[] => {
    return predefinedMovements.map((movementData) => {
      const payouts = predefinedTimeframes.map((timeframe) =>
        calculatePayout({
          movement: movementData.movement,
          timeframe: timeframe.minutes,
          base10MinPayout: movementData.base10MinPayout,
          base7DayPayout,
        })
      );
      return {
        movement: movementData.movement,
        payouts,
      };
    });
  };
  
  // Example usage
  const payoutMatrix = generatePayoutMatrix(165, 110);
  console.log(payoutMatrix);
  