import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Page404 from './pages/Error'

// COMPONENTS
import Header from './components/Header'

import './styles/App.css'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projets" element={<Projects />}></Route>
        <Route path="/projet/:id" element={<Project />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  )
}

export default App
