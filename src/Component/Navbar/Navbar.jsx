
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './index.css';

function Header() {
  return (
    
      <nav className= " Navbar">
        <Link className="title" to="/">Ne<span>ws</span></Link>
        <ul className="Container">
          <li className="Active">  <NavLink to="/general" >  General    </NavLink> </li>
          <li> <NavLink to="/business"> Business   </NavLink ></li>
          <li> <NavLink to="/sports">   Sports     </NavLink> </li>
          <li> <NavLink to="/technology"> Technology </NavLink> </li>
        </ul>
        
        </nav>

    
  );
}

export default Header;