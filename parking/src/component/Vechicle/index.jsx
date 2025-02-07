export const Vechicle = () =>{
    return <form action="" >  <h1>Vechicle Registration</h1>
        <input type="text" placeholder="Enter Vechicle Number" required pattern="[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"/>
        <select name="" id="">
            <option value="" disabled select >-- Selction Type --</option> 
            <option value="none">None</option> 
            <option value="cycle"> Cycle</option> 
            <option value="car">Car</option> 
        </select>
        <input type="submit" value="Register" />
    </form>
}