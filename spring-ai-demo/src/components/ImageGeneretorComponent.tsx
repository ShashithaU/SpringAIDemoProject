import React, { useState } from "react";
import AiServices from "../services/AiServices";

export default function ImageGeneretorComponent() {
  const { apiClient } = AiServices();

  const [prompt, setPrompt] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const generateImage = async () => {
    try {
      const response = await apiClient.get("generete-image", {
        params: {
          prompt: prompt,
        },
      });
      const urls = response.data;
      setImageUrls(urls);
    } catch (error) {
      console.error("Error generating image : ", error);
    }
  };

  return (
    <div className="tab-content p-6 bg-gray-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Generate Image</h2>
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt for image"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={generateImage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Generate Image
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Generated ${index}`}
            className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
        ))}
        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div
            key={index + imageUrls.length}
            className="empty-image-slot h-48 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
          >
            <span className="text-gray-400">Image slot</span>
          </div>
        ))}
      </div>
    </div>
  );
}
