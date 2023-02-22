import "./Header.scss"
import logoPayapi from "../Images/header-logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__circle"></div>
        <div className="header__nav nav">
          <img
            className="nav__logo"
            src={logoPayapi}
            alt="payapi"
            width="135"
            height="38"
          />
          <div className="header__element">
            <ul className="nav__list">
              <a href="/">
                {" "}
                <li className="nav__item">Pricing</li>
              </a>
              <a href="/">
                {" "}
                <li className="nav__item">About</li>
              </a>
              <a href="/">
                {" "}
                <li className="nav__item">Contact</li>
              </a>
            </ul>
            <button className="header__btn">Schedule a Demo</button>
          </div>
          {/* mobile-menu  */}
          <div className="header__menu menu">
            <div className="header__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu__mobile">
              <div className="menu__exit">
                <img
                  className="exit__icon"
                  src="./img/exit.png"
                  alt="exit"
                  width="22"
                  height="22"
                />
              </div>
              <hr />
              <div className="menu__element">
                <ul className="menu__list">
                  <li className="menu__item">Pricing</li>
                  <li className="menu__item">About</li>
                  <li className="menu__item">Contact</li>
                </ul>
                <button className="menu__btn">Schedule a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
