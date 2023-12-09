// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// interface AggregatorV3Interface {
//     function latestRoundData() external view returns (uint80 roundId, int answer, uint startedAt, uint updatedAt, uint80 answeredInRound);
// }

contract ChainlinkOracle {
    AggregatorV3Interface internal priceAvaxToUsd;
    AggregatorV3Interface internal priceBtcToUsd;
    AggregatorV3Interface internal priceEthToUsd;
    AggregatorV3Interface internal priceLinkToUsd;
    AggregatorV3Interface internal priceMaticToUsd;

    // Fuji
    constructor() {
        priceAvaxToUsd = AggregatorV3Interface(0x5498BB86BC934c8D34FDA08E81D444153d0D06aD);
        priceBtcToUsd = AggregatorV3Interface(0x31CF013A08c6Ac228C94551d535d5BAfE19c602a);
        priceEthToUsd = AggregatorV3Interface(0x86d67c3D38D2bCeE722E601025C25a575021c6EA);
        priceLinkToUsd = AggregatorV3Interface(0x34C4c526902d88a3Aa98DB8a9b802603EB1E3470);
        priceMaticToUsd = AggregatorV3Interface(0xB0924e98CAFC880ed81F6A4cA63FD61006D1f8A0);
    }

    function getAvaxToUsdAnswer() public view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceAvaxToUsd.latestRoundData();
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

    function getMaticToUsdAnswer() public view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceMaticToUsd.latestRoundData();
        return answer;
    }
}