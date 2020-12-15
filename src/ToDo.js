import React, { useState } from 'react'
import NewTask from './NewTask'
import ToDoList from './ToDoList'

const ToDo = () => {

    //first STATE
    const [tasks, setTask] = useState([
        {
            text: "Clean yuor room",
            isCompleted: false
        },
        {
            text: "To go to Cinema",
            isCompleted: true
        }
    ])

    //kodel reikia to ...kopija
    //pabandyti su ja ir be jos, koks skirtumas

const addNewTask= (text)=>{
    const newrow = [...tasks, {text}]
    setTask(newrow)
}

//console.log(tasks)
 //jei teviniame komponente atlieku map(), kaip nunesu props

 //per pros paduodu nuoroda i metoda

    return (
        <div className='container'>
        <div className='table'>
           
            {tasks.map((task, index)=>(
                <ToDoList 
                key={index}
                index={index}
                task={task}/>
            ))}
           
        </div>
         <NewTask addNewTask={addNewTask}/>
        </div>
    )
}

export default ToDo
