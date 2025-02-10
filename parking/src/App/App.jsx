import { useState } from "react"
import { User } from "../component/User"
import { Vechicle } from "../component/Vechicle"
import { VechicleList } from "../component/VehicleList"

const App = () =>{
   
    const[users, setUsers] = useState([])
    const[vehicleInfo, setVehicleInfo] = useState([])
          
    return <>
       <User setUsers={setUsers}/>
       <Vechicle users={users} setVehicleInfo={setVehicleInfo} vehicleInfo={vehicleInfo}/>
       <VechicleList vehicleInfo={vehicleInfo} />
    </>
}
export default App 