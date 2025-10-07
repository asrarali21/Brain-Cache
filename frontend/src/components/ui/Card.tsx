import { File, FileText, Share2Icon, Trash2 } from 'lucide-react'
import React from 'react'

function Card() {

  return (
     <div className='bg-white rounded-md shadow-md outline-solid max-w-72'>
       <div className='flex justify-between items-center'>
          <div className='flex  p-1.5'>
            <FileText className='pr-2 text-gray-500'/>
            <p className=''>Project Ideas</p>
          </div>
            <div className='flex '>
                <Share2Icon className='pr-1 text-gray-500'/>
                <Trash2 className='pr-1 text-gray-500'/>
            </div>
       </div>
       <div className='p-2 pt-4'>
          {/* <iframe className='w-full' width="560" height="315" src="https://www.youtube.com/embed/EJ2gkL4D54A?si=KkfCaTgSABy8_y4v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          <blockquote className="twitter-tweet"><p lang="fr" dir="ltr">MACROHARD <a href="https://t.co/51LOVha6Ee">pic.twitter.com/51LOVha6Ee</a></p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1975252043385479671?ref_src=twsrc%5Etfw">October 6, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       </div>
     </div>
  )
}

export default Card
