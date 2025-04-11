import fs from 'fs/promises';
import path from 'path';
import { apiPost } from "../database";
 
export async function GET() {
  try {
    // JSON dosyasını oku
    const filePath = path.join(process.cwd(), 'app/data/posts.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const posts = JSON.parse(fileContent);
    // Her makaleyi veritabanına ekle
    const results = [];
    for (const post of posts) {
      const query = `
        INSERT INTO articles(title, date, comments, image, alt, content) 
        VALUES(?, ?, ?, ?, ?, ?)
      `;
      const values = [
        post.title,
        post.date,
        String(post.comments), // Number değerini String'e çevir (SQL'e uygun olması için)
        post.image,
        post.alt,
        post.content
      ];
      try {
        await apiPost(query, values);
        results.push({ id: post.id, status: 'success' });
      } catch (err) {
        results.push({ id: post.id, status: 'error', error: String(err) });
      }
    }
    return Response.json({ 
      message: "Import işlemi tamamlandı", 
      results 
    });
  } catch (error) {
    console.error('Import hatası:', error);
    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}