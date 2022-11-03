import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Error from '../Error'
import Footer from '../Footer'
import Home from '../../pages/Home'
import About from '../../pages/About'

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
