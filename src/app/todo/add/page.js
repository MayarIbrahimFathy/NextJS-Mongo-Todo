import { todoModel } from "@/app/_lib/models/todo";
import { dbConnection } from "@/app/_lib/dbconnection";
import React from "react";
import { redirect } from "next/navigation";

export default function AddTodo() {
  async function addTodo(formData) {
    'use server';

    const title = formData.get('todoTitle')?.toString();
    const status = formData.get('todoStatus')?.toString();

    if (!title || !status) return;

    await dbConnection();
    await todoModel.create({ title, status });
    
    redirect('/todo');
  }

  return (
    <form action={addTodo} className="w-50 mx-auto my-5">
      <div className="mb-3">
        <label className="form-label">ToDo Title</label>
        <input type="text" name="todoTitle" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">ToDo Status</label>
        <input type="text" name="todoStatus" className="form-control" />
      </div>
      <button type="submit" className="btn btn-danger">Submit</button>
    </form>
  );
}
