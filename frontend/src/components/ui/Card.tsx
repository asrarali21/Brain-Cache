import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FileText, Share2Icon, Trash2, MoreVertical } from 'lucide-react'
import React from 'react'


function Card() {
     

    const fetchData =async ()=>{
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/content/getContent`, {withCredentials:true})
      return response.data.data
    }
  

    const {data ,isLoading , error}= useQuery({
      queryKey:["Content data"],
      queryFn:fetchData,
    })
      console.log(data);

        if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 h-64 animate-pulse">
            <div className="p-4 space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

    if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Error loading content. Please try again.</p>
      </div>
    )
  }
        if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No content found. Add your first content!</p>
      </div>
    )
  }

  return (
    <>
{data.map((item: any)=>(
  <div className='bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden'>
      {/* Header */}
      <div className='flex justify-between items-center p-4 border-b border-gray-100'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-blue-50 rounded-lg'>
            <FileText/>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900'>{item.title}</h3>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
            <Share2Icon className='h-4 w-4 text-gray-500 hover:text-gray-700'/>
          </button>
          <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
            <Trash2 className='h-4 w-4 text-gray-500 hover:text-red-500'/>
          </button>
          <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
            <MoreVertical className='h-4 w-4 text-gray-500'/>
          </button>
        </div>
      </div>

       

      {/* Content */}
      <div className='p-4 space-y-4'>
        {/* YouTube Video */}
        <div className='rounded-lg overflow-hidden'>
          <iframe 
            className='w-full aspect-video' 
            src="https://www.youtube.com/embed/EJ2gkL4D54A?si=KkfCaTgSABy8_y4v" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>

         
        {/* Twitter Embed */}
        <div className='rounded-lg border border-gray-200 p-4 bg-gray-50'>
          <blockquote className="twitter-tweet">
            <p lang="fr" dir="ltr">
              MACROHARD <a href="https://t.co/51LOVha6Ee">pic.twitter.com/51LOVha6Ee</a>
            </p>
            &mdash; Elon Musk (@elonmusk) 
            <a href="https://twitter.com/elonmusk/status/1975252043385479671?ref_src=twsrc%5Etfw">
              October 6, 2025
            </a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>

        {/* Tags */}
        <div className='flex gap-2 flex-wrap'>
          <span className='px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full'>{item.tags}</span>
        </div>
      </div>
    </div>
))}
    </>

  )
}

export default Card
