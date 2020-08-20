import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper z-depth-2">
            <p href="#" className="brand-logo center flex"><Link to="/">Hello World</Link></p>
            <ul id="nav-mobile" className="right hide-on-med-and-down flex">
            <Link to="/create">
            <li>Create Language</li>
            </Link>
                
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;