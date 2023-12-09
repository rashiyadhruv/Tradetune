import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Tool from "./contract.json";
import RenderResult from "next/dist/server/render-result";

export const ToolContext = createContext();

const contractAddress = "";
const contractAbi = Tool.abi;

export const ToolProvider = ({ children }) => {
  const [snipeFund, setSnipeFund] = useState(null);
  const [snipeProfit, setSnipeProfit] = useState(null);
  const [snipeChain, setSnipeChain] = useState("Ethereum");
  const [currentAccount, setCurrentAccount] = useState("");
  
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
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export default ToolContext;
