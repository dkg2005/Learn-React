import { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import ProfileCard from '../Components/ProfileCard';

export default function About() {
  const { theme } = useContext(ThemeContext);
  const [showMore, setShowMore] = useState(false);

  const containerStyle = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#2c2c2c',
    color: theme === 'light' ? '#333' : '#fff',
    minHeight: '80vh',
    padding: '40px 20px',
    transition: 'all 0.3s ease'
  };

  const sectionStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '40px'
  };

  const cardStyle = {
    padding: '30px',
    backgroundColor: theme === 'light' ? '#fff' : '#3a3a3a',
    borderRadius: '15px',
    boxShadow: theme === 'light' ? '0 4px 6px rgba(0,0,0,0.1)' : '0 4px 6px rgba(255,255,255,0.1)',
    marginBottom: '30px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: theme === 'light' ? '#007bff' : '#0056b3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease'
  };

  const teamMembers = [
    {
        name: "Dhruv",
        desc: "Full Stack Developer",
        img: "https://media.licdn.com/dms/image/v2/D5603AQER_gGCZD3lqA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719511352790?e=2147483647&v=beta&t=bjfkWfZw6_suFmi5LlSaJFk2XWD-TRRqFVKuiWAHe1U"
    },
    {
        name: "Alex",
        desc: "Full Stack Developer",
        img: "https://media.licdn.com/dms/image/v2/D5603AQER_gGCZD3lqA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719511352790?e=2147483647&v=beta&t=bjfkWfZw6_suFmi5LlSaJFk2XWD-TRRqFVKuiWAHe1U"
    },
    {
        name: "Carry",
        desc: "Full Stack Developer",
        img: "https://media.licdn.com/dms/image/v2/D5603AQER_gGCZD3lqA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719511352790?e=2147483647&v=beta&t=bjfkWfZw6_suFmi5LlSaJFk2XWD-TRRqFVKuiWAHe1U"
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <div style={cardStyle}>
          <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
            ℹ️ About Our Team
          </h1>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
            We are a passionate team of developers dedicated to creating innovative web solutions 
            using cutting-edge technologies like React, modern JavaScript, and responsive design principles.
          </p>

          {showMore && (
            <div style={{ marginTop: '20px' }}>
              <h3>Our Mission</h3>
              <p style={{ lineHeight: '1.6' }}>
                To build user-centric applications that solve real-world problems while maintaining 
                high code quality, performance, and accessibility standards.
              </p>
              
              <h3>Technologies We Use</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li>⚛️ React & React Router</li>
                <li>🎨 Modern CSS & Responsive Design</li>
                <li>🔧 JavaScript ES6+</li>
                <li>🌐 RESTful APIs</li>
                <li>🛠️ Git & Version Control</li>
              </ul>
            </div>
          )}

          <button 
            style={buttonStyle}
            onClick={() => setShowMore(!showMore)}
            onMouseOver={(e) => e.target.style.opacity = '0.8'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            {showMore ? 'Show Less' : 'Learn More'}
          </button>
        </div>

        <div style={cardStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Meet Our Team</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
            {teamMembers.map((member, index) => (
              <ProfileCard 
                key={index}
                name={member.name}
                desc={member.desc}
                img={member.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
