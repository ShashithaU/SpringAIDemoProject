import { useState } from 'react'
import AiServices from '../services/AiServices'

export default function CreateRecipeComponent() {

    const {apiClient} = AiServices()
    const [Recipe,setRecipeData] = useState({
        ingredients : "",
        dietary :"",
        cuisine:"any"
    })

    const [loading,serLoading] = useState(false)
    const [error,setError] = useState("")
    const [receipeResponse,generatedRecipe] = useState("")

    

  return (
   <>
   <div className='flex flex-col gap-4 mx-12'>
   
   <input className='border-2 py-2 rounded-md px-3 border-blue-300 focus:border-blue-500' type="text" placeholder='Enter ingredients (comma sepereted)' value={Recipe.ingredients} onChange={(e) => setRecipeData({...Recipe, ingredients: e.target.value})}/>
   <input className='border-2 py-2 rounded-md px-3 border-blue-300 focus:border-blue-500' type="text" placeholder='' value={Recipe.cuisine} onChange={(e) => setRecipeData({...Recipe, cuisine: e.target.value})}/>
   <input className='border-2 py-2 rounded-md px-3 border-blue-300 focus:border-blue-500' type="text" placeholder='Enter dietary restrictions' value={Recipe.dietary} onChange={(e) => setRecipeData({...Recipe, dietary: e.target.value})}/>
   </div>
   </>
  )
}
