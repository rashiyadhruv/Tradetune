import { Service, Inject } from 'typedi';
import config from '../../config';
import { EPNSChannel } from '../../helpers/epnschannel';
import { Logger } from 'winston';
import { request, gql } from 'graphql-request';

// Import the Push SDK
import { PushAPI } from "@pushprotocol/restapi";
 
import { ethers } from "ethers";
import tradeTune from "./tradeTune.json";

import 'dotenv/config'
require('dotenv').config()

// Smart contract deployed Chain (Network)
const NETWORK_TO_MONITOR = "https://eth-goerli.g.alchemy.com/v2/FxaFNskETaLCTUTk3oCJR144VzTjKxsE"; 
const tradeTuneAbi = tradeTune.abi;
const tradeTuneAddress = "0x46b37B93376074F4e9ae6834A3FA8A7a41f946a3" // edit address

@Service()
export default class TradeTuneChannel extends EPNSChannel {
  constructor(@Inject('logger') public logger: Logger) {
    super(logger, {
      networkToMonitor: NETWORK_TO_MONITOR,
      dirname: __dirname,
      name: 'Trade Tune',
      url: 'https://arv-bitcloud.vercel.app/',
      useOffChain: true,
    });
  }

  async startEventListener(simulate) {
        this.logInfo("EventListener function started!")
        
        const { contract } = await this.initializeUser();
    
        contract.on("TokensTransferred", async (messageId, destinationChainSelector, receiver, token, tokenAmount, feeToken, fees, event) => {
            // call functions in channel
            this.logInfo("Calling ---> TokensTransferred()");
    
            this.TokensTransferredNotif(messageId, destinationChainSelector, receiver, token, tokenAmount, feeToken, fees, event, simulate);    
        });
    
        contract.on("SnipeInitialized", async (recipient, destChain, blockNumber, stableToken,amount, event) => {
            // call functions in channel
            this.logInfo("Calling ---> SnipeInitialized()"); 
            
            this.SnipeInitializedNotif(recipient, destChain, blockNumber, stableToken,amount, event, simulate)
        });
    
        contract.on("SnipeExecuted", async (recipient, destChain, blockNumber, sTokenAmt, vTokenAmt, stableToken, volatileToken, event) => {
            // call functions in channel
            this.logInfo("Calling ---> SnipeExecuted()");  
            
            this.SnipeExecutedNotif(recipient, destChain, blockNumber, sTokenAmt, vTokenAmt, stableToken, volatileToken, event, simulate);
        });
    
        contract.on("MessageSent", async (messageId, destinationChainSelector, receiver, text, feeToken, fees, event, simulate) => {
            // call functions in channel
            this.logInfo("Calling ---> MessageSent()");   
            
            this.MessageSentNotif(messageId, destinationChainSelector, receiver, text, feeToken, fees, event, simulate);
        });
    
        contract.on("MessageReceived", async (messageId, sourceChainSelector, sender, text, event, simulate) => {
            // call functions in channel
            this.logInfo("Calling ---> MessageReceived()");  
            
            this.MessageReceivedNotif(messageId, sourceChainSelector, sender, text, event, simulate);
        });   
  }
  
  // This function is triggered with slider settings
  async TokensTransferredNotif(messageId, destinationChainSelector, receiver, token, tokenAmount, feeToken, fees, event, simulate) {
    try {
      this.logInfo("Getting events ---> investmentNotif");

        const title = `FUNDS CREDITED !!`;
        const payloadMsg = `Hi! You have just received ${tokenAmount} amount of ${token}.`;
        const payloadTitle = `FUNDS CREDITED TO YOUR WALLET!!`;
        const message = `Hi! You have just received ${tokenAmount} amount of ${token}.`;
        const notificationType = 3;
        await this.sendNotification({
          recipient: receiver,
          title,
          message,
          payloadMsg,
          payloadTitle,
          cta: `https://www.google.com/`,
          notificationType,
          simulate,
          image: null,
      });

    }catch (error) {
      this.logInfo("Error caused in the TokensTransferredNotif function", error);
    }
  }
  
