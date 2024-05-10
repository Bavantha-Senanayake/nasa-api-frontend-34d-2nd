import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-20 mx-auto px-4 py-8 w-3/5">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">We'd love to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to contact us using the form below:</p>
        <form className="mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="border-2 border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="border-2 border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message:</label>
            <textarea id="message" name="message" rows="5" className="border-2 border-gray-300 rounded-md p-2 w-full"></textarea>
          </div>
          <button type="submit" className="bg-cyan-950 text-white px-4 py-2 rounded-md hover:bg-cyan-800 transition-colors">Send Message</button>
        </form>
        <p className="text-lg">Alternatively, you can email us directly at: nasaapibs@email.com</p>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
