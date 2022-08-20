import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PortfolioPage, RepositoryPage } from './pages'

function App() {
    return (
        <div className="App">
            <Router basename="/portfolio">
                <Routes>
                    <Route exact path="/" element={<PortfolioPage />} />
                    <Route exact path="/repos" element={<RepositoryPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
