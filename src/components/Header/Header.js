import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
  const { user } = useContext(AuthContext);
  const isAuth = user?._id ? true : false;
  const { setUserSession } = useContext(AuthContext);

  const logoutFn = () => {
    setUserSession({});
    localStorage.clear();
  }

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container" style={{ backgroundColor: 'orange' }}>
          <a className="navbar-brand" >
            <img src="images/logo.png" alt="" />
            <span>
              Ring Shop
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/Catalog">Catalog</Link>
                </li>
                {isAuth &&
                  <>
                    <li className="nav-item">
                      <Link className='nav-link' to="/CreateRing">Create Ring</Link>
                    </li>
                    <li className='link-nav'>
                      <Link className='link' to="/" onClick={logoutFn}>Logout</Link>
                    </li>
                  </>
                }
                {!isAuth &&
                  <>
                    <li className="nav-item">
                      <Link className='nav-link' to="/Login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link' to="/register">Register</Link>
                    </li>
                  </>
                }
              </ul>
            </div>
            <div className="quote_btn-container ">
              <a href="">
                <img src="images/cart.png" alt="" />
                <div className="cart_number">
                  0
                </div>
              </a>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
