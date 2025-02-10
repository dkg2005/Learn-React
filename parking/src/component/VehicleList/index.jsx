export const VechicleList = ({vehicleInfo}) =>{
    return <>
    <h2>Registerd Vechicles</h2>
    <table border={5}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Vechicle Number</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
        {vehicleInfo.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.owner}</td>
              <td>{vehicle.vehicleNo}</td>
              <td>{vehicle.vehicleType}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
}

// {vehicleInfo.map((vehicle) => {(
//     <tr>
//     <td>vehicle.owner</td>
//     <td>vehicle.vehicleType</td>
//     <td>vehicle.vehicleNo</td>
// </tr>
// )
// })
// }