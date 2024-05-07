import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=QShrtqzJCStV7o9JVDleyuLN4t6XswCIYHf5CQcK&count=10`
        );
        setImageData(response.data);
        setError(null);
      } catch (error) {
        setError("Error fetching data. Please try again.");
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {error && <p className="text-red-500">{error}</p>}
      {imageData.map((item) => (
        <div key={item.date} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={item.url} alt={item.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
