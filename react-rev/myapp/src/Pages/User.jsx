import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function User() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(`https://api.github.com/users/${username}`);
        setUser(res.data);
      } catch (err) {
        setError("User not found or API error");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <p>⏳ Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>👤 {user.name || user.login}</h2>
      <img src={user.avatar_url} width="150" alt="avatar" />
      <p>📍 Location: {user.location || 'N/A'}</p>
      <p>📁 Public Repos: {user.public_repos}</p>
      <p>📅 Joined: {new Date(user.created_at).toLocaleDateString()}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">🔗 View Profile</a>
    </div>
  );
}
