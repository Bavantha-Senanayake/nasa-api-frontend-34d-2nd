import React from 'react';

const VideoPlayerPage = ({ videoUrl, caption }) => {
  return (
    <div>
      <h1>Video Player</h1>
      <video controls autoPlay>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{caption}</p>
    </div>
  );
};

export default VideoPlayerPage;
