import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Tool from "./contract.json";
import RenderResult from "next/dist/server/render-result";

import ERC20 from "./ERC20.json";
import contract from "./contract.json";

export const ToolContext = createContext();

const contractAddress = "0x34904613Dfbf8a4a6740DA9a8e2d58b55E5DE90f";
const contractAbi = contract.abi;
const linkErc20ContractAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
const erc20Abi = ERC20.abi;

const addresses = {
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // decimal - 6
  USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // decimal - 6
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // decimal - 18
  factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  recipient: "0xf11b2fc4f28150517af11c2c456cbe75e976f663", // contract address
};

export const ToolProvider = ({ children }) => {
  const [snipeFund, setSnipeFund] = useState(0);
  const [snipeProfit, setSnipeProfit] = useState(0);
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

  const approveToken = async () => {
    console.log("Approve funtion triggered")
    let userAddress;
    try {
      if (window.ethereum) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
  
        const contract = new ethers.Contract(
          linkErc20ContractAddress, // LINK
          erc20Abi,
          signer
        );
  
        if (window.ethereum.isConnected()) {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          console.log(accounts[0]);
          userAddress = accounts[0];
        }
  
        const txRes = await contract.approve(contractAddress, ethers.utils.parseEther(snipeFund), {gasLimit: 500000})
  
        await txRes.wait(1);
  
        console.log("Approve Token: ", txRes);
  
        return true;
      }
    } catch (error) {
      console.log("Approve Token Error🔴: ", error);
      alert("Approve Token Error!!");
    }
  }

  const initiateSniper = async () => {
    let userAddress;
    try {
      if (window.ethereum) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
  
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
  
        if (window.ethereum.isConnected()) {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          console.log(accounts[0]);
          userAddress = accounts[0];
        }
  
        const parsedFund = snipeFund && ethers.utils.parseEther(snipeFund);
        console.log("🟢🟢🟢Parsed Fund: ", parsedFund);
  
        const txRes = await contract.initializeSniper(
          snipeChain,
          linkErc20ContractAddress,
          parsedFund,
          snipeProfit,
          { gasLimit: 500000000 }
        );
  
        await txRes.wait();
  
        console.log("Initiate Txn: ", txRes);
  
        return true;
      }
    } catch (error) {
      console.log("Initiate Sniper Error🔴: ", error);
      alert("Initiate Sniper Error!!");
    }
    
  };

  const snipe = async (
    stableToken = "WETH",
    buyAmount,
    sellTimeInMinutes,
    accountAddress
  ) => {
    const addresses = {
      USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // decimal - 6
      USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // decimal - 6
      WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // decimal - 18
      factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
      router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      recipient: "0xf11b2fc4f28150517af11c2c456cbe75e976f663", // contract address
    };
  
    const ERC20Abi = [
      "function balanceOf(address owner) view returns (uint balance)",
    ];
  
    const mnemonic =
      "sister length evidence misery found inspire loud apple steak flavor under vehicle"; // Arv dev
  
    const provider = new ethers.WebSocketProvider(
      // "Infura websocket url to mainnet"
      "wss://polygon-mumbai.g.alchemy.com/v2/jPp5II90BUILENlH5dGYkQMMKndhuOGd"
    );
  
    const wallet = await ethers.Wallet.fromPhrase(mnemonic);
    console.log("Wallet: ", wallet);
    const account = wallet.connect(provider);
  
    const factory = new ethers.Contract(
      addresses.factory,
      [
        "event PairCreated(address indexed token0, address indexed token1, address pair, uint)",
      ],
      account
    );
  
    const ERC20Contract = new ethers.Contract(
      addresses.WETH, // user selected
      ERC20Abi,
      provider
    );
  
    const router = new ethers.Contract(
      addresses.router,
      [
        "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
        "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)",
      ],
      account
    );
  
    factory.on("PairCreated", async (token0, token1, pairAddress) => {
      console.log(`
          New pair detected
          =================
          token0: ${token0}
          token1: ${token1}
          pairAddress: ${pairAddress}
        `);
  
      //The quote currency needs to be WETH (we will pay with WETH)
      let tokenIn, tokenOut;
      if (token0 === addresses.WETH) {
        // addresses.stableToken
        tokenIn = token0;
        tokenOut = token1;
      }
  
      if (token1 == addresses.WETH) {
        // addresses.stableToken
        tokenIn = token1;
        tokenOut = token0;
      }
  
      //The quote currency is not WETH
      if (typeof tokenIn === "undefined") {
        return;
      }
  
      let initialStableCoinBalance = await ERC20Contract.getBalance(
        accountAddress
      );
      initialStableCoinBalance = Number(initialStableCoinBalance);
  
      //We buy for 0.1 ETH of the new token
      const amountIn = ethers.utils.parseUnits(buyAmount, "ether"); // ethers - 18 decimal
      const amounts = await router.getAmountsOut(amountIn, [tokenIn, tokenOut]);
      //Our execution price will be a bit different, we need some flexbility
      const amountOutMin = amounts[1].sub(amounts[1].div(10));
      console.log(`
          Buying new token
          =================
          tokenIn: ${amountIn.toString()} ${tokenIn} (${stableToken})
          tokenOut: ${amountOutMin.toString()} ${tokenOut}
        `);
  
      const tx = await router.swapExactTokensForTokens(
        amountIn,
        amountOutMin,
        [tokenIn, tokenOut],
        addresses.recipient,
        Date.now() + 1000 * 60 * 10 // 10 minutes
      );
  
      const receipt = await tx.wait();
      console.log("Transaction receipt");
      console.log(receipt);
  
      const newStableCoinBalance = await ERC20Contract.getBalance(accountAddress);
      const newVolatileCoinBalance = await ERC20Contract.getBalance(
        accountAddress
      );
  
      // if (
      //   Number(newStableCoinBalance) == initialStableCoinBalance - amountIn &&
      //   Number(newVolatileCoinBalance) > 0
      // ) {
      //   setTimeout(() => {
      //     console.log("Checking if the new token is in the pair");
      //   }, sellTimeInMinutes * 60 * 1000);
      // }
    });
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
        initiateSniper,
        approveToken,
        snipe
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export default ToolContext;
