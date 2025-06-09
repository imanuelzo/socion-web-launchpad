
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const ConnectWalletExample = () => {
  const { address, isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to <span className="text-blue-400">RainbowKit</span> + 
        <span className="text-green-400"> wagmi</span> + 
        <span className="text-purple-400"> React!</span>
      </h1>

      <ConnectButton />

      {isConnected && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-green-400">Connected to: {address}</p>
        </div>
      )}

      <p className="mt-8 text-gray-400 text-center max-w-md">
        This is an example implementation of RainbowKit with Taranium chain support.
        The connect button above will allow users to connect their MetaMask wallet.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-400 mb-4">RainbowKit Documentation</h2>
          <p className="text-gray-300">Learn how to customize your wallet connection flow.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-400 mb-4">wagmi Documentation</h2>
          <p className="text-gray-300">Learn how to interact with Ethereum.</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletExample;
