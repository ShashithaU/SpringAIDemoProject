import React, { useState } from "react";

export default function ImageGeneretorComponent() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <input
          className="w-full border border-gray-300 rounded-md px-4 py-2 my-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          type="text"
          placeholder="Enter image description..."
        />

        <div className="text-center my-6"></div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Generate Image
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="aspect-square bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"></div>
        <div className="aspect-square bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"></div>
        <div className="aspect-square bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"></div>
        <div className="aspect-square bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"></div>
      </div>
    </>
  );
}
