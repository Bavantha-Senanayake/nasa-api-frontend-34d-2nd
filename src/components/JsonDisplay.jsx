import React from 'react';

const JsonDisplay = ({ jsonData }) => {
  return (
    <div>
      <h2>JSON Response</h2>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default JsonDisplay;
