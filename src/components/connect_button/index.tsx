import MetaMaskOnboarding from '@metamask/onboarding';
import { useEthers } from '@usedapp/core';

declare global {
  interface Window {
    ethereum: any;
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
      <button onClick={() => activateBrowserWallet()} type="button">
        Connect
      </button>
    )
  ) : (
    <button onClick={() => onboarding.startOnboarding()} type="button">
      Install
    </button>
  );
}
