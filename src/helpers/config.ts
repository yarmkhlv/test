import { Mainnet, Config, Goerli } from '@usedapp/core';

export const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/cbe8658e2dfb40d8a2cfcfe816d781ab',
    [Goerli.chainId]:
      'https://goerli.infura.io/v3/cbe8658e2dfb40d8a2cfcfe816d781ab',
  },
};
