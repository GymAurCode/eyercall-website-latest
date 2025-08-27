import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * About Component
 * Displays information about the company/project
 * Currently shows a placeholder page with navigation back to home
 */
function About() {
  const navigate = useNavigate()
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontSize: '2rem',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1>Hello to About Page</h1>
        <p>This is the About page of your portfolio website.</p>
        <button 
          onClick={() => navigate('/')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            background: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ← Back to Portfolio
        </button>
      </div>
    </div>
  )
}

export default About
