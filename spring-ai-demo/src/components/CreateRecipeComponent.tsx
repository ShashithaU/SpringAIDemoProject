import { useState } from "react";
import AiServices from "../services/AiServices";

export default function CreateRecipeComponent() {
  const { apiClient } = AiServices();

  const [Recipe, setRecipeData] = useState({
    ingredients: "",
    dietary: "",
    cuisine: "any",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [receipeResponse, setRecipe] = useState();

  const genereteRecipe = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("recipe-creator", {
        params: {
          dietaryRestriction: Recipe.dietary,
          cuisine: Recipe.cuisine,
          ingredients: Recipe.ingredients,
        },
      });
      console.log(response);
      setRecipe(response.data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Recipe Generator
        </h2>

        <div className="flex flex-col gap-4 mb-6">
          <div className="space-y-2">
            <label
              htmlFor="ingredients"
              className="text-sm font-medium text-gray-700"
            >
              Ingredients
            </label>
            <input
              id="ingredients"
              className="w-full border-2 py-3 rounded-md px-4 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
              type="text"
              placeholder="Enter ingredients (comma separated)"
              value={Recipe.ingredients}
              onChange={(e) =>
                setRecipeData({ ...Recipe, ingredients: e.target.value })
              }
            />
          </div>

          <div className="space-y-2"></div>
          <label
            htmlFor="cuisine"
            className="text-sm font-medium text-gray-700"
          >
            Cuisine Type
          </label>
          <input
            id="cuisine"
            className="w-full border-2 py-3 rounded-md px-4 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
            type="text"
            placeholder="Enter cuisine type (or 'any')"
            value={Recipe.cuisine}
            onChange={(e) =>
              setRecipeData({ ...Recipe, cuisine: e.target.value })
            }
          />
        </div>

        <div className="space-y-2"></div>
        <label htmlFor="dietary" className="text-sm font-medium text-gray-700">
          Dietary Restrictions
        </label>
        <input
          id="dietary"
          className="w-full border-2 py-3 rounded-md px-4 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
          type="text"
          placeholder="Enter dietary restrictions"
          value={Recipe.dietary}
          onChange={(e) =>
            setRecipeData({ ...Recipe, dietary: e.target.value })
          }
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 mt-2 flex items-center justify-center"
        onClick={() => {
          genereteRecipe();
        }}
      >
        {loading ? (
          <span className="inline-flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Generate Recipe"
        )}
      </button>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Your Recipe</h3>
        <div className="bg-white p-4 rounded border border-gray-200 min-h-[120px] whitespace-pre-wrap">
          {receipeResponse ? receipeResponse : "Your recipe will appear here"}
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </>
  );
}
