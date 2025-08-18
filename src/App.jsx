import React from 'react'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import { Routes, Route } from 'react-router-dom';
import Category  from './Pages/Category/Category';
import { SearchResults } from './Pages/SearchResults/SearchResults';
import MovieDetailPage from './Pages/MovieDetailPage/MovieDetailPage';


const App = () => {
  return (
 <div>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:genre' element={<Category/>} />
      <Route path="/search" element={<SearchResults/>} />
      <Route path="/movie/:id" element={<MovieDetailPage/>} />
    </Routes>
    </div>

  )
}

export default App