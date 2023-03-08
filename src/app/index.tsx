import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from 'components/header';
import { Home } from 'pages/home';
import { Profile } from 'pages/profile';
import { Modal } from 'components/modal/modal';

import { updateAddress } from 'store_toolkit/user_slice';
import { Store } from 'helpers/interfaces';
import './index.css';

function App() {
  const dispatch = useDispatch();
  const { account } = useEthers();
  const { modalActive } = useSelector((store: Store) => store);

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
      {modalActive ? <Modal /> : null}
    </div>
  );
}

export default App;
