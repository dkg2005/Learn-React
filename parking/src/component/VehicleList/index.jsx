export const VechicleList = ({ vehicleInfo, users }) => {
  // console.log(users.map(user,idx)=>(
  //   user.role
  // ))

  const getRole = (owner)=>{
    for (let i=0; i<=users.length; i++){
      if (users[i].name === owner){
        return users[i].role
      }
    }
  }
  return (
    <>
      <h2>Registerd Vechicles</h2>
      <table border={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Vechicle Number</th>
            <th>Type</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {vehicleInfo.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.owner}</td>
              <td>{vehicle.vehicleNo}</td>
              <td>{vehicle.vehicleType}</td>
              <td>{getRole(vehicle.owner)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// {vehicleInfo.map((vehicle) => {
//     <tr>
//       <td>vehicle.owner</td>
//       <td>vehicle.vehicleType</td>
//       <td>vehicle.vehicleNo</td>
//     </tr>;
//   })}
