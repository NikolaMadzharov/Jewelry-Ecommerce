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
import { Login } from './components/Login/Login';
import { AuthContext } from './context/AuthContext';
import { useLocalStorage } from "./hook/localStorage";
import { GuestGuard } from './guards/GuestGuard';
import { UserGuard } from './guards/UserGuard';

function App() {
  const [user, setUser] = useLocalStorage('auth', {})

  const setUserSession = (data) => {
    setUser({ ...data })
  }

  return (
    <>
      <AuthContext.Provider value={{ setUserSession, user }} >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<>  <HomeList /> <Footer/> </>} />
            <Route path="/Catalog" element={<>  <Catalog /> <Footer/> </>} />
            <Route path='/catalog/details/:ringId' element={<>  <Details /> <Footer/> </>} />
            <Route element={<GuestGuard/>}>
              <Route path="/CreateRing" element={<>  <CreateRing /> <Footer/> </>} />
              <Route path='/catalog/edit/:ringId' element={<> <Edit /> <Footer/> </>} />
            </Route>
            <Route element={<UserGuard/>}>
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
