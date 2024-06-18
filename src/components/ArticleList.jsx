import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="articles">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          {article.urlToImage===null ? null : <img src={article.urlToImage} alt={article.title} className="article-image" />}
          <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <Link to={`/article/${index}`} className="article-link">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;