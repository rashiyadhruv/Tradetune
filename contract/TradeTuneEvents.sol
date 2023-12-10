// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TradeTuneEvents  {
    address owner;
    mapping(address => uint256) public stoploss;

    constructor() {
        owner = msg.sender;
    }

    // Event emitted when the tokens are transferred to an account on another chain.
    event TokensTransferred(
        address receiver, // The address of the receiver on the destination chain.
        address token, // The token address that was transferred.
        uint256 tokenAmount // The token amount that was transferred.
    );

    event SnipeInitialized(
        address indexed recipient,
        string indexed destChain,
        uint256 blockNumber,
        uint256 amount
    );

    event SnipeExecuted(
        address indexed recipient,
        string indexed destChain,
        uint256 blockNumber,
        uint256 sTokenAmt,
        uint256 vTokenAmt
    );

    // Event emitted when a message is sent to another chain.
    event MessageSent(
        uint64 indexed destinationChainSelector, // The chain selector of the destination chain.
        address receiver // The address of the receiver on the destination chain.
    );

    // Event emitted when a message is received from another chain.
    event MessageReceived(
        uint64 indexed sourceChainSelector, // The chain selector of the source chain.
        address sender // The address of the sender from the source chain.
    );

    function addStopLoss(uint256 _stopLoss) public {
        stoploss[msg.sender] = _stopLoss;
    }
}