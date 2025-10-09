import React, { useState } from 'react'
import { PlusIcon, Share2Icon } from 'lucide-react'
import { Button } from '../ui/button'
import Card from '../ui/Card'
import AddContent from '../ui/AddContent'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '../ui/sidebar'
import AppSidebar from '../ui/AppSidebar'

function DashBoard() {
  const [openModel, setOpenModel] = useState(false)
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <AppSidebar />
        <SidebarInset className="flex-1">
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center gap-2 px-4 bg-white border-b border-gray-200">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1" />
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Share2Icon className="h-4 w-4" />
                Share Brain
              </Button>
              <Button onClick={() => setOpenModel(true)} className="gap-2">
                <PlusIcon className="h-4 w-4" />
                Add Content
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Manage your brain cache content</p>
              </div>
              
              <div className="grid gap-6">
                <Card />
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
      
      <AddContent open={openModel} onclose={() => setOpenModel(false)} />
    </SidebarProvider>
  )
}

export default DashBoard
