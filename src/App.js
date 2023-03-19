import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeList } from './components/HomeList/HomeList'; 
import { CreateRing } from './components/CreateRing/CreateRing'; 
import { Header } from './components/Header/Header'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeList />} />
        <Route path="/CreateRing" element={<CreateRing />} />
      </Routes>
    </Router>
  );
}

export default App;
