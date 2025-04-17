import { useEffect, useState } from "react"
import PostCard from "./PostCard"

interface Post {
  id: number
  title: string
  content: string
  date: string
  comments: number
  image: string
  alt: string
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts")
      const data = await res.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          comments={post.comments}
          image={post.image}
          content={post.content}
          alt={post.alt}
        />
      ))}
    </div>
  )
}
