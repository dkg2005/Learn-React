import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🔍 GitHub User Finder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}







// import { useContext } from 'react';
// import { ThemeContext } from '../ThemeContext';
// import ProfileCard from '../Components/ProfileCard';

// export default function Home() {
//   const { theme } = useContext(ThemeContext);

//   const containerStyle = {
//     backgroundColor: theme === 'light' ? '#f9f9f9' : '#2c2c2c',
//     color: theme === 'light' ? '#333' : '#fff',
//     minHeight: '80vh',
//     padding: '40px 20px',
//     transition: 'all 0.3s ease'
//   };

//   const heroStyle = {
//     textAlign: 'center',
//     marginBottom: '50px'
//   };

//   const skillsStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//     gap: '20px',
//     marginTop: '40px'
//   };

//   const skillCardStyle = {
//     padding: '20px',
//     backgroundColor: theme === 'light' ? '#fff' : '#3a3a3a',
//     borderRadius: '10px',
//     boxShadow: theme === 'light' ? '0 4px 6px rgba(0,0,0,0.1)' : '0 4px 6px rgba(255,255,255,0.1)',
//     textAlign: 'center'
//   };

//   const skills = [
//     { title: 'React Hooks', desc: 'useState, useEffect, useContext', icon: '⚛️' },
//     { title: 'Component Design', desc: 'Reusable and modular components', icon: '🧩' },
//     { title: 'State Management', desc: 'Context API and local state', icon: '🔄' },
//     { title: 'Routing', desc: 'React Router for navigation', icon: '🗺️' }
//   ];

//   return (
//     <div style={containerStyle}>
//       <div style={heroStyle}>
//         <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
//           Welcome to My Portfolio 🚀
//         </h1>
//         <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
//           Full-Stack Developer passionate about creating amazing user experiences with React and modern web technologies.
//         </p>
//       </div>

//       <div style={skillsStyle}>
//         {skills.map((skill, index) => (
//           <div key={index} style={skillCardStyle}>
//             <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
//               {skill.icon}
//             </div>
//             <h3>{skill.title}</h3>
//             <p>{skill.desc}</p>
//           </div>
//         ))}
//       </div>

//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h2>Featured Project</h2>
//         <ProfileCard 
//           name="Portfolio App"
//           desc="A modern React portfolio showcasing component composition, routing, and theme management"
//           img="https://via.placeholder.com/200x150/4CAF50/white?text=React+Portfolio"
//         />
//       </div>
//     </div>
//   );
// }
