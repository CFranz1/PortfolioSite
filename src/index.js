import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header/Header'
import { HomePage } from './Pages/HomePage/HomePage'
import { Footer } from './Components/Footer/Footer'
import "./App.css"


function App() {

    return (
        <div className='app'>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>

    )
}
const app = document.getElementById('root')
ReactDOM.createRoot(app).render(<App />);