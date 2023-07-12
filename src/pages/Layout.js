import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
  <div className='container'>
      <a href='#../App.js' className='navbar-brand'>
          <span>
              Carry On 
          </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
           <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/customizer" className="nav-link">Customizer</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">Cart</Link>
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

//<a className="nav-link" href="#../App.js">Home</a>
//<li className="nav-item">
//    <a className="nav-link" href="#../App.js">Shop Pre-Made</a>
//</li>
//<li className="nav-item">
//<Link to="/about" className="nav-link">About</Link>
//</li>