import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList/>} />
        <Route path="/post/:title" element={<BlogPostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
