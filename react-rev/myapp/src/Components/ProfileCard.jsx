import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function ProfileCard({ name, desc, img }) {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    border: theme === 'light' ? '2px solid #e0e0e0' : '2px solid #555',
    padding: '20px',
    borderRadius: '15px',
    width: '250px',
    textAlign: 'center',
    margin: '10px',
    marginTop: '30px',
    backgroundColor: theme === 'light' ? '#fff' : '#3a3a3a',
    color: theme === 'light' ? '#333' : '#fff',
    boxShadow: theme === 'light' ? '0 4px 6px rgba(0,0,0,0.1)' : '0 4px 6px rgba(255,255,255,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const imgStyle = {
    borderRadius: '50%',
    border: theme === 'light' ? '3px solid #f0f0f0' : '3px solid #555',
    transition: 'transform 0.3s ease'
  };

  return (
    <div 
      style={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = theme === 'light' 
          ? '0 8px 15px rgba(0,0,0,0.2)' 
          : '0 8px 15px rgba(255,255,255,0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = theme === 'light' 
          ? '0 4px 6px rgba(0,0,0,0.1)' 
          : '0 4px 6px rgba(255,255,255,0.1)';
      }}
    >
      <img 
        src={img} 
        alt={name} 
        width="120" 
        height="120"
        style={imgStyle}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      />
      <h3 style={{ margin: '15px 0 10px 0', fontSize: '1.2rem' }}>{name}</h3>
      <p style={{ margin: '0', lineHeight: '1.4', opacity: '0.8' }}>{desc}</p>
    </div>
  );
}

export default ProfileCard;
