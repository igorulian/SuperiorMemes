import React from 'react'
import {Routes,Route} from 'react-router-dom' //react-router-dom@6.0.0-beta.0

import Main from './pages/main/main.js'
import Upload from './pages/upload/upload'
import Login from './pages/login/login'
import Register from './pages/register/register'

// const PrivateRoute = props => {
//     const vT = validToken()
//     return vT ? <Route {...props} /> : window.location.href = '/login'
// }

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/upload" element={<Upload/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    )
}