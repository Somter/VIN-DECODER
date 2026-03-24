import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VariablesPage from './pages/VariablesPage';
import VariableDetailsPage from './pages/VariableDetailsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/variables" element={<VariablesPage />} />
          <Route path="/variables/:id" element={<VariableDetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};


export default App;