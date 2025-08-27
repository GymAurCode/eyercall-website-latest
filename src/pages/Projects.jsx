import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Projects Component
 * Displays portfolio projects and work examples
 * Currently shows a placeholder page with navigation back to home
 */
function Projects() {
  const navigate = useNavigate()
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: 'white',
      fontSize: '2rem',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1>Hello to Projects Page</h1>
        <p>This is the Projects page of your portfolio website.</p>
        <button 
          onClick={() => navigate('/')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            background: 'white',
            color: '#4facfe',
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

export default Projects
