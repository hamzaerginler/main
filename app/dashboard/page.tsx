'use client'

import { useState } from "react"

export default function DashboardPage() {
  const [title, setTitle] = useState("")
  const [date,setDate] = useState("")
  const [comments,setComments] = useState("")
  const [image,setImage] = useState("")
  const [alt,setAlt] = useState("")
  const [content, setContent] = useState("")
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content,date,comments,image,alt}),
      headers: { "Content-Type": "application/json" },
    })

    const data = await res.json()

    if (res.ok) {
      setImage("")
      setTitle("")
      setContent("")
        setDate("")
        setComments("")
        setAlt("")
        alert("Post başarıyla eklendi")
    } else {
     
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Yeni Post Ekle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Başlık"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="İçerik"
          className="w-full border p-2 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
            type="text"
            placeholder="Tarih"
            className="w-full border p-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            />
        <input
            type="text"
            placeholder="Yorumlar"
            className="w-full border p-2 rounded"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
            />
        
        <input
            type="text"
            placeholder="Alt"
            className="w-full border p-2 rounded"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            required
            />
    
    
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Post Ekle
        </button>
        
      </form>
    </div>
  )
}
