import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import './App.css'
import Contact from './components/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
