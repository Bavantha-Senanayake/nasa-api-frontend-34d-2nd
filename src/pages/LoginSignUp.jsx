import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests


const Login = ({ onSuccess, onClose }) => {
  // State to hold user input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend endpoint for login
      
      const response = await axios.post('https://nasa-api-backend-3rd-2nd.onrender.com/api/user/login', { email, password });
      console.log('Login Successful:', response.data);
      console.log('Username:', response.data.firstname);

      // Call the onSuccess function with the username received in the response
      onSuccess(response.data.username, response.data.firstname);

      // Clear input fields after successful login
      setEmail('');
      setPassword('');

      // Close the login popup
      onClose();
      
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="bg-white  w-2/5 h-3/6 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          
          <label className="block text-center text-lg text-gray-700  font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow  text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-center text-gray-700 text-lg font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center ">
          <button
            className="bg-cyan-950 w-3/5  hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          
        </div>
        <br></br>
        <p className='text-center'>
        Don't have an account? <a href="/signup" className="text-cyan-950 underline">Sign Up</a>
      </p>
      </form>
     
    </div>
  );
};

export default Login;
