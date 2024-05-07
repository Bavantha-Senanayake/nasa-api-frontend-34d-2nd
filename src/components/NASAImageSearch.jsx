import React, { useState } from "react";
import axios from "axios";


const NASAImageSearch = () => {
    
  const [date, setDate] = useState("");
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);
  

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
       
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=QShrtqzJCStV7o9JVDleyuLN4t6XswCIYHf5CQcK`
      );
      setImageData(response.data);
      setError(null);
    } catch (error) {
      setImageData(null);
      setError("Error fetching data. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {imageData && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">{imageData.title}</h2>
          <img
            src={imageData.url}
            alt={imageData.title}
            className="w-full rounded-lg"
          />
          <p className="mt-2">{imageData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default NASAImageSearch;
