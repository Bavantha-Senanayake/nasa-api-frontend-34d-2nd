import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageSearchPage = () => {
  const [query, setQuery] = useState('nasa'); // Default search query
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${query}&media_type=image`
      );
      setSearchResults(response.data.collection.items);
      setError(null);
    } catch (error) {
      setSearchResults([]);
      setError('Error fetching search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
      setError('Please enter a search query.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8" style={{ backgroundImage: 'url(/assets/pexels-sheenawood-574115.jpg)' }}>
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
        {loading && <p className="text-gray-600 text-center">Loading...</p>}
        {!loading && searchResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.map((result, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={result.links[0].href} alt={result.data[0].title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <p className="text-xl font-semibold mb-2">{result.data[0].title}</p>
                  <p className="text-gray-600">{result.data[0].description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSearchPage;
