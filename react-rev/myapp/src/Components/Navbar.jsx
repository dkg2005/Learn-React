
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: '10px',
        backgroundColor: theme === 'light' ? '#f4f4f4' : '#222',
        color: theme === 'light' ? '#000' : '#fff'
      }}
    >
      <h3>🌐 My Themed App</h3>
    </nav>
  );
}




















// import { Link } from 'react-router-dom';

// export default function Navbar(){
//     return (
//     <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
//         <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
//         <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
//         <Link to="/contact">Contact</Link>
//     </nav>
//     )
// }