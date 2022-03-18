import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Produk } from './pages/Produk';
import { Tentang } from './pages/Tentang';

import { Routes, Route } from 'react-router-dom'
import { Swiper } from './pages/Swiper';
import { Counter } from './pages/Counter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/flicking" element={<Swiper />} />
        <Route path="/counter" element={<Counter />} />

      </Routes>
    </div>
  );
}

export default App;
