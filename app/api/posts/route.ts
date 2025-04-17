import { NextResponse } from "next/server"
import sqlite3 from "sqlite3"
import { open } from "sqlite"

export async function POST(req: Request) {
  const { title, content,date,alt,comments,image } = await req.json()

  if (!title || !content) {
    return NextResponse.json({ message: "Başlık ve içerik zorunludur" }, { status: 400 })
  }

  const db = await open({ filename: "./profile.db", driver: sqlite3.Database })

  await db.run("INSERT INTO posts (title, content,date,alt,comments,image) VALUES (?, ?, ?, ?,?,?)", [title, content,date,alt,comments,image])

  return NextResponse.json({ message: "Post başarıyla eklendi" }, { status: 200 })
}
export async function GET() {
    const db = await open({ filename: "./profile.db", driver: sqlite3.Database })
  
    const posts = await db.all("SELECT * FROM posts ORDER BY id DESC")
  
    return NextResponse.json(posts)
  }
