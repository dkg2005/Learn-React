import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        backgroundColor: theme === 'light' ? '#333' : '#eee',
        color: theme === 'light' ? '#fff' : '#000',
        border: 'none',
        borderRadius: '8px',
        marginTop: '20px'
      }}
    >
      Toggle Theme
    </button>
  );
}
