import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">Welcome to our website! We are passionate about space exploration and astronomy, and we've created this platform to share the wonders of the universe with you.</p>
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg mb-4">Our mission is to bring the awe-inspiring beauty and scientific marvels of space closer to you. We aim to make space exploration accessible to everyone, providing a platform where you can explore stunning imagery captured by NASA's Astronomy Picture of the Day (APOD) API, browse through an extensive image gallery, and learn more about near-Earth asteroids through the Asteroids API.</p>
        <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
        <ul className="list-disc ml-8 mb-4">
          <li className="text-lg mb-2">View the daily Astronomy Picture of the Day</li>
          <li className="text-lg mb-2">Explore our curated image gallery</li>
          <li className="text-lg mb-2">Learn about near-Earth asteroids and their trajectories</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-lg mb-4">We'd love to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to contact us.</p>
        <p className="text-lg">Email: nasaapibs@email.com</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
