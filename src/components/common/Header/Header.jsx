import { Link } from "react-router-dom";
import Wrapper from "../../Layouts/Wrapper";

const Header = () => {
    const onClickHeader = () => {};

    return (
        <div>
            <button onClick={onClickHeader}>D</button>

            <section className="full_header">
                <div className="logo">{/* <h1>로고</h1> */}</div>

                <Wrapper>
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
                </Wrapper>
            </section>
        </div>
    );
};

export default Header;
