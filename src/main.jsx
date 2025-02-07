import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { makeServer } from "./server";


if (process.env.NODE_ENV === "development") {
  makeServer();
}


createRoot(document.querySelector('#root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
