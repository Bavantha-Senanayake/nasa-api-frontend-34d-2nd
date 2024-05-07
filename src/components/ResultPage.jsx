import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultPage = ({ link }) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(link);
        setResult(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching result:', error);
        setResult(null);
        setError('Error fetching result. Please try again.');
      }
    };

    fetchData();
  }, [link]);

  return (
    <div>
      <h1>Result Page</h1>
      {error && <p>{error}</p>}
      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
