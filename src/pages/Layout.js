import { Outlet, NavLink } from "react-router-dom";
import logo from '../assets/img/logo icon.svg';

const Layout = () => {
    return (
      <>
<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
  <div className='container'>
      <a href='/' className='navbar-brand'>
          <span>
              <img src={logo} height="30" alt='Carry On logo' /> 
          </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
           <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customizer" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Customizer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Cart</NavLink>
              </li>
          </ul>
      </div>
  </div>
</nav>

        <Outlet />
      </>
    )
  };
  
  export default Layout;