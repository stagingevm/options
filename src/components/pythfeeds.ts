import { PriceServiceConnection } from "@pythnetwork/price-service-client";

// URL of the Hermes service (Stable Hermes instance)
const connection = new PriceServiceConnection("https://hermes.pyth.network");

// Define the price feed mappings
const pythFeeds: { [key: string]: string } = {
  btc: "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
  eth: "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
  op: "0x385f64d993f7b77d8182ed5003d97c60aa3361f3cecfe711544d2d59165e9bdf",
  arb: "0x3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5",
  pol: "0xffd11c5a1cfd42f80afb2df4d9f264c15f956d68153335374ec10722edd70472",
  zk: "0xcc03dc09298fb447e0bf9afdb760d5b24340fd2167fd33d8967dd8f9a141a2e8",
  pengu: "0xbed3097008b9b5e3c93bec20be79cb43986b85a996475589351a21e67bae9b61",
  uni: "0x78d185a741d07edb3412b09008b7c5cfb9bbbd7d568bf00ba737b456ba171501",
  ape: "0x15add95022ae13563a11992e727c91bdb6b55bc183d9d747436c80a483d8c864",
  apt: "0x03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5",
  doge: "0xdcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c",
  ada: "0x2a01deaec9e51a579277b34b122399984d0bbf57e2458a7e42fecd2829867a0d",
  bnb: "0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f",
  shib: "0xf0d57deca57b3da2fe63a493f4c25925fdfd8edf834b20f93e1f84dbd1504d4a",
  snx: "0x39d020f60982ed892abbcd4a06a276a9f9b7bfbce003204c110b6e488f502da3",
  hype: "0x4279e31cc369bbcc2faf022b382b080e32a8e689ff20fbc530d2a603eb6cd98b",
  xlm: "0xb7a8eba68a997cd0210c2e1e4ee811ad2d174b3611c22d9ebf16f4cb7e9ba850",
  xrp: "0xec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8",
  usdt: "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b",
  wif: "0x4ca4beeca86f0d164160323817a4e42b10010a724c2217c6ee41b54cd4cc61fc",
  xmr: "0x46b8cc9347f04391764a0361e0b17c3ba394b001e7c304f7650f6376e37c321d",
  sol: "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
  pepe: "0xd69731a2e74ac1ce884fc3890f7ee324b6deb66147055249568869ed700882e4",
  goat: "0xf7731dc812590214d3eb4343bfb13d1b4cfa9b1d4e020644b5d5d8e07d60c66c",
  mog: "0x17894b9fff49cd07efeab94a0d02db16f158efe04e0dee1db6af5f069082ce83",
  moodeng: "0xffff73128917a90950cd0473fd2551d7cd274fd5a6cc45641881bbcc6ee73417",
  me: "0x91519e3e48571e1232a85a938e714da19fe5ce05107f3eebb8a870b2e8020169",
  link: "0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221",
  ai16z: "0x2551eca7784671173def2c41e6f3e51e11cd87494863f1d208fdd8c64a1f85ae",
  chillguy: "0xd98869edbb4a0d2803dc1054405bceb1ddc546bfc9a3d0e31bb0e0448e6181e1",
};

// Fetch the latest prices for all feeds in pythFeeds
export async function fetchLatestPrices() {
  try {
    const currentPrices = await connection.getLatestPriceFeeds(Object.values(pythFeeds));
    return currentPrices;
  } catch (error) {
    console.error("Error fetching prices:", error);
    throw error;
  }
}

// Subscribe to real-time updates for all feeds in pythFeeds
export function subscribeToPriceUpdates(callback: (priceFeed: any) => void) {
  connection.subscribePriceFeedUpdates(Object.values(pythFeeds), (priceFeed) => {
    callback(priceFeed);
  });

  return () => connection.closeWebSocket(); // Return a cleanup function
}

export default pythFeeds;
