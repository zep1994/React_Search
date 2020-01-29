import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="Nav">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/data">Data</Link>
                    </li>
                    <li>
                        <Link to="/main">Main Data</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar