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
                </ul>
            </nav>
            {/* 
            - 전체페이지 헤더 구상 
            https://brunch.co.kr/@830bfa34e0894d6/25
            
              헤더에는
              로고 브랜드 식별자
              행동을 요구하는 버튼
              텍스트 또는 제목
              콘택트렌즈
              sns링크
              탐색 요소
              검색 필드
            */}

            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </header>
    );
};

export default Header;
