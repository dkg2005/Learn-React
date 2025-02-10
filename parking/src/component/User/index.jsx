import { useState } from "react"


export const User = ({setUsers}) =>{
    
    const[name, setName] = useState("")
    const[contact, setContact] = useState("")
    const[role, setRole] = useState("student")

    const addUser = (e) =>{
        e.preventDefault()
        setUsers(users => {
            return [...users, {name,contact,role}]
        })
    }

    return <form className="user"  action="" onSubmit={addUser}>
        <h1>User Registration</h1>
        <input 
        type="text" placeholder="Name" 
        value={name} onChange={e => setName(e.target.value)} required
        />
        <input
         type="text" placeholder="Contact" value={contact} 
         onChange={e => setContact(e.target.value)} required pattern="[0-9]{10}"
         />
        <select name="" id="" onChange={e => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value=""></option>
        </select>
        <input type="submit" value="Submit"/>
    </form>
}