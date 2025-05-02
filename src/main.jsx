import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import ScrollToTop from './components/ScrollToTop'

import App from './App.jsx'
import Introduction from "./pages/Introduction"
import Research from "./pages/Research"
import Development from "./pages/Development"
import Accounts from "./pages/Accounts"
import Vr2025Paper from "./pages/news/Vr2025paper"
import Game2024Sekken from "./pages/news/Game2024Sekken"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/research" element={<Research />} />
        <Route path="/development" element={<Development />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/news/vr2025-paper" element={<Vr2025Paper />} />
        <Route path="/news/game2024-sekken" element={<Game2024Sekken />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
