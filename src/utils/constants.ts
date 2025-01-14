import { Chain, sepolia } from "viem/chains";

import {
  HAUS_NETWORK_DATA,
  HAUS_RPC,
  Keychain,
  KeychainList,
  NetworkConfig,
  ValidNetwork,
} from "@daohaus/keychain-utils";

export const APP_NAME = "PRESALER";

export const MEME_YEETER_SUMMONER_REFERRER = "DHYeet24ShamanSummoner.3";
export const YEET24_REFERRER = "DHYeet24ShamanSummoner.3";
export const YEET24_NAME = "Yeet24ShamanModule";

export const CURATOR_CONTRACTS: KeychainList = {
  YEET24_SUMMONER: {
    "0xaa36a7": "0x78cf150b2E684562C0510C0b699edE1DCD69b983",
  },
  YEETER_SINGLETON: {
    "0xaa36a7": "0x62ff4ca410e9e58f5ce8b2ad03695ef0ad990381",
  },
  YEET24_SINGLETON: {
    "0xaa36a7": "0x10a74cbe134295BC7148d3F0c8C7BFBc644D6C33",
  },
  FIXED_LOOT_SINGLETON: {
    // "0x1": "0x9d42696a9c3c54952b8918dcbcb82dd710347c77",
    // "0x5": "0x9d42696a9c3c54952b8918dcbcb82dd710347c77",
    // "0xa": "0x8dd2ca9f0ae4f464bf5a0c2283fc5c84f16f2f8e",
  },
  GOV_LOOT_SINGLETON: {
    // "0x1": "0xbdf2bd70d5dc78dce008b337d889b50c217c6eb7",
    // "0x5": "0xbdf2bd70d5dc78dce008b337d889b50c217c6eb7",
    // "0xa": "0x1597e36560a4935e8ba40520d2f3037fd111054c",
    "0xaa36a7": "0x8a4a9e36106ee290811b89e06e2fafe913507965",
  },

  GNOSIS_SAFE_PROXY_FACTORY: {
    // "0x1": "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2",
    // "0x5": "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2",
    // "0xa": "0xc22834581ebc8527d974f8a1c97e1bea4ef910bc",
    "0xaa36a7": "0xc22834581ebc8527d974f8a1c97e1bea4ef910bc",
  },
  GNOSIS_SAFE_MASTER_COPY: {
    // "0x1": "0xd9db270c1b5e3bd161e8c8503c55ceabee709552",
    // "0x5": "0xd9db270c1b5e3bd161e8c8503c55ceabee709552",
    // "0xa": "0xfb1bffc9d739b8d520daf37df666da4c687191ea", // "0xd9db270c1b5e3bd161e8c8503c55ceabee709552",
    "0xaa36a7": "0x69f4d1788e39c87893c980c06edf4b7f686e2938",
  },
  UNISWAP_V3_NF_POSITION_MANAGER: {
    "0xaa36a7": "0x1238536071E1c677A632429e3655c799b22cDA52",
  },
  WETH: {
    "0xaa36a7": "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
  },
};

/// https://docs.tokenbound.org/contracts/deployments

type KEYCHAIN = {
  [key: string]: string;
};

export const YEETER_GRAPH_URL: KEYCHAIN = {
  // "0xaa36a7": `https://gateway-arbitrum.network.thegraph.com/api/${
  //   import.meta.env.VITE_YEETER_GRAPH_API_KEY
  // }/subgraphs/id/8Syem3ZN88cut1wL8AqPHNo658Px7M2CkRuHAGuxvf6j`,
  "0xaa36a7": `https://api.studio.thegraph.com/query/73494/yeeter-sepolia/0.0.4`,
  "0x64": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/EGG5xEkiKKtGa9frTfBSmL2w7ZmzPDke5ZuvxDRwQcGe`,
  "0xa": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/55wEbRchfvjtWsy5NqLc4hp9C7xbX9yk8bAr3UQA8F7x`,
  "0xa4b1": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/BeGugH1TsMspZ7Nov1Uq2PQ98X78sqjuEy1JFGLyNgt5`,
  "0x2105": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/6vyAqRpCyrhLsfd6TfYAssvKywKhxJykkDbPxJZ4ZcEr`,
};

