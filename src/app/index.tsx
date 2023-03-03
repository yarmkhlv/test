import { Routes, Route } from 'react-router-dom';

import { Header } from 'components/header';
import { Home } from 'pages/home';
import { Profile } from 'pages/profile';

import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
