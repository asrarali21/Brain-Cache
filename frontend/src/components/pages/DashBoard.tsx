import React, { useState } from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { PlusIcon, Share2Icon } from 'lucide-react'
import { Button } from '../ui/button'
import Card from '../ui/Card'
import AddContent from '../ui/AddContent'
import AppSidebar from '../ui/AppSidebar'


function DashBoard() {
     const [openModel ,setOpenModel] = useState(false)
  return (
    <div>
         <>
         
  <div className='flex justify-end m-4'>
   <Button  className='mr-3 cursor-pointer'><span><Share2Icon/></span> Share Brain</Button>
   <Button className='cursor-pointer' onClick={()=>setOpenModel(true)} ><span ><PlusIcon/></span>Add Content</Button>
  </div>
  <div>
   <Card/>
  </div>
   <AddContent open={openModel} onclose={()=>setOpenModel(false)}  />
   </>
    </div>
  )
}

export default DashBoard
