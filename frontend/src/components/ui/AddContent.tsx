import { CircleX, Link, Type, Tag } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface ContentForm {
      title:string,
      link:string,
      tags:string,
      Description:string
}

interface AddContentProps {
  open: boolean;
  onclose: () => void;
}

function AddContent({ open, onclose }: AddContentProps) {
  if (!open) return null

    const {register , handleSubmit} = useForm<ContentForm>()


    const ContentMutation = useMutation({
      mutationFn:(Contentdata : ContentForm) => axios.post(`${import.meta.env.VITE_API_BASE_URL}/content/add` , Contentdata , {withCredentials:true}),
      onSuccess:(res)=>{
        console.log(res.data);
        
      },
      onError :(error)=>{
        console.log(error);
        
      }
    })

     function onSubmit(data:ContentForm){
      console.log(data);
         ContentMutation.mutate(data)
     }
    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-xl bg-white shadow-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Add New Content</h2>
          <button
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
            onClick={onclose}
            aria-label="Close"
          >
            <CircleX size={20} />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Title Field */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
              <Type className="h-4 w-4" />
              Title
            </label>
            <input
               {...register("title")}
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter a descriptive title"
            />
          </div>

          {/* Link Field */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
              <Link className="h-4 w-4" />
              Content Link
            </label>
            <input
              {...register("link")}
              type="url"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="https://example.com"
            
            />
            <p className="mt-1 text-xs text-gray-500">
              Supports YouTube, Twitter, articles, and more
            </p>
          </div>

          {/* Tags Field */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
              <Tag className="h-4 w-4" />
              Tags
            </label>
            <input
              {...register("tags")}
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="e.g., ideas, projects, inspiration"
            />
            <p className="mt-1 text-xs text-gray-500">
              Separate tags with commas
            </p>
          </div>

          {/* Description Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Description (Optional)
            </label>
            <textarea
              {...register("Description")}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Add notes or description about this content"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onclose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Add Content
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContent
