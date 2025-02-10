import { useState } from "react"
import { User } from "../component/User"
import { Vechicle } from "../component/Vechicle"

const App = () =>{
   
    const[users, setUsers] = useState([])
          
    return <>
       <User setUsers={setUsers}/>
       <Vechicle users={users} />
    </>
}
export default App 