export const DH_GRAPH_URL: KEYCHAIN = {
  "0xaa36a7": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/3k93SNY5Y1r4YYWEuPY9mpCm2wnGoYDKRtk82QZJ3Kvw`,
};

// '0x1':
// 'https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/HouDe2pTdyKM9CTG1aodnPPPhm7U148BCH7eJ4HHwpdQ',
// '0x5': 'https://api.thegraph.com/subgraphs/name/hausdao/daohaus-v3-goerli',
// '0x64':
// 'https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/6x9FK3iuhVFaH9sZ39m8bKB5eckax8sjxooBPNKWWK8r',
// '0x89':
// 'https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/A4su27JYXR5TkPZmiFHzzqMJnmYttfU3FyrdNBDnnu8T',
// '0xa':
// 'https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/CgH5vtz9CJPdcSmD3XEh8fCVDjQjnRwrSawg71T1ySXW',
// '0xa4b1':
// 'https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/GPACxuMWrrPSEJpFqupnePJNMfuArpFabrXLnWvXU2bp',
// '0xaa36a7':
// 'https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/3k93SNY5Y1r4YYWEuPY9mpCm2wnGoYDKRtk82QZJ3Kvw',
// '0x2105':
// 'https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/7yh4eHJ4qpHEiLPAk9BXhL5YgYrTrRE6gWy8x4oHyAqW',

export const UNISWAP_URL: Keychain<string> = {
  "0xaa36a7": "https://app.uniswap.org/explore/pools/base/",
  "0x2105": "https://app.uniswap.org/explore/pools/base/",
  "0xa": "https://app.uniswap.org/explore/pools/optimism",
};

export const targetNetworks: Keychain<NetworkConfig> = {
  "0xaa36a7": HAUS_NETWORK_DATA["0xaa36a7"],
  "0x64": HAUS_NETWORK_DATA["0x64"],
  "0xa": HAUS_NETWORK_DATA["0xa"],
  "0xa4b1": HAUS_NETWORK_DATA["0xa4b1"],
  "0x2105": HAUS_NETWORK_DATA["0x2105"],
};
export const DEFAULT_CHAIN_ID = "0xaa36a7";

export const CHAIN_OBJ: {
  [key: string]: Chain;
} = {
  "0xaa36a7": sepolia,
};

export const RPC_URLS: KEYCHAIN = {
  "0xaa36a7": HAUS_RPC["0xaa36a7"],
};

export const getValidChainId = (chainId?: string) => {
  return targetNetworks[chainId as ValidNetwork]?.chainId || DEFAULT_CHAIN_ID;
};
const POINT_O_ONE_ETH = "10000000000000000";
export const SPONSOR_THRESHOLD = POINT_O_ONE_ETH;
export const YEETER_SHAMAN_PERMISSIONS = "2";
export const MEME_SHAMAN_PERMISSIONS = "3";
export const SHARE_NAME = "";
export const SHARE_SYMBOL = "";
export const LOOT_NAME = "Community Power";
export const LOOT_SYMBOL = "LOOT";
export const DEFAULT_SUMMON_VALUES = {
  //votingPeriodInSeconds: 259200,
  votingPeriodInSeconds: 200,
  // gracePeriodInSeconds: 172800,
  gracePeriodInSeconds: 6,
  newOffering: POINT_O_ONE_ETH,
  //   quorum: "20",
  quorum: "20",
  sponsorThreshold: SPONSOR_THRESHOLD,
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: true,
};

export const ADMIN_URL = "";

export const DEFAULT_YEETER_VALUES = {
  isShares: true,
  feeRecipients: [
    "0xd0f8720846890a7961945261fe5012e4ca39918e",
    "0x4a9a27d614a74ee5524909ca27bdbcbb7ed3b315",
  ], // yeeter team, daohaus eco fund
  feeAmounts: ["5000", "5000"], // .5% fees
  lootPerYeet: "100",
  multiplier: "10000",
  minThresholdGoal: POINT_O_ONE_ETH,
};

export const DEFAULT_DURATION_PROD = 24 * 60 * 60; // 24 hours
export const DEFAULT_DURATION_DEV = 10 * 60; // 10 minutes

export const DEFAULT_MEME_YEETER_VALUES = {
  poolFee: "10000", // 1%
};
