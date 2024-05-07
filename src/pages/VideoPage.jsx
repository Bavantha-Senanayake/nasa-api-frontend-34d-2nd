import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPopup from '../components/VideoPopup';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  // Function to fetch NASA images when component mounts
  useEffect(() => {
    handleDefaultSearch();
  }, []); // Empty dependency array ensures the effect runs only once

  const handleDefaultSearch = async () => {
    try {
      const defaultResponse = await axios.get(
        `https://images-api.nasa.gov/search?q=nasa&media_type=video`
      );
      setSearchResults(defaultResponse.data.collection.items);
      setError(null);
    } catch (error) {
      setSearchResults([]);
      setError('Error fetching default search results. Please try again.');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${query}&media_type=video`
      );
      setSearchResults(response.data.collection.items);
      setError(null);
    } catch (error) {
      setSearchResults([]);
      setError('Error fetching search results. Please try again.');
    }
  };

  const handleThumbnailClick = async (result) => {
    const jsonHref = result.href;

    try {
      const jsonResponse = await axios.get(jsonHref);
      console.log('JSON Response:', jsonResponse.data);

      if (jsonResponse.data && jsonResponse.data.length > 0) {
        const videoUrl = jsonResponse.data[0];
        setSelectedVideoUrl(videoUrl);
        setShowVideoPopup(true);
        setError(null);
      } else {
        setError('No video URL found.');
      }
    } catch (error) {
      console.error('Error fetching JSON response:', error);
      setError('Error fetching JSON response. Please try again.');
    }
  };

  const handleClosePopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8"  style={{ backgroundImage: 'url(/assets/pexels-sheenawood-574115.jpg)' }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search query"
            className="px-4 py-2 w-2/5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
            <button
            onClick={handleSearch}
            className="ml-4 px-6 py-2 bg-cyan-900 text-white font-semibold rounded-lg hover:bg-cyan-800 focus:outline-none"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((result, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={result.links[0].href}
                alt={result.data[0].title}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => handleThumbnailClick(result)}
              />
              <div className="p-4">
                <p className="text-xl font-semibold mb-2">{result.data[0].title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showVideoPopup && <VideoPopup videoUrl={selectedVideoUrl} onClose={handleClosePopup} />}
    </div>
  );
};

export default SearchPage;
