import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VariablesPage from './pages/VariablesPage';
import VariableDetailsPage from './pages/VariableDetailsPage';
import './App.css'

const App: React.FC = () => {
  return (
    <div className='container'>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/variables" element={<VariablesPage />} />


          <Route path="/variables/:id" element={<VariableDetailsPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};


export default App;