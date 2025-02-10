import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/VanDetail/VanDetail';
import { Route, Routes } from 'react-router-dom';
import HostLayout from './components/HostLayout/HostLayout'
import Dashboard from './pages/Dashboard/Dashboard';
import Income from './pages/Income/Income';
import HostVans from './pages/HostVans/HostVans';
import Reviews from './pages/Reviews/Reviews';

import './style/globalStyle.scss';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

      </Route>
    </Routes >
  )
}

export default App;
