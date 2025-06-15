import React from 'react';
import { dbConnection } from '@/app/_lib/dbconnection';
import { todoModel } from '@/app/_lib/models/todo';
import { redirect } from 'next/navigation';

export default async function TodoPage() {
  await dbConnection();

  const todos = await todoModel.find();

  async function deleteTodo(formData) {
    'use server';
    const id = formData.get('todoId');
    await dbConnection();
    await todoModel.findByIdAndDelete(id);
    redirect('/todo');
  }

  async function editTodo(formData) {
    'use server';
    const id = formData.get('todoId');
    const newTitle = formData.get('newTitle')?.toString();
    const newStatus = formData.get('newStatus')?.toString();
    await dbConnection();
    await todoModel.findByIdAndUpdate(id, {
      title: newTitle,
      status: newStatus,
    });
    redirect('/todo');
  }

  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id} className="border p-3 my-3 rounded w-75 mx-auto border-0">
          <h2 className='text-secondary '>- {todo.title}</h2>
          <p className='text-secondary fw-bold'>Status: {todo.status}</p>

          <form action={editTodo}>
            <input type="hidden" name="todoId" value={todo._id.toString()} />
            <button type="submit" className="btn btn-danger btn-sm me-2">Edit</button>
          </form>

          <form action={deleteTodo} className="mt-2 d-flex gap-2">
            <input
              type="hidden"
              name="todoId"
              value={todo._id.toString()}
            />
            <input
              type="text"
              name="newTitle"
              placeholder="New title"
              className="form-control"
              defaultValue={todo.title}
            />
            <input
              type="text"
              name="newStatus"
              placeholder="New status"
              className="form-control"
              defaultValue={todo.status}
            />
            <button type="submit" className="btn btn-outline-dark text-danger btn-sm">Delete</button>
          </form>
        </div>
      ))}
    </>
  );
}
