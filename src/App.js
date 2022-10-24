import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <h1>Hello Word</h1>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
