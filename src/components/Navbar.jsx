import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gofundme", label: "GoFundMe" },
    { to: "/resources", label: "Resources" },
    { to: "/data", label: "Data" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        
        {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <img
          src={Logo}
          alt="Iceout logo"
          className="w-8 h-8 object-contain"
        />
        <span className="text-lg font-bold tracking-tight">
          <span className="text-foreground">ice</span>
          <span className="text-primary ml-0.5 group-hover:underline underline-offset-4">
            out
          </span>
        </span>
      </Link>


        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium relative
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                after:bg-black after:transition-all
                ${
                  location.pathname === link.to
                    ? "text-gray-900 after:w-full"
                    : "text-black hover:text-gray-900 hover:after:w-full"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Donate button (desktop) */}
        <a
          href="https://ko-fi.com/josephnwani"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium
                     transition-all hover:bg-amber-300 hover:shadow-lg"
        >
        ❤ Buy me a Coffee
        </a>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.to
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd_n0ZKu-OUlJkmCk04Tf-0ArgbFAmkyEK0lq-WoxFRBFQ4sA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium
                         transition-all hover:bg-amber-300 hover:shadow-lg"
            >
              Donate ❤
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
