import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductosProvider from './routes/context/ProductosProvider.jsx'
import { CarritoProvider } from './routes/context/CarritoProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductosProvider>
    <CarritoProvider>

  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,

    </CarritoProvider>
  </ProductosProvider>
)
