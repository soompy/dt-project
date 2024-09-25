import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>로고</h1>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
