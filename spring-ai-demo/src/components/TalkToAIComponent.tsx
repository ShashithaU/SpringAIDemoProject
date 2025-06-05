import React, { useEffect, useState } from "react";
import AiServices from "../services/AiServices";

export default function TalkToAIComponent() {
  const { apiClient } = AiServices();

  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [loeading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  //call response

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("ask-ai", {
        params: {
          prompt: userInput,
        },
      });
      setResponse(response.data);
    } catch (err) {
      setError("Faild to fetch data");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-2xl w-full mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Talk to AI Assistant
        </h2>

        <div className="relative mb-8">
          <input
            className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm text-gray-700"
            type="text"
            placeholder="Ask something..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300"
            onClick={fetchData}
            disabled={loeading}
          >
            {loeading ? "Thinking..." : "Send"}
          </button>
        </div>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="w-full"></div>
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Response:</h3>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 min-h-[120px] w-full shadow-inner">
          {loeading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-pulse text-blue-600">
                Processing your request...
              </div>
            </div>
          ) : (
            <p className="text-gray-800 whitespace-pre-wrap">
              {response || "Response will appear here"}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
