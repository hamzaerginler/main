'use client'

import Image from 'next/image'

type Props = {
  title: string
  date: string
  imgSrc: string
}

export default function PostItem({ title, date, imgSrc }: Props) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 relative flex-shrink-0">
        <Image
          src={imgSrc}
          alt={title}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-800 leading-snug">{title}</h4>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  )
}