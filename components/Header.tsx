'use client'

import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b py-4 px-6 flex items-center justify-between bg-white shadow-sm">
      
      <div className="flex items-center gap-4 text-gray-500">
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-facebook-f" /></a>
      </div>

      
      

      
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Button className="bg-gray-900 text-white rounded px-4 py-2 text-sm">
          Subscribe
        </Button>
      </div>
    </header>
  )
}