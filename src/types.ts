// src/types.ts

export interface PriceData {
  price: string; // Assuming price is a string representing a large integer
  expo: number;  // Exponent to adjust the price
}

export interface PriceUpdate {
  id: string;
  priceData: PriceData;
}
