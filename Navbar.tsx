import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/apps', label: 'Apps' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/image.png" 
                  alt="Purple Techno Solutions Logo" 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="absolute inset-0 animate-pulse bg-cyan-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-white font-bold text-xl">
                Purple Techno Solutions
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/20 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-white/20 text-white backdrop-blur-sm'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;