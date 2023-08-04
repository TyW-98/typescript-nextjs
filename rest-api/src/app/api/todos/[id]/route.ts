import { NextResponse } from "next/server";

const DATA_API_SOURCE = "https://jsonplaceholder.typicode.com/todos";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  //   const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_API_SOURCE}/${id}`);
  const data: Task = await res.json();

  if (!data.id) return NextResponse.json({ message: "No such task found" });

  return NextResponse.json(data);
}
