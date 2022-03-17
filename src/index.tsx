import React from 'react'
import ReactDOM from 'react-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App'
import Providers from './Providers'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
