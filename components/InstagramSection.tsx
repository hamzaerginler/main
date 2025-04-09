'use client'

import Image from 'next/image'

const images = [
  '/instagram/1.jpg',
  '/instagram/2.jpg',
  '/instagram/3.jpg',
  '/instagram/4.jpg',
  '/instagram/5.jpg',
  '/instagram/6.jpg',
  '/instagram/7.jpg',
  '/instagram/8.jpg',
  '/instagram/9.jpg',
  '/instagram/10.jpg',
]

export default function InstagramSection() {
  return (
    <div className="bg-white shadow-sm border p-4 mb-8 w-full">
      <h4 className="text-sm font-bold mb-4 uppercase text-center border-b pb-2">Instagram</h4>
      <div className="grid grid-cols-2 gap-2">
        {images.map((src, index) => (
          <div key={index} className="w-full aspect-square relative">
            <Image
              src={src}
              alt={`Instagram ${index + 1}`}
              fill
              className="object-cover rounded"
              sizes="96px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}