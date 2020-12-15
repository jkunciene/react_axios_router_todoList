import React from 'react'

const ToDoList = ({task, index}) => {
console.log(task)
    return (
        <tr className='row'>
            <td>{index+1}</td>
            <td>{task.text}</td>
        </tr>
    )
}

export default ToDoList
