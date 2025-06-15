import { dbConnection } from "@/app/_lib/dbconnection";
import { todoModel } from "@/app/_lib/models/todo";

export async function GET() {
  await dbConnection();

  try {
    const todos = await todoModel.find();
    return new Response(JSON.stringify({ data: todos }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to fetch todos" }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  await dbConnection();

  try {
   
    const todo = await request.json();
    const newTodo = await todoModel.create(todo);

     const validation = validationSchema.safeParse(todo)
    if(!validation.success){
        return new Response (JSON.stringify({meessage : 'validation error'}),{status: 400});
    }

    return new Response(JSON.stringify({ data: newTodo }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to create todo" }), {
      status: 400,
    });
  }
}

export async function PUT(request) {
  await dbConnection();
  const body = await request.json();
  const { id, title, status } = body;

  try {
    const updated = await todoModel.findByIdAndUpdate(id, { title, status }, { new: true });
    return new Response(JSON.stringify({ data: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to update todo" }), {
      status: 400,
    });
  }
}

export async function DELETE(request) {
  await dbConnection();
  const { id } = await request.json();

  try {
    await todoModel.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to delete todo" }), {
      status: 400,
    });
  }
}
