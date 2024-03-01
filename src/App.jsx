
import { useState } from 'react'
import './App.css'


export default function App(props) {
  const [value, SetValue] = useState("")
  const [task, setTask] = useState([])
  const [ids, setIds] = useState(1)
  const handleChange = (e) =>{
      SetValue(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(value.length>1){
        let newtable = [...task]
        newtable.push({id:ids, text: value, completed: false})
        setTask(newtable)
        setIds(ids+1)
    }else{
      alert("You need to ener something")
    }
  }
  const handleOnComplete = (id) =>{
    console.log(task)
    let newtable = [...task]
    let newtable2 = newtable.map(function(el){
        if(el.id==id){
          el.completed=!el.completed
          return el
        } 
        else return el
        })
    setTask(newtable2)
    console.log(task)
  }

  const handleDelete = (id) => {
    let newtable = [...task]
    let newtable2 = newtable.filter((el) => el.id!=id)
    setTask(newtable2)  
  }

 return(<div className='main'>
    <form>
          <input onChange={handleChange} className="inputText" placeholder="  Enter task" value={ value}></input>
          <button onClick={handleSubmit} type='submit'>
              <span className="text">Add task</span>
          </button>
      </form>

      <div className="wrapper">
        {task.length>0?<h2 className='title'>My to do list</h2>:<></>}
        <div className="card">
        
            <ul className="users">
              {task.map((item)=> <li key={item.id} className="user">
                <p className="user-name">
                  {!item?.completed?<span > {item.text}</span>:<span className='completed'> {item.text}</span>} 
                </p> 
                <button onClick={() => handleOnComplete(item.id)}>{!item.completed?<>completed</>:<>uncompleted</>}</button>
                 <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>)} 
            </ul>
        </div>
        </div>
      </div>)
}
