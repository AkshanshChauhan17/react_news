import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail">
      <Link className='article-link' to={"/"}>Back</Link>
      <h1>{article.title}</h1>
      {article.urlToImage===null ? null : <img src={article.urlToImage} alt={article.title} className="article-detail-image" />}
      <p className="article-author"><strong>Author:</strong> {article.author || 'Unknown'}</p>
      <p className="article-published"><strong>Published At:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
      <p className="article-content">{article.content || article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">Read Full Article</a>
    </div>
  );
};

export default ArticleDetail;