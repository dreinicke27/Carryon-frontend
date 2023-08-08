import { Outlet, NavLink } from "react-router-dom";
import logo from '../assets/img/logoIcon.svg';
import insta from '../assets/img/insta.svg'

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
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} data-toggle="collapse" data-target="#navbarCollapse">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} data-toggle="collapse" data-target="#navbarCollapse">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customizer" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} data-toggle="collapse" data-target="#navbarCollapse">Customizer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} data-toggle="collapse" data-target="#navbarCollapse">Cart</NavLink>
              </li>
          </ul>
      </div>
  </div>
</nav>

      <Outlet />
      <footer className="footer bg-dark d-flex flex-column h-100"> 
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
              <div className=" d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                  <img src={logo} alt="Carryon logo icon" width="30" height="24"></img>
                </a>
                
              </div>
              <div className="d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-muted">© 2023 Carry On</span>
              </div>
            <div className="d-flex align-items-end">
                <a href="https://www.instagram.com/carryon.xo/"><img src={insta} alt="link to instagram"/></a>
            </div>
          </footer>
        </div>
      </footer>
      </>
    )
  };
  
  export default Layout;

  //footer start on line 39
  // <div class="container">
 // <footer class="py-3 my-4">
//    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
//      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
 //     <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
   //   <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
     // <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
     // <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    //</ul>
   // <p class="text-center text-muted">© 2022 Company, Inc</p>
  //</footer>
//</div> 

