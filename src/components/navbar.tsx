import { useState } from "react";
import { ethers } from "ethers";

function Navbar() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is required to connect a wallet!");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <nav
      className="w-full bg-black text-white shadow-md sticky top-0 z-50"
      style={{ borderBottom: "2px solid #18e582" }} // Add green bottom border
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xxl font-bold" style={{ color: "#18e582" }}>
          
        </div>

        {/* Wallet Button */}
        <div>
          <a
            onClick={walletAddress ? disconnectWallet : connectWallet}
            className="relative inline-block text-center cursor-pointer"
          >
            <span className="text-black">
              {walletAddress
                ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
                    walletAddress.length - 4
                  )}`
                : "Connect"}
            </span>
            <div className="liquid"></div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
