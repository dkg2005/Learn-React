import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

export default function NotFound() {
  const { theme } = useContext(ThemeContext);

  const containerStyle = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#2c2c2c',
    color: theme === 'light' ? '#333' : '#fff',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 20px',
    transition: 'all 0.3s ease'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '10px 20px',
    border: '2px solid #007bff',
    borderRadius: '5px',
    marginTop: '20px',
    display: 'inline-block',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={{ fontSize: '6rem', marginBottom: '20px' }}>
        🤔
      </div>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        404
      </h1>
      <h2 style={{ marginBottom: '20px' }}>
        Oops! Page Not Found
      </h2>
      <p style={{ maxWidth: '500px', lineHeight: '1.6', marginBottom: '30px' }}>
        The page you're looking for doesn't exist. It might have been moved, deleted, 
        or you entered the wrong URL.
      </p>
      <Link 
        to="/" 
        style={linkStyle}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#007bff';
          e.target.style.color = '#fff';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#007bff';
        }}
      >
        🏠 Go Back Home
      </Link>
    </div>
  );
}
