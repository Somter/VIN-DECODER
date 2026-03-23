import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx'
import VariablesPage from './pages/VariablesPage.tsx'
const VariableDetailsPage = () => <div className="container"><h1>Variable Details</h1></div>;
import './App.css'

function App() {

  return (
    <div className="container">
      <Router>
        <div className="app-container">

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/variables" element={<VariablesPage />} />

            <Route path="/variables/:variableId" element={<VariableDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
