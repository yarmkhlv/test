import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import { useDispatch } from 'react-redux';

import { Header } from 'components/header';
import { Home } from 'pages/home';
import { Profile } from 'pages/profile';

import { updateAddress } from 'store_toolkit/user_slice';
import './index.css';

function App() {
  const dispatch = useDispatch();
  const { account } = useEthers();

  useEffect(() => {
    if (account) {
      dispatch(updateAddress(account));
    }
  }, [account, dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
