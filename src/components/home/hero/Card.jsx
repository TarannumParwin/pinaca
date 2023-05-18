import React from "react"
import { useState } from 'react'
import { Link } from "react-router-dom"

const Card = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to submit form data
  };
  return (
    <>
      <div>
        <h1><span>PINACA</span></h1>
      <form onSubmit={handleSubmit} style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '80%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      border: '2px solid #ffd700',
      borderRadius: '5px',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'translate(-50%, -50%) scale(1.05)'
      }
    }}>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        placeholder="Email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        style={{ 
          backgroundColor: '#fff',
          color: '#000',
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '10px',
          margin: '5px 0'
        }}
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        value={password} 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ 
          backgroundColor: '#fff',
          color: '#000',
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '10px',
          margin: '5px 0'
        }}
      />
      <button type="submit" style={{ 
        backgroundColor: '#ffd700', 
        color: '#ffffff', 
        border: 'none', 
        borderRadius: '5px', 
        padding: '10px 20px',
        marginTop: '10px',
        cursor: 'pointer'
      }}>Submit</button>
    </form>
 

      
        </div>
    </>
  )
}

export default Card
