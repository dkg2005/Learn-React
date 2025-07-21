function ProfileCard({ name, desc, img }) {
  return (
    <div style={{
      border: '1px solid black',
      padding: '10px',
      borderRadius: '12px',
      width: '200px',
      textAlign: 'center',
      margin: '10px',
      marginTop: '30px'
    }}>
      <img src={img} alt={name} width="100" style={{ borderRadius: '50%' }} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default ProfileCard;
