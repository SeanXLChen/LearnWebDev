import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


function App() {
  // initialize the name variable
  const name = 'Sean'

  // initialize the tasks state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },

    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },

    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  // show or hide the AddTask form
  const [showAddTask, setShowAddTask] = useState(false)

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle task.reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  // add task
  const AddTaskFunc = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // set the showAddTask state to the opposite of its current value
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">

      {/* pass the name variable to the Header component */}
      <Header title={name} onAdd={toggleAddTask} showAdd={showAddTask} />

      {showAddTask ? <AddTask onAdd={AddTaskFunc} /> : <></>}

      {/* onDelete is a prop that is passed to the Tasks component */}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
        <p>You have 0 tasks</p>}

    </div>
  );
}

export default App;
