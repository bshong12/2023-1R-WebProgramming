import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(   // root라는 태그를 찾아 그 안에 App 넣음
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
