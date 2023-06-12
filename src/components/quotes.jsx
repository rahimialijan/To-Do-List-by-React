import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=design', {
          headers: {
            'X-Api-Key': 'A97aM/hoN3IkNx7V8aYilw==6wU6j7reIgvMoueo',
          },
        });
        const data = await response.json();
        setData(data[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchdata();
  }, []);
  if (isLoading) {
    return <div>Page is Loading...</div>;
  }

  if (isError) {
    return <div>data can not be fetched</div>;
  }

  return (
    <div className="quotes-container">
      <div className="quotes-wrapper">
        {isLoading ? (
          <div>Loading...</div>
        )
          : (
            <>
              <h3>
                {' '}
                <strong>Category:</strong>
                {' '}
                {data.category}
              </h3>
              <span>
                <strong>Author:</strong>
                {' '}
                {data.author}
              </span>
              <p>
                <strong>Quote:</strong>
                {' '}
                {data.quote}
              </p>
            </>
          )}
      </div>
    </div>
  );
};
export default Quotes;
