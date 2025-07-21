import { use, useState } from 'react'
// import ToggleBtn from './Components/Togglebtn';
// import ProfileCard from './Components/ProfileCard';
// import Users from './Components/user';
import TaskItem from './Components/TaskItem';


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
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  function handleToggle(){
    setisLoggedIn(!isLoggedIn)
  }

  const addTask = () =>{
    if(task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const delTask = (index) =>{
    const newTasks = tasks.filter((_,i) => i != index);
    setTasks(newTasks);
  };


  return (
    <>
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
       
     </div> */}
    </>
  )
}

export default App
