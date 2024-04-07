import React from 'react'
import ReactDOM from 'react-dom/client'
import {ProductApp} from './components/ProductApp.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductApp title={'Lista de Productos'} />
  </React.StrictMode>,
)
