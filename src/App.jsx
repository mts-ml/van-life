import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';

import './style/globalStyle.scss';
import Vans from './components/Vans/Vans';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
