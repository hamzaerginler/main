import { notFound } from "next/navigation"
import sqlite3 from "sqlite3"
import { open } from "sqlite"
import { FormEvent } from "react"

// Form gönderimi için Server Action oluşturalım
async function addComment(formData: FormData) {
  'use server';
  
  const postId = formData.get('post_id') as string;
  const name = formData.get('name') as string;
  const surname = formData.get('surname') as string;
  const comment = formData.get('comment') as string;
  
  // Veritabanı bağlantısı
  const db = await open({
    filename: "./profile.db",
    driver: sqlite3.Database,
  });
  
  // Yorumu kaydet
  await db.run(
    "INSERT INTO comments (post_id, name, surname, comment, created_at) VALUES (?, ?, ?, ?, ?)",
    postId,
    name,
    surname,
    comment,
    new Date().toISOString()
  );
  
  // Veritabanı bağlantısını kapat
  await db.close();
}

export default async function PostDetail({ params }: { params: { id: string } }) {
  // Server Component olarak veritabanı işlemlerini yapalım
  const db = await open({
    filename: "./profile.db",
    driver: sqlite3.Database,
  })

  // Verileri getir
  const post = await db.get("SELECT * FROM posts WHERE id = ?", params.id)
  if (!post) return notFound()

  const comments = await db.all(
    "SELECT * FROM comments WHERE post_id = ? ORDER BY created_at DESC",
    params.id
  )
  
  // Veritabanı bağlantısını kapat
  await db.close()

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.alt} className="mb-4 rounded" />
      <p className="text-gray-700 mb-6">{post.content}</p>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold mb-2">Yorumlar</h2>
      {/* Yorumları listele */}
      {comments.length > 0 ? (
        <ul className="space-y-4 mb-6">
          {comments.map((c) => (
            <li key={c.id} className="border p-4 rounded bg-gray-50 shadow-sm">
              <p className="font-bold text-blue-800">{c.name} {c.surname}</p>
              <p className="text-gray-500 text-sm italic">
                {new Date(c.created_at).toLocaleString("tr-TR", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
              <p className="mt-2">{c.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Henüz yorum yok.</p>
      )}
      {/* Server Action kullanan form */}
      <form action={addComment} className="space-y-4">
        {/* Gizli input ile post_id'yi form verilerine ekleyelim */}
        <input type="hidden" name="post_id" value={params.id} />
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="surname"
          placeholder="Soyadınız"
          required
          className="border p-2 w-full rounded"
        />
        <textarea
          name="comment"
          placeholder="Yorumunuz"
          required
          className="border p-2 w-full rounded h-24"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Yorum Gönder
        </button>
      </form>
    </div>
  )
}