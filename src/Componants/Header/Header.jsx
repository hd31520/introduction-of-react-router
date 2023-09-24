import { Link, NavLink } from "react-router-dom";
import './header.css'


const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <NavLink to="/user">Users</NavLink>
                <NavLink to="/about"> About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink  to="/posts">Posts</NavLink>
                
                
                
               
               
            </nav>
        </div>
    );
};



export default Header;