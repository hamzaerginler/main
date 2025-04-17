"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
  
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: formData,
      })
  
      console.log("👉 res.ok:", res.ok)
      console.log("👉 status:", res.status)
  
      const data = await res.json()
      console.log("👉 data:", data)
  
      if (res.ok) {
        router.push("/dashboard")
      } else {
        setError(data.message || "Login failed")
      }
  
    } catch (err: any) {
      console.error("🚨 HATA:", err)
      setError("Beklenmeyen bir hata oluştu.")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
