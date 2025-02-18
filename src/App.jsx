import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail from './pages/VanDetail/VanDetail';
import HostLayout from './components/HostLayout/HostLayout'
import Dashboard from './pages/Host/Dashboard/Dashboard';
import Income from './pages/Host/Income/Income';
import HostVans from './pages/Host/HostVans/HostVans';
import HostVansDetail from './pages/Host/HostVansDetail/HostVansDetail';
import Reviews from './pages/Host/Reviews/Reviews';
import HostVansInfo from './pages/Host/HostVansDetail/HostVansInfo/HostVansInfo';
import HostVansPricing from './pages/Host/HostVansDetail/HostVansPricing/HostVansPricing';
import HostVansPhotos from './pages/Host/HostVansDetail/HostVansPhotos/HostVansPhotos';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ErrorRequest from './components/ErrorRequest/ErrorRequest';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { makeServer } from "./server";

import './style/globalStyle.scss';


makeServer();

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="vans"
      element={<Vans />}
      loader={vansLoader}
      errorElement={<ErrorRequest />}
    />
    <Route path="vans/:id" element={<VanDetail />} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="vans" element={<HostVans />} />

      <Route path="vans/:id" element={<HostVansDetail />}>
        <Route index element={<HostVansInfo />} />
        <Route path="pricing" element={<HostVansPricing />} />
        <Route path="photos" element={<HostVansPhotos />} />
      </Route>
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
