'use client'
import React, { useState } from 'react'

export default function AddToDo() {
    const[todoData , setTodoData] = useState({
     title : '',
     status : '',
    });

const handleChange = (ev)=>{
    if(ev.target.name == 'todoTitle'){
        setTodoData({...todoData,title:ev.target.value})
    }else if(ev.target.name == 'todoStatus'){

      setTodoData({...todoData,status:ev.target.value})
    }
}

const handleSubmit = async (ev) => {
  ev.preventDefault();
  await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(todoData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  window.location.href = '/todo';
};


    return (
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">ToDo List</label>
                    <input type="text" name ='todoTitle' value={todoData.title} onChange={(e)=> handleChange(e)} className="Form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">ToDo Status</label>
                    <input type="text" name='todoStatus' value={todoData.status} onChange={(e)=> handleChange(e)} className="Form-control" />
                </div>
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
        </>
    )
}
