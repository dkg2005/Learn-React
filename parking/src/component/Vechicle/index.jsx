import { useState } from "react";
import "../Vechicle"
export const Vechicle = ({users, setVehicleInfo,vehicleInfo}) => {  // * users is passing as object because this is an array 

    const[vehicleNo, setVehicleNo] = useState("")
    const[vehicleType, setVehicleType] = useState("")
    const[owner,setOwner] = useState("")

    const addVehicle = (e) => {
        e.preventDefault()  // to prevent the default behaviour
        // alert(JSON.stringify({vehicleNo,vehicleType,owner}))
        const isDuplicate = vehicleInfo.some(vehicle => vehicle.vehicleNo === vehicleNo)
        if(isDuplicate){
            alert("This vehicle is already registred") 
            return;
        }
        setVehicleInfo(prevVehicles =>{
          localStorage.setItem("VEHICLES",JSON.stringify([...prevVehicles, {vehicleNo,vehicleType,owner}]))
            return [...prevVehicles, {vehicleNo,vehicleType,owner}]
        })
        // setOwner("")
        setVehicleNo("")
        // setVehicleType("")
    }

  return (
    <form action="" onSubmit={addVehicle}>
      {" "}
      <h1>Vehicle Registration</h1>
      <input
        type="text"
        placeholder="Enter Vehicle Number"
        required
        pattern="[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"
        onChange={e=> 
            setVehicleNo(e.target.value)
        }
      />
      <select name="" id="" onChange={e=> setVehicleType(e.target.value)} >
        <option value="" disabled select selected>-- Selction Type --</option>
        <option value="none" >None</option>
        <option value="cycle"> Motor Bike</option>
        <option value="car">Car</option>
      </select>
      <select name="" id="" onChange={e => setOwner(e.target.value)} required> 
        <option value="" disabled selected>-- Select Owner --</option>
        {users?.map((user,index) => (
          <option key={index} value={user.name}>{index+1}.{user.name}</option>
        ))}
      </select>
      <input type="submit" value="Register" />
    </form>
  );
};
