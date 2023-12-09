// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract ChainlinkOracle {
    AggregatorV3Interface internal priceCeloToUsd;
    AggregatorV3Interface internal priceBtcToUsd;
    AggregatorV3Interface internal priceEthToUsd;
    AggregatorV3Interface internal priceLinkToUsd;

    // Celo
    constructor() {
        priceCeloToUsd = AggregatorV3Interface(0x022F9dCC73C5Fb43F2b4eF2EF9ad3eDD1D853946);
        priceBtcToUsd = AggregatorV3Interface(0xC0f1567a0037383068B1b269A81B07e76f99710c);
        priceEthToUsd = AggregatorV3Interface(0x7b298DA61482cC1b0596eFdb1dAf02C246352cD8);
        priceLinkToUsd = AggregatorV3Interface(0x9E4e3D77b0302e93dA68633Ad370E3e8C9D84eea);
    }

    function getCeloToUsdAnswer() public view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceCeloToUsd.latestRoundData();
        return answer;
    }

    function getBtcToUsdAnswer() public view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceBtcToUsd.latestRoundData();
        return answer;
    }

    function getEthToUsdAnswer() public view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceEthToUsd.latestRoundData();
        return answer;
    }

    function getLinkToUsdAnswer() public view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceLinkToUsd.latestRoundData();
        return answer;
    }

    function getAllPrices() public view returns (int[] memory) {
        int[] memory prices = new int[](4);

        int celo = getCeloToUsdAnswer();
        int btc = getBtcToUsdAnswer();
        int eth = getEthToUsdAnswer();
        int link = getLinkToUsdAnswer();

        prices[0] = celo;
        prices[1] = btc;
        prices[2] = eth;
        prices[3] = link;

        return prices;
    }
}