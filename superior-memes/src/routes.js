import React from 'react'
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom' //react-router-dom@6.0.0-beta.0

import Main from './pages/main/main.js'

// const PrivateRoute = props => {
//     const vT = validToken()
//     return vT ? <Route {...props} /> : window.location.href = '/login'
// }

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
        </Routes>
    )
}