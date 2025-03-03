import React, { useState, useEffect, useRef } from "react";
import "../styles/NavBar.scss";

const navLinks = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Blog", link: "blog" },
  { name: "Services", link: "services" },
  { name: "Projects", link: "projects" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      )
        setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleIconClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar" ref={navRef}>
      <div className="logo-container" onClick={() => handleIconClick()}>
        <p className="p2">STUDIODUMIN</p>
      </div>
      <div className="nav-actions">
        <div className={`nav-links ${menuOpen ? "open" : ""}`} ref={menuRef}>
          {navLinks.map((element, index) => (
            <a key={index} className="p1" onClick={(e) => handleAnchorClick(e, element.link)}>
              {element.name}
            </a>
          ))}
        </div>
        <button className="btn1 contact-btn">Contact Us</button>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)} ref={menuIconRef}>
          <i className="material-icons">menu</i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
