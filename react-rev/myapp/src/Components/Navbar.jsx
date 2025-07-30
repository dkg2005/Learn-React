import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/">🏠 Home</Link>
    </nav>
  );
}








// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../ThemeContext';
// import ThemeToggleButton from './ThemeToogleButton';

// export default function Navbar() {
//   const { theme } = useContext(ThemeContext);

//   const navStyle = {
//     padding: '15px 20px',
//     backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
//     color: theme === 'light' ? '#333' : '#fff',
//     borderBottom: theme === 'light' ? '2px solid #e0e0e0' : '2px solid #333',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     boxShadow: theme === 'light' ? '0 2px 5px rgba(0,0,0,0.1)' : '0 2px 5px rgba(255,255,255,0.1)'
//   };

//   const linkStyle = {
//     marginRight: '20px',
//     textDecoration: 'none',
//     color: theme === 'light' ? '#333' : '#fff',
//     fontWeight: '500',
//     padding: '8px 12px',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s ease'
//   };

//   const linkHoverStyle = {
//     backgroundColor: theme === 'light' ? '#f0f0f0' : '#333'
//   };

//   return (
//     <nav style={navStyle}>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <h3 style={{ margin: 0, marginRight: '30px' }}>� My Portfolio</h3>
//         <div>
//           <Link to="/" style={linkStyle}>Home</Link>
//           <Link to="/about" style={linkStyle}>About</Link>
//           <Link to="/contact" style={linkStyle}>Contact</Link>
//         </div>
//       </div>
//       <ThemeToggleButton />
//     </nav>
//   );
// }




















// // import { Link } from 'react-router-dom';

// // export default function Navbar(){
// //     return (
// //     <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
// //         <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
// //         <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
// //         <Link to="/contact">Contact</Link>
// //     </nav>
// //     )
// // }