import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import AppSidebar from './components/ui/AppSidebar.tsx'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <SidebarProvider>
      <QueryClientProvider client={queryClient}>
       <App />
      </QueryClientProvider>
    </SidebarProvider>
  </BrowserRouter>,
  </StrictMode>
)
