import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const NewsPage = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', // Change to your preferred country code
            apiKey: '08cbcc7d648f4c658ccbc8e43078953a' // Replace with your News API key
          }
        });
        console.log(response.data); // Log the response data for debugging
        setNewsArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        console.error(err); // Log the error for debugging
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
    fontFamily: 'Arial, sans-serif'
  };

  const hotTopicsStyle = {
    backgroundColor: '#004080',
    color: '#fff',
    padding: '10px',
    fontWeight: 'bold'
  };

  const searchStyle = {
    marginLeft: 'auto',
    padding: '5px 10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const trendingContainerStyle = {
    width: '100%',
    padding: '0 20px'
  };

  const dateStyle = {
    fontSize: '14px',
    color: '#666',
    marginRight: '10px'
  };

  const titleStyle = {
    fontSize: '16px',
    color: '#333',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  // Function to get today's date formatted as a string
  const getTodaysDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };

  return (
    <div style={containerStyle}>
      <div style={hotTopicsStyle}>CURRENT NEWS</div>
      <div style={trendingContainerStyle}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <Slider {...settings}>
            {newsArticles.map((article, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <p style={dateStyle}>{getTodaysDate()}</p>
                <h3 style={titleStyle}>{article.title}</h3>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <input type="text" placeholder="SEARCH ..." style={searchStyle} />
    </div>
  );
};

export default NewsPage;
