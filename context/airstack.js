import { init } from "@airstack/airstack-react";
import { fetchQuery } from "@airstack/airstack-react";
function delay(t, data) {
  return new Promise((resolve) => {
    setTimeout(null, 200);
  });
}
export const query1 = async () => {
  init("1361c31fee7c84ba39a8bcd30ff8cd666");
  function delay(t, data) {
    return new Promise((resolve) => {
      setTimeout(resolve.bind(null, data), t);
    });
  }
  let query1 = `
query MyQuery {
  Ethereum: TokenTransfers(
    input: {filter: {formattedAmount: {_gt: 10000000}}, blockchain: ethereum, limit: 20}
  ) {
    TokenTransfer {
      from {
        identity
        socials {
          profileName
          profileDisplayName
          profileBio
          profileImage
        }
      }
      to {
        identity
        socials {
          profileName
          profileDisplayName
          profileBio
          profileImage
        }
      }
      token {
        name
        address
      }
      formattedAmount
    }
  }
  Polygon: TokenTransfers(
    input: {filter: {formattedAmount: {_gt: 10000000}}, blockchain: polygon, limit: 20}
  ) {
    TokenTransfer {
      from {
        identity
        socials {
          profileName
          profileDisplayName
          profileBio
          profileImage
        }
      }
      to {
        identity
        socials {
          profileName
          profileDisplayName
          profileBio
          profileImage
        }
      }
      token {
        name
        address
      }
      formattedAmount
    }
  }
  Base: TokenTransfers(
    input: {filter: {formattedAmount: {_gt: 10000000}}, blockchain: base, limit: 20}
  ) {
    TokenTransfer {
      from {
        identity
        socials {
          profileName
          profileDisplayName
          profileBio
          profileImage
        }
      }
      to {
        identity
        socials {
          profileName
          profileDisplayName
          profileBio
          profileImage
        }
      }
      token {
        name
        address
      }
      formattedAmount
    }
  }
}
`;
  const { data, error } = await fetchQuery(query1);
  console.log(data);
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  let whalesData = Object.values(data).map((chaintxns, i) => {
    return chaintxns?.TokenTransfer.map((tx) => {
      if (tx.from.identity !== "0x0000000000000000000000000000000000000000") {
        return {
          from: tx.from.identity,
          tokenname: tx.token.name,
          tokenaddress: tx.token.address,
          chain: Object.keys(data)[i],
        };
      } else return null;
    });
  });
  let finalData = whalesData.flat().filter((tx) => tx !== null);
  localStorage.setItem("whalesData", JSON.stringify(finalData));
  let boool = localStorage.getItem("whalesMonitring");

  boool = 1;
  localStorage.setItem("whalesMonitring", 1);
  await query2();

  setInterval(async () => {
    await query2();
  }, 60000);
};

export const query2 = async () => {
  console.log("sdfsdfsdvsdv");
  let data = localStorage.getItem("whalesData");
  data = JSON.parse(data);
  let finallogs = data.map(async (tx) => {
    let query2 = `
query MyQuery($from: Identity, $address: Address) {
  Ethereum: TokenTransfers(
    input: {filter: {tokenAddress: {_eq: $address}, from: {_eq: $from}}, blockchain: ethereum, limit: 50}
  ) {
    TokenTransfer {
      from {
        identity
      }
      to {
        identity
      }
      tokenAddress
      amount
      formattedAmount
      tokenId
      tokenType
      transactionHash
      blockTimestamp
      blockNumber
      token {
        name
      }
    }
  }
  Polygon: TokenTransfers(
    input: {filter: {tokenAddress: {_eq: $address}, from: {_eq: $from}}, blockchain: polygon, limit: 50}
  ) {
    TokenTransfer {
      from {
        identity
      }
      to {
        identity
      }
      tokenAddress
      amount
      formattedAmount
      tokenId
      tokenType
      transactionHash
      blockTimestamp
      blockNumber
      token {
        name
      }
    }
  }
  Base: TokenTransfers(
    input: {filter:  {tokenAddress: {_eq: $address}, from: {_eq: $from}}, blockchain: base, limit: 50}
  ) {
    TokenTransfer {
      from {
        identity
      }
      to {
        identity
      }
      tokenAddress
      amount
      formattedAmount
      tokenId
      tokenType
      transactionHash
      blockTimestamp
      blockNumber
      token {
        name
      }
    }
  }
}
`;

    const { data, error } = await fetchQuery(query2, {
      from: tx.from,
      address: tx.tokenaddress,
    });
    let toptnxs = Object.values(data)?.map((chaintxns, i) => {
      return chaintxns?.TokenTransfer?.map((tx, j) => {
        if (
          tx.from.identity !== "0x0000000000000000000000000000000000000000" &&
          j === 0
        ) {
          return {
            buysell: tx.from?.identity,
            token: tx.token?.name,
            avatar: "/images/artists/artist-1.jpg",
            // tokenaddress: tx.tokenAddress,
            // chain: Object.keys(data)[i],
            volume: tx?.formattedAmount,
            speculatedEffect: tx.blockTimestamp,
          };
        } else return null;
      });
    });
    let finalData = toptnxs
      ?.flat()
      ?.filter((tx) => tx !== null && tx !== undefined)[0];
    console.log(finalData);
    return finalData;
  });
  finallogs = await Promise.all(finallogs);
  console.log(finallogs);
  localStorage.setItem("MAAP_LOGS", JSON.stringify(finallogs.slice(0, 10)));
};
