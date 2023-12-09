import React, { createContext, useState, useEffect } from "react";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";
import Tool from "./contract.json";
import RenderResult from "next/dist/server/render-result";

export const ToolContext = createContext();

const contractAddress = "";
const contractAbi = Tool.abi;

export const ToolProvider = ({ children }) => {
  const [snipeFund, setSnipeFund] = useState(null);
  const [snipeProfit, setSnipeProfit] = useState(null);
  const [snipeChain, setSnipeChain] = useState("Ethereum");
  const [stoplossPercentLow, setStoplossPercentLow] = useState(null);
  const [stoplossPercentToken, setStoplossPercentToken] = useState(null);
  const [currentAccount, setCurrentAccount] = useState("");
  const [userOwnedTokens, setUserOwnedTokens] = useState([
    "ETH",
    "BNB",
    "FIL",
    "ADA",
    "DOT",
    "SOL",
    "LUNA",
    "AVAX",
    "UNI",
    "LINK",
    "MATIC",
    "XRP",
    "DOGE",
  ]);
  const [watchListTokens, setWatchListTokens] = useState([
    "SAND",
    "ANKR",
    "RLC",
    "LRC",
    "BAND",
    "OCEAN",
    "CVC",
    "STORJ",
    "SKL",
    "LIT",
    "BOND",
    "TRB",
    "ANT",
    "MLN",
    "DNT",
    "REP",
  ]);
  useEffect(() => {
    (async () => {})();
  }, []);

  //wallet

  const checkIfWalletIsConnect = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");
    // Fetch all the eth accounts
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
      return true;
    } else {
      console.log("No accounts found");
      return false;
    }
  };

  // Connect wallet
  const connectWallet = async () => {
    checkIfWalletIsConnect();
    if (!window.ethereum) return alert("Please install MetaMask.");
    // Fetch all the eth accounts
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    // Connecting account if exists
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log("No accounts found");
    }
  };

  return (
    <ToolContext.Provider
      value={{
        connectWallet,
        checkIfWalletIsConnect,
        currentAccount,
        snipeFund,
        setSnipeFund,
        snipeProfit,
        setSnipeProfit,
        snipeChain,
        setSnipeChain,
        userOwnedTokens,
        setUserOwnedTokens,
        watchListTokens,
        setWatchListTokens,
        stoplossPercentLow,
        setStoplossPercentLow,
        stoplossPercentToken,
        setStoplossPercentToken,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export default ToolContext;
