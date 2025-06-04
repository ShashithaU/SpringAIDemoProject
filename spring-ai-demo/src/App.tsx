import { useState } from 'react'
import './App.css'
import ImageGeneretorComponent from './components/ImageGeneretorComponent'

function App() {
  const [operation, setOperation] = useState("Generate Image")

  return (
    <>
    <div className="flex flex-col items-center p-8">
      <div className="flex space-x-4 mb-6">
      <button 
        onClick={() => setOperation("Generate Image")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >Image Generator</button>
      <button 
        onClick={() => setOperation("Talk to AI")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >Ask AI</button>
      <button 
        onClick={() => setOperation("Create a Recipe")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >Recipe Generator</button>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">{operation}</h3>
    </div>

    <ImageGeneretorComponent/>
    </>
  )
}

export default App
