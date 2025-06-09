
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defineChain } from 'viem';

const taranium = defineChain({
  id: 9924,
  name: 'TARANIUM',
  nativeCurrency: {
    name: 'TARAN',
    symbol: 'TARAN',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.taranium.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Taranium Explorer',
      url: 'https://testnet-scan.taranium.com',
    },
  },
  testnet: true,
});

export const config = getDefaultConfig({
  appName: 'Socion RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [taranium],
  ssr: false,
});
