import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const currentPath = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {currentPath === '/' || currentPath === '/index.html' ? (
      <App />
    ) : (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#050505', 
        color: 'white',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: "'Cinzel', serif" }}>404</h1>
        <p style={{ fontSize: '18px', color: '#a3a3a3', marginBottom: '32px' }}>The page <strong style={{color: '#fff'}}>{currentPath}</strong> does not exist.</p>
        <a href="/" style={{ 
          padding: '12px 24px', 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '8px', 
          color: 'white', 
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}>
          Return to Dashboard
        </a>
      </div>
    )}
  </StrictMode>,
)
