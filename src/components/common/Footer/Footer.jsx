const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <h1>로고</h1>
                </div>
                <div className="footer__nav">
                    <ul>
                        <li>
                            <a href="/about">회사 소개</a>
                        </li>
                        <li>
                            <a href="/services">서비스</a>
                        </li>
                        <li>
                            <a href="/contact">문의하기</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__social">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} copyright sm. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
