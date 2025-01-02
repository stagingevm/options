import { useState } from "react";
import { ethers } from "ethers";

interface NavbarProps {
  setView: (view: "OBuyer" | "OSeller") => void;
}

function Navbar({ setView }: NavbarProps) {
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
      style={{ borderBottom: "2px solid #18e582" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* View Switcher */}
        <div className="flex space-x-4">
          <button
            className="text-white hover:text-gray-300"
            onClick={() => setView("OBuyer")}
          >
            OBuyer ODDS
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => setView("OSeller")}
          >
           OSeller ODDS
          </button>
        </div>

        {/* Wallet Button */}
        <div>
          <button
            onClick={walletAddress ? disconnectWallet : connectWallet}
            className="px-4 py-2 rounded-full font-bold text-black bg-[#18e582] hover:bg-[#16cc72] border border-[#18e582] transition duration-300"
          >
            {walletAddress
              ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
                  walletAddress.length - 4
                )}`
              : "Connect"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
