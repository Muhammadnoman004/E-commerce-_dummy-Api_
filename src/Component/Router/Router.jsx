import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from '../Axios/Signup'
import Login from '../Axios/Login'
import AllProducts from '../Axios/AllProducts'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/AllProducts' element={<AllProducts />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
