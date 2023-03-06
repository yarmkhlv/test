import MetaMaskOnboarding from '@metamask/onboarding';
import { useEthers } from '@usedapp/core';

declare global {
  interface Window {
    ethereum: unknown;
  }
}

export function ConnectButton() {
  const { activateBrowserWallet } = useEthers();
  const onboarding = new MetaMaskOnboarding();
  const metaMaskCheck = window.ethereum;
  if (metaMaskCheck) {
    onboarding.stopOnboarding();
  }
  return metaMaskCheck ? (
    <button
      onClick={() => activateBrowserWallet()}
      type="button"
      className="px-6 pt-2.5 pb-2 mt-4 rounded-custom_Rad bg-bgDefaultBtn text-custom_s font-bold uppercase"
    >
      Connect MetaMask
    </button>
  ) : (
    <button onClick={() => onboarding.startOnboarding()} type="button">
      Install
    </button>
  );
}
