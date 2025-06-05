import React from 'react'

export default function TalkToAIComponent() {
  return (
    <div className="max-w-md w-full mx-auto">
      <div className="relative">
        <input 
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm" 
          type="text" 
          placeholder="Ask something..." 
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm">
          Send
        </button>
      </div>
    </div>
  )
}
