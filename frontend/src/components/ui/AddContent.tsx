import { CircleX } from 'lucide-react'
import React from 'react'

function AddContent({ open , onclose }) {
  if (!open) return null

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md rounded-lg bg-white shadow-lg p-8">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          onClick={onclose}
          aria-label="Close"
        >
          <CircleX size={24} />
        </button>
        <h2 className="mb-6 text-xl font-semibold text-gray-800 text-center">Add New Content</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Link</label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Link"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Add Content
          </button>
        </form>
      </div>
    </div>
  )
}


export default AddContent
