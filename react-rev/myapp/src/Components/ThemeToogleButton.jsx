import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: theme === 'light' ? '#333' : '#fff',
    color: theme === 'light' ? '#fff' : '#333',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  };

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyle}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.backgroundColor = theme === 'light' ? '#555' : '#f0f0f0';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.backgroundColor = theme === 'light' ? '#333' : '#fff';
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
