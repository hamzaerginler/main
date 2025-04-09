'use client'

import PostItem from "./PostItem"
import InstagramSection from "./InstagramSection"

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/3 pl-4 md:pl-8">

      <div className="mb-8">
        <h3 className="font-semibold text-gray-800 text-lg mb-6 border border-gray-200 px-4 py-2 text-center">
          Recent Posts
        </h3>

        <div className="space-y-6 px-4 py-2 bg-gray-50 rounded">  
          <PostItem
            title="Dresden Green Vault robbery: Priceless diamonds stolen"
            date="NOVEMBER 21, 2019"
            imgSrc="/image/resim1.jpg"
          />
          <PostItem
            title="Cannabis legalisation: Does it lead to harder drug use?"
            date="NOVEMBER 20, 2019"
            imgSrc="/image/resim2.jpg"
          />
          <PostItem
            title="Why do billions of people still not have glasses?"
            date="NOVEMBER 19, 2019"
            imgSrc="/image/resim3.jpg"
          />
          <PostItem
            title="Is it better to drink cow’s milk or a dairy-free alternative?"
            date="NOVEMBER 18, 2019"
            imgSrc="/image/resim4.jpg"
          />
            <PostItem
            title="How we could sleep better -- in less time"
            date="NOVEMBER 18, 2019"
            imgSrc="/image/resim5.jpg"
          />

        </div>
        
      <div className="mb-8">
        <h3 className="font-semibold text-gray-800 text-lg mb-6 border border-gray-200 px-4 py-2 text-center">
          Popular Posts
        </h3>

        <div className="space-y-6 px-4 py-2 bg-gray-50 rounded">  
          <PostItem
            title="Dresden Green Vault robbery: Priceless diamonds stolen"
            date="NOVEMBER 21, 2019"
            imgSrc="/image/resim1.jpg"
          />
          <PostItem
            title="Cannabis legalisation: Does it lead to harder drug use?"
            date="NOVEMBER 20, 2019"
            imgSrc="/image/resim2.jpg"
          />
          <PostItem
            title="Why do billions of people still not have glasses?"
            date="NOVEMBER 19, 2019"
            imgSrc="/image/resim3.jpg"
          />
          <PostItem
            title="Is it better to drink cow’s milk or a dairy-free alternative?"
            date="NOVEMBER 18, 2019"
            imgSrc="/image/resim4.jpg"
          />
            <PostItem
            title="How we could sleep better -- in less time"
            date="NOVEMBER 18, 2019"
            imgSrc="/image/resim5.jpg"
          />
        </div>
        </div>
         
      </div>
      <InstagramSection />
    </aside>
  )
}
