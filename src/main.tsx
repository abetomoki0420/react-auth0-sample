import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react"
import config from "./config/auth0"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={ config.domain }
      clientId={ config.clientId }
      redirectUri={ window.location.origin }
      useRefreshTokens={ true }
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
