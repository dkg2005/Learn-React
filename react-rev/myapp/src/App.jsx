import { use, useEffect, useState } from 'react'
// import ToggleBtn from './Components/Togglebtn';
// import ProfileCard from './Components/ProfileCard';
// import Users from './Components/user';
import TaskItem from './Components/TaskItem';
// import SignupForm from './Components/SignupForm';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeToggleButton from './Components/ThemeToogleButton';
import { ThemeContext } from './ThemeContext';
import { ThemeProvider } from './ThemeContext';


function App() {
  // const [count, setCount] = useState(0);
  
  // function Greet(props){
  //   return <h3>Hello, {props.name}</h3>
  // }

  // function Clicker(){    // this is the Clicker Component
  //   const handleChange = () =>{
  //     alert("Button Clicked")
  //   }
  //   return <button onClick={handleChange}>Click Me!</button>
  // }
  // const [task, setTask] = useState('');
  // const [tasks, setTasks] = useState([]);
  // const [isLoggedIn, setisLoggedIn] = useState(false);

  // function handleToggle(){
  //   setisLoggedIn(!isLoggedIn)
  // }

  // const addTask = () =>{
  //   if(task.trim() === '') return;
  //   setTasks([...tasks, task]);
  //   setTask('');
  // };

  // const delTask = (index) =>{
  //   const newTasks = tasks.filter((_,i) => i != index);
  //   setTasks(newTasks);
  // };

  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCnt(cnt+1);
  //   },1000)
  // })
// const [cnt, setCnt]  = useState(0);

    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //       })
  //     .catch((err) => {
  //       console.err("Error fetching data..");
  //       setLoading(false);
  //     });
  //     }, [] ) // only run once when component mounts

  return (
    <>
     <ThemeProvider>
      <div style={{ textAlign: 'center' }}>
        <Navbar />
        <h1>Welcome to the Theme Toggle App</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>



      {/* <BrowserRouter>
      <Navbar />
      
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      
      </BrowserRouter> */}
    </>
  )
}

export default App





 {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:'10px', padding:"10px" }}>
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <Greet name='Dhruv' />
        <button onClick={() => setCount(count + 1)}>  Increment  </button> 
        <button onClick={() => setCount(count - 1)}>  Decrement  </button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <Clicker/>
        <h3>Toogel Btn </h3>
        <ToggleBtn/>
        <h2>Profile Card</h2>
        {Users.map((user, index) => {
           return <ProfileCard 
              key={index}
              name = {user.name}
              desc = {user.desc}
              img = {user.img}
          />
        })}
       
     </div> 
     
     <div>
      <h2>{isLoggedIn ? 'Welcome, back Dhruv' : ' Please Login'}</h2>
      <button onClick={handleToggle}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      { isLoggedIn && (<div >
          <h2>📝 ToDo App</h2>
          <input value={task} 
          onChange={(e)=>{setTask(e.target.value)}}
          placeholder='Enter Task...'
          />
          <button onClick={addTask}>Add Task</button>

          <div>
            {
              tasks.map((task, index) => {
                return <TaskItem key={index} task={task} onDelete ={() => delTask(index)}/>
              })
            }
          </div>
      </div>)
      }
    </div>
    

     */
     }