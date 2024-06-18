import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [categories] = useState(['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = '992661bf30e44a219047a6e969c30b25';
      const pageSize = 10; // number of articles per page
      const url = `https://newsapi.org/v2/top-headlines?category=${selectedCategory}&page=${currentPage}&pageSize=${pageSize}&apiKey=${apiKey}`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
    };

    fetchArticles();
  }, [selectedCategory, currentPage]);

  return (
    <Router>
      <div className="container">
        <h1 className="my-4">News Articles</h1>
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <Routes>
          <Route path="/" element={<>
            <ArticleList articles={articles} />
            <Pagination totalResults={totalResults} currentPage={currentPage} onPageChange={setCurrentPage} />
          </>} />
          <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;