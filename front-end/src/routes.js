import React from 'react'
import {Routes,Route} from 'react-router-dom' //react-router-dom@6.0.0-beta.0

import Main from './pages/main/main.js'
import Upload from './pages/upload/upload'
import Login from './pages/login/login'
import Register from './pages/register/register'
import LikedMemes from './pages/likedmemes/likedmemes'

const PrivateRoute = props => {
    const vT = localStorage.getItem("token")
    return vT ? <Route {...props} /> : window.location.href = '/login'
}

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <PrivateRoute path="/upload" element={<Upload/>} />
            <PrivateRoute path="/liked" element={<LikedMemes/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    )
}