  // This function is triggered with slider settings
  async SnipeInitializedNotif(recipient, destChain, blockNumber, stableToken, amount, event, simulate) {
    try {
      this.logInfo("Getting events ---> investmentNotif");

        const title = `SNIPE INITIALIZED !!`;
        const payloadMsg = `Snipe Bot has been initialized.`;
        const payloadTitle = `SNIPE INITIALIZED !!`;
        const message = `Snipe Bot has been initialized. TOKEN: ${stableToken}, DESTINATION CHAIN: ${destChain}, AMOUNT: ${amount}, BLOCK NO.:${blockNumber}.`;
        const notificationType = 3;
        await this.sendNotification({
          recipient: recipient,
          title,
          message,
          payloadMsg,
          payloadTitle,
          cta: `https://www.google.com/`,
          notificationType,
          simulate,
          image: null,
      });

    }catch (error) {
      this.logInfo("Error caused in the SnipeInitializedNotif function", error);
    }
  }
  
  // This function is triggered with slider settings
  async SnipeExecutedNotif(recipient, destChain, blockNumber, sTokenAmt, vTokenAmt, stableToken, volatileToken, event, simulate) {
    try {
      this.logInfo("Getting events ---> investmentNotif");

      const title = `SNIPE Executed !!`;
      const payloadMsg = `Snipe Bot has been initialized.`;
      const payloadTitle = `SNIPE INITIALIZED !!`;
      const message = `Snipe Bot has been initialized. TOKEN 1: ${stableToken}, AMOUNT: ${sTokenAmt}, TOKEN 2: ${volatileToken}, AMOUNT: ${vTokenAmt}, DESTINATION CHAIN: ${destChain}, AMOUNT: ${amount}, BLOCK NO.:${blockNumber}.`;
      const notificationType = 3;
        await this.sendNotification({
          recipient: recipient,
          title,
          message,
          payloadMsg,
          payloadTitle,
          cta: `https://www.google.com/`,
          notificationType,
          simulate,
          image: null,
      });

    }catch (error) {
      this.logInfo("Error caused in the SnipeExecutedNotif function", error);
    }
  }
  
  // This function is triggered with slider settings
  async MessageSentNotif(messageId, destinationChainSelector, receiver, text, feeToken, fees, event, simulate) {
    try {
      this.logInfo("Getting events ---> investmentNotif");

      /*
        uint256 amountIn;
        uint256 amountOutMin;
        address[] tokens;
        address recipient;
        uint256 deadline;
      */

        const title = `${messageId}. CCIP swap executed !!`;
        const payloadMsg = `Hi! Your CCIP is been sent to Sepolia( ${destinationChainSelector} ).`;
        const payloadTitle = `${messageId}. CCIP swap executed !!`;
        const message = `Hi! Your CCIP is been sent to Sepolia( ${destinationChainSelector} ). TOKEN 1: ${text.tokens[0]}, AMOUNT IN: ${text.amountIn}, TOKEN 2: ${text.tokens[1]}, AMOUNT OUT: ${text.amountOutMin}, `;
        const notificationType = 3;

        await this.sendNotification({
          recipient: text.recipient,
          title,
          message,
          payloadMsg,
          payloadTitle,
          cta: `https://www.digible.io/`,
          notificationType,
          simulate,
          image: null,
      });

    }catch (error) {
      this.logInfo("Error caused in the MessageSentNotif function", error);
    }
  }
  
  // This function is triggered with slider settings
  async MessageReceivedNotif(messageId, sourceChainSelector, sender, text, event, simulate) {
    try {
      this.logInfo("Getting events ---> investmentNotif");

        const title = `${messageId}. CCIP Message Received !!`;
        const payloadMsg = `Hi! Your CCIP message has received in Sepolia.`;
        const payloadTitle = `${messageId}. CCIP swap executed !!`;
        const message = `Hi! Your CCIP is been sent to Sepolia. TOKEN 1: ${text.tokens[0]}, AMOUNT IN: ${text.amountIn}, TOKEN 2: ${text.tokens[1]}, AMOUNT OUT: ${text.amountOutMin}, `;
        const notificationType = 3;

        await this.sendNotification({
          recipient: text.recipient,
          title,
          message,
          payloadMsg,
          payloadTitle,
          cta: `https://www.google.com/`,
          notificationType,
          simulate,
          image: null,
      });

    }catch (error) {
      this.logInfo("Error caused in the MessageReceivedNotif function", error);
    }
  }

  async initializeUser() {
    const provider = new ethers.providers.WebSocketProvider(process.env.ALCHEMY_WEBSOCKET);
    const contract = new ethers.Contract(tradeTuneAddress, tradeTuneAbi, provider);

    const signer = new ethers.Wallet(
      "79d99e77724cdbc0e41c46f5a4e62ece4cd0d97e0b184370fa7dfc347920019e", // Private key of the channel owner (or channel creation wallet)
        provider
    );

    return { contract };
  }
}