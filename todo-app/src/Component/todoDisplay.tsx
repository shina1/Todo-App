import React from 'react'
import { ITask } from '../interface'
import Button from '@mui/material/Button'


interface Props{
    todo: ITask;
    handleDelete(todoToDelete: string): void;
}

const TodoDisplay = ({todo, handleDelete}: Props) => {
    
    return (
        <div className='todo-disp'>
            <div className='disp-box'><p>{todo.todoName}</p></div> 
            <div className='disp-box'><p>{todo.noOfDays}</p></div>
            <Button variant="contained" className="btn-cancel" onClick={()=>{
                handleDelete(todo.todoName)
            }}>X</Button>
        </div>
    )
}

export default TodoDisplay
