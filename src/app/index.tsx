import { useEthers } from '@usedapp/core';

import { ConnectButton } from 'components/connect_button';

import './index.css';

function App() {
  const { account } = useEthers();
  return (
    <div className="App">
      <header />
      <main>
        <ConnectButton />
        <div>{account}</div>
      </main>
    </div>
  );
}

export default App;
