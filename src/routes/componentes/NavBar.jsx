import { Link, NavLink } from "react-router-dom";
import logo from  '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboard, faPhone, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';


import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"


export const NavBar = () => {


  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary row ">
  <div className="container-fluid justify-content-md-center display-grid col grid">
    <Link className="navbar-brand logo ">
      <img src={logo} alt="logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  col col-lg-3" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 col mb-lg-0 home-link">
        <li className="nav-item col-md-auto col-md-auto ">
          
          <NavLink to='/' className="nav-link anchor g-col-3"  aria-current="page"><FontAwesomeIcon icon={faHome} />Home</NavLink>
        </li>
        <li className="nav-item login-link  col-lg-6 ">
          
          <NavLink to='contact'  className="nav-link anchor g-col-3"><FontAwesomeIcon icon={faPhone} />Contactarse</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to='/about' className="nav-link col col-lg-1" aria-disabled="true">Conectarse</NavLink>
        </li> */}
          <li className="nav-item dropdown drop-link me-2 grande">
          <a  className="nav-link dropdown-toggle anchor2 start-100 float-lg-end anchor grande" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vendemos Repuestos
          </a>
          <ul className="dropdown-menu grande">
            <li><FontAwesomeIcon icon={faUser} /><NavLink className=" droping  anchor2 fs-6" href="#">Conectarse</NavLink></li>
            <li><FontAwesomeIcon icon={faClipboard} /><NavLink to='productos' className=" droping anchor2 fs-6">Productos</NavLink></li>
            <NavLink to='/carrito'>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
            <li><hr className="dropdown-divider"/></li>
            <li>
      <form className="d-flex dropdown-style container " role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary --bs-primary-bg-subtle" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>
        </li>
        </ul>
        </li>
        </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default  NavBar;


{/* <nav class="navbar navbar-expand-lg bg-body-tertiary"> g-col-6 col-md-auto col col-lg-12
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}