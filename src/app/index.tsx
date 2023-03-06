import { Routes, Route } from 'react-router-dom';
import { useEthers } from '@usedapp/core';

import { Header } from 'components/header';
import { Home } from 'pages/home';
import { Profile } from 'pages/profile';

import './index.css';

function App() {
  const { account } = useEthers();

  return (
    <div className="App">
      <Header account={account} />
      <Routes>
        <Route index path="/" element={<Home account={account} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
