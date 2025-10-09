import { FileText, Share2Icon, Trash2, MoreVertical } from 'lucide-react'
import React from 'react'

function Card() {

  


  return (
    <div className='bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden'>
      {/* Header */}
      <div className='flex justify-between items-center p-4 border-b border-gray-100'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-blue-50 rounded-lg'>
            <FileText/>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900'>Project Ideas</h3>
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
          <span className='px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full'>Ideas</span>
          <span className='px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full'>Projects</span>
          <span className='px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full'>Innovation</span>
        </div>
      </div>
    </div>
  )
}

export default Card
