import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (

    <nav className="nav-bar">
      <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="20" height="20" /></Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Rental</Link>
      &nbsp; | &nbsp;
      <Link to="/price">Rental Rate</Link>
      &nbsp; | &nbsp;
      <Link to="/instructor">Instructor Team</Link>
      &nbsp; | &nbsp; 
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>

  );
}