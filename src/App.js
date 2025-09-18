import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MainPage from './components/mainPage/MainPage';
import NavHeader from './components/navigation/NavHeader';
import NavFooter from './components/navigation/NavFooter';
import { Navigate, Route, Routes } from 'react-router-dom';
import BlogPage from './components/blogPage/BlogPage';
import FloatingContactBar from './components/general/floatingContactBar/FloatingContactBar';
import Post from './components/blogPage/posts/Post';

function App() {
  return (
    <main >
        <NavHeader></NavHeader>
        <div>
          <Routes>
              <Route path='/' element={ <MainPage /> } />
              <Route path='/blog' element={ <BlogPage /> } />
              <Route path="/post/:id" element={ <Post /> } />
              <Route path='/*' element={ <MainPage /> } />
              
          </Routes>
        </div>
        <FloatingContactBar></FloatingContactBar>
        <NavFooter></NavFooter>
    </main>
  );
}

export default App;
