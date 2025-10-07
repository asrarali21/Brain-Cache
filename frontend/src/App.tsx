
import { PlusIcon, Share2Icon } from 'lucide-react'
import './App.css'
import AddContent from './components/ui/AddContent'
import { Button } from './components/ui/button'
import Card from './components/ui/Card'
import { useState } from 'react'
import { SidebarTrigger } from './components/ui/sidebar'

function App() {
  
    const [openModel ,setOpenModel] = useState(false)
  return (
   <>
   <SidebarTrigger/>
  <div className='flex justify-end m-4'>
   <Button  className='mr-3'><span><Share2Icon/></span> Share Brain</Button>
   <Button onClick={()=>setOpenModel(true)} ><span ><PlusIcon/></span>Add Content</Button>
  </div>
  <div>
   <Card/>
  </div>
   <AddContent open={openModel} onclose={()=>setOpenModel(false)}  />
   </>
  )
}

export default App
