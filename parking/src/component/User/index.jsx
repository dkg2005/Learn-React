export const User = () =>{
    return <form className="user"  action="">
        <h1>User Registration</h1>
        <input type="text" placeholder="Name" required/>
        <input type="text" placeholder="Contact" required pattern="[0-9]{10}"/>
        <select name="" id="">
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value=""></option>
        </select>
        <input type="submit" value="Submit" />
    </form>
}