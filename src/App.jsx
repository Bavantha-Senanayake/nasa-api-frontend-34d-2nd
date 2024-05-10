import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApodPage from './pages/ApodPage'
import VedioPage from './pages/VideoPage'
import VideoPlayerPage from './pages/VideoPlayer'
import ImageVedioAudio from './pages/ImageVedioAudio'
import AudioPage from './pages/AudioPage'
import ImagePage from './pages/Image-Page'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs' 
import Login from './pages/LoginSignUp'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Astroid from './pages/Astroid'
const App = () => {
  return (
    <div classname='app'>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apod' element={<ApodPage />} />
        <Route path='/vedios' element={<VedioPage />} />
        <Route path='/vedio' element={<VideoPlayerPage />} />
        <Route path='/image-vedio-audio' element={<ImageVedioAudio />} />
        <Route path='/images' element={<ImagePage />} />
        <Route path='/audios' element={<AudioPage />} />
         <Route path='/about' element={<AboutUs />} />  
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/astroid' element={<Astroid />} />
         </Routes>
    </div>
  )
}

export default App
