import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// PAGES
import Projects from './pages/Projects'
import Home from './pages/Home'

// COMPONENTS
import Header from './components/Header'

import './styles/App.css'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Projets" element={<Projects />}></Route>
      </Routes>
    </Router>
  )
}

export default App
