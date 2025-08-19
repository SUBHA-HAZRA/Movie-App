import React from 'react';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Category from './Pages/Category/Category';
import { SearchResults } from './Pages/SearchResults/SearchResults';
import MovieDetailPage from './Pages/MovieDetailPage/MovieDetailPage';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <ScrollToTop/>

      {/* Main Content - flex-grow pushes footer down */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:genre" element={<Category />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default App;
