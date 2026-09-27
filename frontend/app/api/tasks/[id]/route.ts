import pool from "@/lib/db";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const { status } = await request.json();

    if (!["todo", "in-progress", "done"].includes(status)) {
      return Response.json({ error: "Invalid status" }, { status: 400 });
    }
    const [result] = await pool.execute(
      "UPDATE Tasks SET status = ? WHERE id = ?",
      [status, id],
    );

    if ((result as any).affectedRows === 0) {
      return Response.json({ error: "Task not found" }, { status: 404 });
    }
    return Response.json(
      { message: "Task status updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return Response.json({ error: "Failed to update task" }, { status: 500 });
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [result] = await pool.execute(
      "DELETE FROM Tasks WHERE id = ?",
      [id]
    );

    if ((result as any).affectedRows === 0) {
      return Response.json(
        { error: "Task not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Task deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return Response.json(
      { error: "Failed to delete task" },
      { status: 500 }
    );
  }
}
