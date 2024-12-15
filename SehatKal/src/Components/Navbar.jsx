import React, { useEffect, useRef, useState } from 'react';
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
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in-all duration-300'>
            <nav className={`py-4 lg:px-24 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-100" : ""}`}>
                <div className='flex justify-between items-center text-base'>
                    {/* <Link to="/" className="text-2xl font-bold text-blue-400">BookNest</Link> */}
                    
                    <ul className='lg:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-300'>
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* For small screens */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`space-y-4 mt-12 py-7 text-white bg-blue-300 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-300'>
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
