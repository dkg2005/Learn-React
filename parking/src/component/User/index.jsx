import { useState } from "react"


export const User = ({setUsers}) =>{
    
    const[name, setName] = useState("")
    const[contact, setContact] = useState("")
    const[role, setRole] = useState("student")

    const addUser = (e) =>{
        e.preventDefault()
        setUsers(prevUsers => {
            localStorage.setItem("USERS",JSON.stringify([...prevUsers, {name,contact,role}]))
            return [...prevUsers, {name,contact,role}]
        })     
        // This is added for the make empty after submitting the details
        setName("")
        setContact("")
        setRole("student")
        alert("User Registered")
    }

    return <form className="user"  action="" onSubmit={addUser}>
        <h1 className="userheading">User Registration</h1>
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