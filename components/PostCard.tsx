'use client'

import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import posts from '../app/data/posts.json'

interface PostProps {
  id : number
  title: string
  date: string
  comments: number
  image: string
  alt: string
  content: string
  
}

export default function PostCard({ title, date, comments, image, alt, content }: PostProps) {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 border-b">
      <h2 className="text-2xl text-gray-800 text-center">{title}</h2>

      <div className="text-sm text-gray-500 mt-1 mb-4 flex items-center gap-2">
        <span>{date}</span>
        <span>•</span>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span>{comments}</span>
        </div>
      </div>

      <div className="relative w-full h-96 mb-4">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover rounded"
        />
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">{content}</p>

      <div className="mt-4 flex justify-between items-center">
        <Button className="bg-blue-900 text-white px-4 py-2 text-sm rounded">
          Read More →
        </Button>

        <div className="text-gray-400 flex gap-4">
          <i className="fab fa-whatsapp" />
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-pinterest-p" />
        </div>
      </div>
    </div>
  )
}
