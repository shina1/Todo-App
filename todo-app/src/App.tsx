import React, {FC, ChangeEvent, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { ITask } from './interface'
import TodoDisplay from './Component/todoDisplay';
import './App.css';

const App: FC = () => {
  const [todo,setTodo] = useState<string>('')
  const [days,setDays] = useState<number>(0)
  const [list,setList] = useState<ITask[]>([])
  // for adding the input values to the component state.
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>{
    if(e.target.name === 'todo'){
      setTodo(e.target.value)
    }else{
      setDays(Number(e.target.value))
    }      
    }
    const addTodo = (): void =>{
      const newTodo = {
        todoName: todo,
        noOfDays: days
      }
      setList([...list, newTodo])
      setTodo("")
      setDays(0)
    }
    const handleDelete = (todoToDelete: string): void =>{
      setList(list.filter((todo) =>{
        return todo.todoName != todoToDelete
      }))
  }
  return (
    <Container maxWidth="md" className='cont'>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container className='header' >
            <Grid item xs={12}>
              <Box
              component="form"
              noValidate
              autoComplete="off"
              className='form'
              >
                <Grid item xs={12} className='grid-box'>
                  <TextField id="todo" name="todo" label="Todo" value={todo} variant="outlined" onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} className='grid-box'>
                  <TextField id="days" name="days" value={days} label="Deadline (in days)..." variant="outlined" onChange={handleChange}/>
                </Grid>
                <Button variant="contained" onClick={addTodo}>Add</Button>
              </Box>
            </Grid>
          </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className='body'>
            <Grid item xs={12}>
              {
                list.map((todo: ITask, i: number)=>{
                  return <TodoDisplay  key={i} todo={todo} handleDelete={handleDelete}/>
                })
              }
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
