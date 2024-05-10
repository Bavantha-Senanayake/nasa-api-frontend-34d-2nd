import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import SlideShow from '../components/SlideShow';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/assets/pexels-sheenawood-574115.jpg)' }}>
        <div>
          {/* Slide show */}
          <SlideShow />
        </div>
        <div className="container mx-auto mt-16 px-4 py-16 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to="/apod"> {/* Link to APOD page */}
                <img src="../assets/MoonMercMonaco_jacques_f42.jpg" alt="Article 1" className="w-full h-64 object-cover" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Astronomy Picture Of the Day</h3>
                <p className="text-gray-700">Explore the wonders of the universe with the Astronomy Picture of the Day.</p>
              </div>
            </div>
            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
             <Link to="/image-vedio-audio"> {/* Link to Images page */}
              <img src="../assets/NHQ202403110006~thumb.jpg" alt="Article 2" className="w-full h-64 object-cover" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">NASA Images Gallery</h3>
                <p className="text-gray-700">Watch captivating videos from NASA's missions, launches, and discoveries.</p>
              </div>
            </div>
            {/* Article 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="../assets/shutterstock_2235358723.jpg" alt="Article 3" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Explore the Asteroids </h3>
                <p className="text-gray-700">Learn about the near earth objects and asteroids.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Home;
