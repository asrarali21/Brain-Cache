import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { 
  Home, 
  BookMarked, 
  Tag, 
  Share2, 
  Settings, 
  User,
  Brain,
  Search,
  Archive,
  Twitter,
  Youtube,
  FileText
} from 'lucide-react'

function AppSidebar() {
  // Navigation items
  const navigationItems = [
    {
      title: "Tweet",
      icon: Twitter,
      url: "/dashboard",
    },
    {
      title: "You Tube",
      icon: Youtube,
      url: "/content",
    },
    {
      title: "Document",
      icon: FileText,
      url: "/tags",
    },
    {
      title: "Links",
      icon: Share2,
      url: "/shared",
    },
    {
      title: "Search",
      icon: Search,
      url: "/search",
    },
    {
      title: "Archive",
      icon: Archive,
      url: "/archive",
    },
  ]

  const accountItems = [
    {
      title: "Login",
      icon: User,
      url: "/profile",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">BrainCache</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-gray-500">
          © 2024 BrainCache
        </div>
      </SidebarFooter>
     
    </Sidebar>
  )
}

export default AppSidebar
