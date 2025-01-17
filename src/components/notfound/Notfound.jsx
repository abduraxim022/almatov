import React from 'react';

export default function Notfound() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f4f4f9',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    message: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '24px',
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={() => (window.location.href = '/product')}
      >
        Go Back to Home
      </button>
    </div>
  );
}
