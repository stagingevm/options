// optionsPricing.ts

/**
 * Implementation of the error function (erf)
 * Source: Abramowitz and Stegun approximation (1964)
 * @param x Input value
 * @returns Approximation of the error function
 */
const erf = (x: number): number => {
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
  
    // Constants for the approximation
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
  
    // Abramowitz and Stegun approximation formula
    const t = 1 / (1 + p * x);
    const y =
      1 -
      (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) *
        t *
        Math.exp(-x * x);
  
    return sign * y;
  };
  
  /**
   * Implementation of the cumulative distribution function (CDF) for a standard normal distribution.
   * @param x Input value
   * @returns The probability that a standard normal random variable is less than or equal to x
   */
  export const normalCDF = (x: number): number => {
    return 0.5 * (1 + erf(x / Math.sqrt(2)));
  };
  
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
  
  /**
   * Calculates the option price using the Black-Scholes model.
   * @param currentPrice Current price of the token
   * @param strikePrice Strike price (price target)
   * @param timeToMaturity Time to maturity in years
   * @param volatility Annualized volatility (e.g., 0.5 for 50%)
   * @param riskFreeRate Risk-free interest rate (e.g., 0.01 for 1%)
   * @returns Option price (premium)
   */
  export const calculateOptionPrice = (
    currentPrice: number,
    strikePrice: number,
    timeToMaturity: number,
    volatility: number,
    riskFreeRate: number
  ): number => {
    const d1 =
      (Math.log(currentPrice / strikePrice) +
        (riskFreeRate + (volatility ** 2) / 2) * timeToMaturity) /
      (volatility * Math.sqrt(timeToMaturity));
  
    const d2 = d1 - volatility * Math.sqrt(timeToMaturity);
  
    // Black-Scholes call price formula
    const callPrice =
      currentPrice * normalCDF(d1) -
      strikePrice * Math.exp(-riskFreeRate * timeToMaturity) * normalCDF(d2);
  
    return callPrice;
  };
  