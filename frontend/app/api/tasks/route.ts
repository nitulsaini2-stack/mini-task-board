import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM Tasks");
    return Response.json(rows);
  } catch (error) {
    console.log(error);

    return Response.json({ error: "Failed to fetch tasks" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title } = await request.json();

    if (!title || title.trim() === "") {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }
    const [result] = await pool.execute(
      "INSERT INTO Tasks (title) VALUES (?)",
      [title],
    );
    return Response.json(
      { message: "Task created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);

    return Response.json({ error: "SomeThing error" }, { status: 500 });
  }
}
