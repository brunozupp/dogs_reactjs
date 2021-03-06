import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import User from './Components/User/User';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './Contexts/UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile/UserProfile';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="account/*" element={<User />} />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
