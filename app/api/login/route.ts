import { NextResponse } from "next/server"
import sqlite3 from "sqlite3"
import { open } from "sqlite"

export async function POST(req: Request) {
  const formData = await req.formData()
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const db = await open({
    filename: "./profile.db",
    driver: sqlite3.Database,
  })

  const user = await db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  )

  if (!user) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "Invalid credentials" }),
      { status: 401 }
    )
  }

  const response = new NextResponse(
    JSON.stringify({ success: true, message: "Login successful" }),
    { status: 200 }
  )

  response.cookies.set("loggedIn", "true", {
    httpOnly: true,
    path: "/",
  })

  return response
}
