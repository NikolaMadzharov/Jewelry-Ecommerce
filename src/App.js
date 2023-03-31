import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeList } from './components/HomeList/HomeList'; 
import { CreateRing } from './components/CreateRing/CreateRing'; 
import { Header } from './components/Header/Header'; 
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Footer } from './components/Footer/Footer';
import Register from './components/Register/Register';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>  <HomeList /> <Footer/> </>} />
        <Route path="/CreateRing" element={<>  <CreateRing /> <Footer/> </>} />
        <Route path="/Catalog" element={<>  <Catalog /> <Footer/> </>} />
        <Route path='/catalog/details/:ringId' element={<>  <Details /> <Footer/> </>} />
        <Route path='/catalog/edit/:ringId' element={<> <Edit /> <Footer/> </>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
