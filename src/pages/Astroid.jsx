import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NEOsPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [countv, setcountv] = useState('');
  const [neos, setNEOs] = useState([]);
  const [error, setError] = useState(null);

  const fetchNEOs = async (startDate, endDate) => {
    try {
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=QShrtqzJCStV7o9JVDleyuLN4t6XswCIYHf5CQcK`);
      const neoData = response.data?.near_earth_objects || {};
      console.log(neoData);
     setcountv((Object.values(neoData).flat().length));
      setNEOs(neoData);
    } catch (error) {
      setError(error);
      console.error('Error fetching NEOs:', error);
    }
  };

  useEffect(() => {
    fetchNEOs(startDate, endDate);
  }, [startDate, endDate]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Error</h1>
          <p className="text-lg text-red-600">{error.message}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{backgroundImage:  'url(/assets/pexels-sheenawood-574115.jpg)'}}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-20" >
        <h1 className="text-3xl mb-4 text-center text-3xl font-semibold text-white">NEAR EARTH ASTEROID INFORMATION</h1>
        <p className="mb-4 flex flex-col items-center text-white text-xl">Enter the Date to Find the Asteroids</p>
        <div className="flex mb-4  justify-center ">
          <label htmlFor="startDate" className="mr-2 text-white text-xl">Start Date  - </label>
          <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} className="border border-gray-300 rounded-md p-2" />
          <label htmlFor="endDate" className="mr-2 text-white text-xl ml-2 ml-8">End  Date    -</label>
          <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} className="border border-gray-300 rounded-md p-2" />
        
        </div>
        
        <h2 className="text-white text-xl text-center">Total Asteroids  is = {countv}</h2>
        <div div className="max-w-screen-xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {Object.keys(neos).map(date => (
            <div key={date}>
               
              <h2 className="text-xl font-bold mb-2"></h2>
              {neos[date].map(neo => (
                <div key={neo.id} className="border bg-white border-gray-300 rounded-md p-4 mb-4">
                  <h3 className="text-lg font-bold mb-2">Asteroid Name - {neo.name}</h3>
                  <p><strong>Asteroid ID - </strong> {neo.id}</p>
                  <p><strong>Estimated Diameter (km) - </strong> {neo.estimated_diameter.kilometers.estimated_diameter_min} - {neo.estimated_diameter.kilometers.estimated_diameter_max}</p>
                  <p><strong>Closest Approach Date - </strong> {neo.close_approach_data[0].close_approach_date_full}</p>
                  <p><strong>Miss Distance (km) - </strong> {neo.close_approach_data[0].miss_distance.kilometers}</p>
                  <a href='{neo.nasa_jpl_url}'style={{ color: 'blue' }}>Click to Find more...</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NEOsPage;
