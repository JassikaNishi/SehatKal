import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "About Us", path: "/about-us" },
    { link: "Contact Us", path: "/contact-page" },
    { link: "Login", path: "/login" },
    { link: "Signup", path: "/signup" },
    { link: "Tips And Resources", path: "/tips" },
    { link: "Profile", path: "/profile" },
    { link: "Analytics", path: "/analytics" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 ease-in-all ${isSticky ? "bg-[#ded8c7]" : "bg-transparent"}`}
    >
      <div
        className={`flex items-center justify-between py-4 px-6 shadow-md ${isSticky ? "bg-[#ded8c7]" : "bg-transparent"}`}
      >
        <h1 className="text-4xl font-bold text-[#6a6f54]">
          SehatKal.co
        </h1>

        <nav className="hidden lg:flex space-x-12">
          <ul className="flex items-center space-x-12">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-base text-black uppercase cursor-pointer hover:text-blue-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isMenuOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="space-y-4 mt-12 py-7 text-white bg-blue-300 md:hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer hover:text-blue-300"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
