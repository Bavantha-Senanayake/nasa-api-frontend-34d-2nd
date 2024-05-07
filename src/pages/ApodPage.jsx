import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// New ImageItem component
const ImageItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={item.url} alt={item.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-700">{item.explanation}</p>
      </div>
    </div>
  );
};

const NASAImageSearch = () => {
  const [date, setDate] = useState("");
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);
  
  const today = new Date().toISOString().split('T')[0]; // Get today's date in the format YYYY-MM-DD

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

  // Function to handle reset button click
  const handleReset = () => {
    setDate("");
    setImageData(null);
    setError(null);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="mb-4 flex flex-col items-center text-3xl font-semibold text-white">ASTRONOMY PICTURE OF THE DAY</div>
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col items-center">
        <p className="mb-4 flex flex-col items-center text-white text-xl">Enter a date to search for an image</p>
        <p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-4 py-2 mr-2 " max={today}
        />
        <button
          type="submit"
          className="bg-cyan-950 text-white px-4 py-2 rounded h-11 w-24  hover:bg-cyan-800 focus:outline-none focus:bg-cyan-800"
        >
          Search
        </button>
        <button
          type="button" // Specify type as button to prevent form submission
          onClick={handleReset} // Handle reset button click
          className="bg-white text-cyan-950 font-semibold px-4 py-2 rounded h-11 w-24 ml-2   hover:bg-slate-300 focus:outline-none focus:bg-slate-300" // Style the button
        >
          Reset
        </button>
        </p>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {imageData && (
        <div>
          <ImageItem item={imageData} /> {/* Using ImageItem component */}
        </div>
      )}
    </div>
  );
};

const ImageGallery = () => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=QShrtqzJCStV7o9JVDleyuLN4t6XswCIYHf5CQcK&count=9`
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
        <ImageItem key={item.date} item={item} /> 
      ))}
    </div>
  );
};

const ApodPage = () => {
  
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: 'url(/assets/pexels-sheenawood-574115.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>   <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold text-center mb-8">NASA Image Search</h1>
          <NASAImageSearch />
          <ImageGallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApodPage;
