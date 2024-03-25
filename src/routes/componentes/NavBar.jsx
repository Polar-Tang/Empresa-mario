import { Link, NavLink } from "react-router-dom";
import logo from  '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboard, faPhone, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';


import air from '../air-24.png'
import ice from '../ice-24.png'


import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";


export const NavBar = () => {
  const { listaCompras } = useContext(CarritoContext);
  return (
    <>
    <nav className="container-fluid navbar-nav d-grid justify-content-md-center navbar navbar-color bg-body-tertiary navbar-expand-lg" >
  <Link className="navbar-brand logi align-self-center" to="/home"><img src={logo} alt="logo"/></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <div  className="collapse  d-grid" id="navbarSupportedContent">  */}
    <ul className="navbar-nav navbar-collapse home-link mb-lg-0  col-md-auto" id="navbarSupportedContent" >
    <li className="nav-item home rounded mx-auto d-block align-self-center container-flui-lg" >
      <NavLink to="/" className='nav-link anchor rounded mx-auto d-block'><FontAwesomeIcon icon={faHome}/>Home</NavLink>
    </li>
    <li className="nav-item category contact align-self-center ">
      <NavLink to='/contact' className='nav-link anchor rounded mx-auto d-block'><FontAwesomeIcon icon={faPhone} />Contactarse  </NavLink>
    </li>
    <form className="d-flex search rounded mx-auto d-block align-self-center" role="search">
      <input type="search" placeholder="Search"/>
      <button className="btn btn-outline-primary --bs-primary-bg-subtle" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
  <li className="nav-item anchor dropdown dropp drop-link rounded mx-auto d-block align-self-center   align-content">
      <a className="nav-link dropdown-toggle  anchor  rounded mx-auto d-block" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Nuestros productos
      </a>
  
      <ul className="dropdown-menu z-3">
        <img className='loguito' src={air}/><NavLink className="droping fs-6 anchor2" data-bs-toggle="dropdown" aria-expanded="false">Repuesto para aires acondicionados</NavLink>
        <li><hr className="dropdown-divider"/></li>
        <img className='loguito' src={ice}/><NavLink className="droping fs-6 anchor2" data-bs-toggle="dropdown" aria-expanded="false">Repuesto para heladeras</NavLink>
        <li><hr className="dropdown-divider"/></li>
        <li><FontAwesomeIcon icon={faClipboard} /><NavLink to='productos' className=" droping anchor2 fs-6">Más productos</NavLink></li> 
      </ul>
   </li>
   <li className="login-link align-self-center login float-end align-content">
      <NavLink className=" align-self-center droping anchor2 fs-6" href="#"><FontAwesomeIcon icon={faUser} />Login</NavLink></li>
   <NavLink to='/carrito' className='align-self-center carrito float-end rounded mx-auto d-block align-self-center'>
      <Badge badgeContent={listaCompras.length} color="secondary">
        <ShoppingCart color="action" />
      </Badge>
    </NavLink>
  </ul>
  {/* </div>     */}
</nav>
    </>
  )
}

export default NavBar
