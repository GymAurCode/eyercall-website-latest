import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * ContactUs Component
 * Displays contact information and contact form
 * Currently shows a placeholder page with navigation back to home
 */
function ContactUs() {
  const navigate = useNavigate()
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white',
      fontSize: '2rem',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1>Hello to Contact Us Page</h1>
        <p>This is the Contact Us page of your portfolio website.</p>
        <button 
          onClick={() => navigate('/')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            background: 'white',
            color: '#f5576c',
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

export default ContactUs
