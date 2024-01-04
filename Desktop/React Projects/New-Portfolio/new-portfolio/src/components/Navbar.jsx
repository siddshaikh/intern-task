import { useState } from "react";
import "./Navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import MobileNav from "./mobile/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
          <button className="menu-button" onClick={toggleMenu}>
            <span style={{ fontSize: "1.8rem" }}>
              {openMenu ? <IoCloseOutline /> : <CiMenuFries />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
