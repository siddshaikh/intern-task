import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1 className="logo">Sidd&apos;s Portfolio</h1>
          <ul>
            <li>
              <a className="menu-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Contact Me
              </a>
            </li>
            <button className="contact-button" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
