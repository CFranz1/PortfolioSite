import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header/Header'
import { HomePage } from './Pages/HomePage/HomePage'
import { Footer } from './Components/Footer/Footer'
import { ProjectsPage } from './Pages/ProjectsPage/ProjectsPage'
import { ContactPage } from './Pages/ContactPage/ContactPage'
import "./App.css"


function App() {


    return (
        <div className='app'>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/About' element={<HomePage />} />
                    <Route path='/Projects' element={<ProjectsPage />} />
                    <Route path='/Contact' element={<ContactPage />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>

    )
}
const app = document.getElementById('root')
ReactDOM.createRoot(app).render(<App />);