// AudioPopup.jsx
import React from 'react';

const AudioPopup = ({ audioUrl, audioTitle, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-red-600 hover:text-gray-800 z-50">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <audio className="w-96 h-96" controls autoPlay>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="p-4">
            <p className="text-xl font-semibold mb-2">{audioTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPopup;
