import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">{/* <h1>로고</h1> */}</div>

            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/place">Place</Link>
                    </li>
                    <li>
                        <Link to="/community">Community</Link>
                    </li>
                    <li>
                        <Link to="/notice">Notice</Link>
                    </li>
                </ul>
            </nav>

            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </header>
    );
};

export default Header;
