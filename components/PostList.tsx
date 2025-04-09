// components/PostList.tsx
import { useEffect, useState } from 'react'
import PostCard from './PostCard'

interface Post {
  id: number;
  title: string;
  date: string;
  comments: number;
  image: string;
  alt: string;
  content: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await import('../app/data/posts.json');
      setPosts(res.default);
    };

    fetchPosts();
  }, []);

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
          alt={post.alt}  // alt alanını da geçiriyoruz
        />
      ))}
    </div>
  );
}
