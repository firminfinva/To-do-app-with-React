
import { useState } from 'react'
import './App.css'


export default function App(props) {
  const [value, SetValue] = useState("")
  const [task, setTask] = useState([])
  const [ids, setIds] = useState(0)
  const handleChange = (e) =>{
      SetValue(e.target.value)
  }
  const handleSubmit = (e) =>{
   
    e.preventDefault()
    let newId = ids
    let newTable = [...task]
    setIds(newId+1)
    newTable.push({id: ids, text: value, completed:true})
    // console.log(task)
    setTask(newTable)
  }
  const handleDelete = (id) => {
    console.log(id)
    let newTable = [...task]
    let newTable2 = newTable.filter((item) => item.id==id)
    setTask(newTable2)
    
  }

 return(<div className='main'>
    <form>
          <input onChange={handleChange} className="inputText" placeholder="Enter task" value={value}></input>
          <button onClick={handleSubmit} type='submit'>
              <span className="text">Add task</span>
          </button>
      </form>
      <div>
      <div className="wrapper">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="card">
          <section className="bottom">
            <ul className="users">
           
              {task.map((item)=> <li className="user">
                <p className="user-name">{item.text}</p> <button>completed</button> <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>)} 
            </ul>
          </section>
        </div>
        </div>
      </div>
 </div>)
}
