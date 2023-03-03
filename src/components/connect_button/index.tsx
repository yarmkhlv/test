import MetaMaskOnboarding from '@metamask/onboarding';
import { useEthers } from '@usedapp/core';

declare global {
  interface Window {
    ethereum: unknown;
  }
}

export function ConnectButton() {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const onboarding = new MetaMaskOnboarding();
  const metaMaskCheck = window.ethereum;
  if (metaMaskCheck) {
    onboarding.stopOnboarding();
  }
  return metaMaskCheck ? (
    account ? (
      <button onClick={() => deactivate()} type="button">
        Disconnect
      </button>
    ) : (
      <button
        onClick={() => activateBrowserWallet()}
        type="button"
        className="px-6 pt-2.5 pb-2 mt-4 rounded-3xl bg-bgDefaultBtn text-lg uppercase"
      >
        Connect MetaMask
      </button>
    )
  ) : (
    <button onClick={() => onboarding.startOnboarding()} type="button">
      Install
    </button>
  );
}
