import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Error from '../Error'
import Footer from '../Footer'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Location from '../../pages/Location'

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
                <Route path="/location">
                    <Route path=":indexCard" element={<Location />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
