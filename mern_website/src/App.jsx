import React from 'react'
import './app.scss'
import Home from '../src/pages/Home/home'
import Watch from '../src/pages/watch/watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
const App = () => {
  // HOW TO ADD LOGIN AND REGISTER
  const user = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Register />} />
          <Route exact path="/register" element={!user ? <Register /> : <Home />} />
          {/* <Route path="/login" element={!user ? <Login /> : <Home />} /> */}
          {user && (
            <>
              <Route exact path='/movies' element={<Home type="movie" />} />
              <Route exact path='/series' element={<Home type="series" />} />
              <Route exact path='/watch' element={<Watch />} />
              <Route exact path='/login' element={<Login />} />
            </>
          )
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
