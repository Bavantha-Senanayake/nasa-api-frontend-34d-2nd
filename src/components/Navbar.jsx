import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from '../../src/pages/LoginSignUp'; // Import the login component

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false); // State to manage login popup visibility
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [userName, setUserName] = useState(''); // State to hold user's name
    const [userFirstName, setUserFirstName] = useState(''); // State to hold user's first name
    const location = useLocation();

    useEffect(() => {
        // Check if the user's first name exists in local storage
        const firstName = localStorage.getItem('firstName');
        if (firstName) {
            setUserFirstName(firstName);
            setIsLoggedIn(true);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLoginPopup = () => {
        setIsLoginOpen(!isLoginOpen); // Toggle the state to open/close the login popup
    };

    // Function to handle successful login
    const handleLoginSuccess = (name, firstName) => {
        setIsLoggedIn(true); // Set the login status to true
        setUserName(name); // Set the user's name
        setUserFirstName(firstName); // Set the user's first name
        localStorage.setItem('firstName', firstName); // Store the user's first name in local storage
    };

    // Function to handle logout
    const handleLogout = () => {

        const confirmLogout = window.confirm('Are you sure you want to log out?');

        if (confirmLogout) {
            setIsLoggedIn(false); // Set the login status to false
            setUserName(''); // Clear the user's name
            setUserFirstName(''); // Clear the user's first name
            localStorage.removeItem('firstName');
        }

    };
    // Function to handle closing the login popup
const handleCloseLoginPopup = () => {
    setIsLoginOpen(false); // Close the login popup
};



    return (
        <nav className="fixed top-0 left-0 right-0 z-10 w-full bg-cyan-950 backdrop-blur-lg">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo and NASA API icon */}
                <div className="flex items-center">
                    {/* NASA API icon */}
                    <div className="rounded-full p-1 mr-2">
                        <img src="/assets/logo-nasa.png" alt="NASA" className="h-12" />
                    </div>
                    {/* Logo */}
                
                </div>

                {/* Responsive menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                    {/* Dropdown menu */}
                    {menuOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-cyan-950 text-white w-48 py-2 shadow-lg">
                            <Link to="/home" className={`block px-4 py-2 hover:bg-gray-800 ${location.pathname === '/apod' ? 'bg-white text-black' : ''}`}>Home</Link>
                            <Link to="/apod" className={`block px-4 py-2 hover:bg-gray-800 ${location.pathname === '/apod' ? 'bg-white text-black' : ''}`}>Astronomy</Link>
                            <Link to="/image-vedio-audio" className={`block px-4 py-2 hover:bg-gray-800 ${location.pathname === '/image-vedio-audio' ? 'bg-white text-black' : ''}`}>Media</Link>
                            <Link to="/about" className={`block px-4 py-2 hover:bg-gray-800 ${location.pathname === '#' ? 'bg-white text-black' : ''}`}>About Us</Link>
                            <Link to="/contact" className={`block px-4 py-2 hover:bg-gray-800 ${location.pathname === '#' ? 'bg-white text-black' : ''}`}>Contact</Link>
                        </div>
                    )}
                </div>

                {/* Navigation links (visible on non-responsive screens) */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link to="/home" className={`text-white text-base hover:border-b-2 border-white ${location.pathname === '/' ? 'border-b-2 border-white pt' : ''}`}>Home</Link>
                    <Link to="/apod" className={`text-white text-base hover:border-b-2 border-white ${location.pathname === '/apod' ? 'border-b-2 border-white' : ''}`}>Astronomy</Link>
                    <Link to="/image-vedio-audio" className={`text-white text-base hover:border-b-2 border-white ${location.pathname === '/image-vedio-audio' ? 'border-b-2 border-white' : ''}`}>Media</Link>
                    <Link to="/about" className={`text-white text-base hover:border-b-2 border-white ${location.pathname === '/about' ? 'border-b-2 border-white' : ''}`}>About Us</Link>
                    <Link to="/contact" className={`text-white text-base hover:border-b-2 border-white ${location.pathname === '/contact' ? 'border-b-2 border-white' : ''}`}>Contact</Link>
                    
                </div>

                {/* Other details (visible on non-responsive screens) */}
                <div className="hidden md:flex items-center space-x-4">
                    
                    {isLoggedIn ? (
                        <>
                            <span className="text-white">Hi  {userFirstName}</span>
                            {/* Render the logout button when logged in */}
                            <button className="text-white hover:text-gray-300" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        // Render the login button when not logged in
                        <button className="text-white hover:text-gray-300" onClick={toggleLoginPopup}>
                            Login
                        </button>
                    )}
                </div>
            </div>
            {/* Render the login popup based on the state */}
            {isLoginOpen && <Login onSuccess={handleLoginSuccess} onClose={handleCloseLoginPopup} />}
        </nav>
    );
}

export default Navbar;
