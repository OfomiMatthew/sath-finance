"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

const StockInfo = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'MJ3ZCR9NL6RP9J3O'; // Replace with your actual API key
  const symbol = 'AAPL'; // Example stock symbol

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );
        const data = await response.json();
        setStockData(data['Global Quote']);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="container">
      {/* Left Column: Image */}
      <div className="image-container">
        <Image
          src="/path-to-your-image.jpg" // Replace with your image path
          alt="Stock Market"
          layout="responsive"
          width={400}
          height={250}
        />
      </div>

      {/* Right Column: Real-Time Stock Data */}
      <div className="stock-data-container">
        <h2>Live Market Insights: Stay Ahead with Real-Time Data</h2>
        {loading ? (
          <p>Loading stock data...</p>
        ) : stockData ? (
          <div className="stock-info">
            <p>
              <strong>Symbol:</strong> {stockData['01. symbol']}
            </p>
            <p>
              <strong>Price:</strong> ${parseFloat(stockData['05. price']).toFixed(2)}
            </p>
            <p>
              <strong>Change:</strong> {stockData['09. change']} ({stockData['10. change percent']})
            </p>
            <p>
              <strong>Updated At:</strong> {stockData['07. latest trading day']}
            </p>
          </div>
        ) : (
          <p>Failed to load stock data.</p>
        )}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 20px;
        }
        .image-container {
          flex: 1;
        }
        .stock-data-container {
          flex: 1;
          /* background-color: #f5f5f5; */
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .stock-info p {
          margin: 10px 0;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default StockInfo;
