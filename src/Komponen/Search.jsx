import React, { useState } from 'react';

const API_KEY = "52449f0304f04c0aaed45cac5de1f995";

function Search() 
    {
  const [inputKeyword, setInputKeyword] = useState('');
  const [news, setNews] = useState([]);

  const handleSearch = () => {
    fetch(`https://newsapi.org/v2/top-headlines?q=${inputKeyword}&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setNews(response.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const cardBerita = (News) => (
    <div className="col-md-3 my-3" key={News.title}>
      <div className="card">
        <img src={News.urlToImage} className="card-img-top" alt={News.title} />
        <div className="card-body">
          <h5 className="card-title">{News.title}</h5>
          <p className="card-text">{News.description}</p>
          <a href={News.url} className="btn btn-primary">Read More..</a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <input
        type="text"
        className="Search-input"
        value={inputKeyword}
        onChange={(e) => setInputKeyword(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>

      <div className="Body-content">
        {news.map(b => cardBerita(b))}
      </div>
    </div>
  );
}

export default Search;
