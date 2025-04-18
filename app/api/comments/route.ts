import { NextResponse } from "next/server"
import sqlite3 from "sqlite3"
import { open } from "sqlite"

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const postId = searchParams.get("post_id")

  const formData = await req.formData()
  const name = formData.get("name") as string
  const surname = formData.get("surname") as string
  const comment = formData.get("comment") as string

  const db = await open({
    filename: "./profile.db",
    driver: sqlite3.Database,
  })

  await db.run(
    "INSERT INTO comments (post_id, name, surname, comment) VALUES (?, ?, ?, ?)",
    postId,
    name,
    surname,
    comment
  )

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  
  return NextResponse.redirect(`${baseUrl}/dashboard/post/${postId}`, {
    status: 303,
  })
}
