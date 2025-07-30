import { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerStyle = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#2c2c2c',
    color: theme === 'light' ? '#333' : '#fff',
    minHeight: '80vh',
    padding: '40px 20px',
    transition: 'all 0.3s ease'
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: theme === 'light' ? '#fff' : '#3a3a3a',
    borderRadius: '15px',
    boxShadow: theme === 'light' ? '0 4px 6px rgba(0,0,0,0.1)' : '0 4px 6px rgba(255,255,255,0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: theme === 'light' ? '2px solid #ddd' : '2px solid #555',
    borderRadius: '5px',
    fontSize: '1rem',
    backgroundColor: theme === 'light' ? '#fff' : '#4a4a4a',
    color: theme === 'light' ? '#333' : '#fff',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease'
  };

  const errorStyle = {
    color: '#ff4444',
    fontSize: '0.9rem',
    marginTop: '5px'
  };

  const successStyle = {
    color: '#44ff44',
    textAlign: 'center',
    padding: '20px',
    fontSize: '1.2rem'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  if (isSubmitted) {
    return (
      <div style={containerStyle}>
        <div style={formStyle}>
          <div style={successStyle}>
            ✅ Thank you! Your message has been sent successfully.
            <br />
            We'll get back to you soon!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          📞 Contact Us
        </h1>
        
        <p style={{ textAlign: 'center', marginBottom: '30px', lineHeight: '1.6' }}>
          Have a question or want to work together? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Your full name"
            />
            {errors.name && <div style={errorStyle}>{errors.name}</div>}
          </div>

          <div>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="your.email@example.com"
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
              placeholder="What's this about?"
            />
            {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
          </div>

          <div>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{...inputStyle, height: '120px', resize: 'vertical'}}
              placeholder="Tell us more about your project or question..."
            />
            {errors.message && <div style={errorStyle}>{errors.message}</div>}
          </div>

          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
}
