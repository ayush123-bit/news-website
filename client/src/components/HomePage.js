import React, { useEffect, useState } from "react";
import './HomePage.css'; // CSS file for styling

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null); // State for selected article
  const [isModalOpen, setIsModalOpen] = useState(false); // State for dialog box visibility
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general'); // State for category

  // API Key and endpoint
  const API_KEY = "feeea273f0ea4313b2e163539eb7e68c"; // Replace with your actual API key

  const fetchNews = async (selectedCategory) => {
    const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&pageSize=5&apiKey=${API_KEY}`;
    try {
      const response = await fetch(NEWS_API_URL);
      const data = await response.json();
      if (data.status === "ok") {
        setNews(data.articles);
      } else {
        setError("Failed to fetch news");
      }
    } catch (err) {
      setError("An error occurred while fetching news");
    }
  };

  useEffect(() => {
    // Fetch news data based on selected category
    fetchNews(category);
  }, [category]);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to the News Website</h1>
        <p>Your source for the latest headlines</p>
      </header>

      {/* Category Filter */}
      <div className="category-filter">
        <label htmlFor="category-select">Filter by Category:</label>
        <select id="category-select" value={category} onChange={handleCategoryChange}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="health">Health</option>
          <option value="entertainment">Entertainment</option>
          <option value="science">Science</option>
        </select>
      </div>

      <section className="news-section">
        <h2>Latest News</h2>
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-card" key={index}>
                {/* Display image for the news card */}
                {article.urlToImage ? (
                  <img src={article.urlToImage} alt={article.title} className="news-image" />
                ) : (
                  <img src="default-placeholder.jpg" alt="No image available" className="news-image" />
                )}
                <div className="news-content">
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-source">Source: {article.source.name}</p>
                  <p className="news-date">
                    Published on: {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                  <button onClick={() => handleReadMore(article)} className="read-more">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for displaying detailed article */}
        {isModalOpen && selectedArticle && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-modal" onClick={handleCloseModal}>
                &times;
              </span>
              {/* Display image in the modal */}
              {selectedArticle.urlToImage ? (
                <img src={selectedArticle.urlToImage} alt={selectedArticle.title} className="modal-image" />
              ) : (
                <img src="default-placeholder.jpg" alt="No image available" className="modal-image" />
              )}
              <h3>{selectedArticle.title}</h3>
              <p><strong>Source:</strong> {selectedArticle.source.name}</p>
              <p><strong>Published on:</strong> {new Date(selectedArticle.publishedAt).toLocaleDateString()}</p>
              <p>{selectedArticle.content || selectedArticle.description}</p>
              <a href={selectedArticle.url} target="_blank" rel="noopener noreferrer" className="full-article">
                Full article link
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
