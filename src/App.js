import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeList } from './components/HomeList/HomeList'; 
import { CreateRing } from './components/CreateRing/CreateRing'; 
import { Header } from './components/Header/Header'; 
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeList />} />
        <Route path="/CreateRing" element={<CreateRing />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path='/catalog/details/:ringId' element={<Details />} />
        <Route path='/catalog/edit/:ringId' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
