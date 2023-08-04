import { NextResponse } from "next/server";

const DATA_API_SOURCE = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const res = await fetch(DATA_API_SOURCE);
  const data: Task[] = await res.json();
  return new NextResponse(JSON.stringify(data), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(request: Request) {
  const { id }: Partial<Task> = await request.json();

  if (!id) {
    return NextResponse.json({ message: "Require task ID" });
  }

  await fetch(`${DATA_API_SOURCE}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
  });

  return NextResponse.json({ message: `Task ${id} deleted` });
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Task> = await request.json();

  if (!userId || !title) {
    return NextResponse.json({
      message: "Missing required data (userId && Title)",
    });
  }

  const res = await fetch(DATA_API_SOURCE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
    body: JSON.stringify({
      userID: userId,
      title: title,
      completed: false,
    }),
  });

  // Fetch the new task
  const newTodoList: Task = await res.json();
  return NextResponse.json(newTodoList);
}

export async function PUT(request: Request) {
  const { userId, id, title, completed }: Task = await request.json();

  if (!userId || !id || !title || typeof completed !== "boolean") {
    return NextResponse.json({
      message: "Missing at least one of the required data",
    });
  }

  const res = await fetch(`${DATA_API_SOURCE}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });

  const UpdatedTask: Task = await res.json();
  return NextResponse.json(UpdatedTask);
}
