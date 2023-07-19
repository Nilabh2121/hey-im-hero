import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/Tags.jsx';
import Users from "./pages/Users/Users.jsx";
import UserProfile from "./pages/UserProfile/UserProfile";

import Card from './Card';
import Cards from './Cards';
import PaymentSuccess from './PaymentSuccess';
import SocialMediaPage from './components/SocialMediaPage';
import LinkForm from './components/LinkForm';
import FriendButton from './components/FriendButton';
import PostItem from './components/PostItem';
import CreatePostForm from './components/CreatePostForm';
import Socials from './pages/Socials'



 
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/Auth' element={<Auth />}  />
        <Route path='/' element={<Home />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/AskQuestion' element={<AskQuestion />} />
        <Route path='/Questions/:id' element={<DisplayQuestion />} />
        <Route path='/Tags' element={<Tags />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Users/:id' element={<UserProfile />} />
        <Route path="/Paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/SocialMediaPage" element={<SocialMediaPage />} />
        <Route path="/LinkForm" element={<LinkForm />} />
        <Route path="/FriendButton" element={<FriendButton />} />
        <Route path="/PostItem" element={<PostItem />} />
        <Route path="/CreatePstForm" element={<CreatePostForm />} />
        <Route path="/Socials" element={<Socials />} />

        
    </Routes>
  )
}

export default AllRoutes
