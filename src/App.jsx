import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import Committee from './pages/Committee'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-[#0f0f14] text-surface-200' : 'bg-surface-50 text-surface-900'} transition-colors duration-500`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/events" element={<Events darkMode={darkMode} />} />
          <Route path="/committee" element={<Committee darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/gallery" element={<Gallery darkMode={darkMode} />} />
        </Routes>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
