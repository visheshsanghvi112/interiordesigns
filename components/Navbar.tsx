import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Palette } from 'lucide-react';
import ShimmerButton from './ShimmerButton';
import { useTheme, ThemeId } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const { currentTheme, setTheme, themes } = useTheme();
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // For Home page, activate sticky style after passing most of the hero section
      const threshold = isHome ? (window.innerHeight * 0.9) : 20;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Click outside handler for theme menu
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setShowThemeMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isHome]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-brand-orange font-semibold" : "text-gray-800 hover:text-brand-orange";
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isSolid = isScrolled || isOpen;
  const useDarkText = isSolid || !isHome;

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
    isSolid 
      ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100 py-3' 
      : 'bg-transparent py-6'
  }`;
  
  const logoTextColor = useDarkText ? 'text-gray-900' : 'text-white mix-blend-difference';
  const menuButtonColor = useDarkText ? 'text-gray-900' : 'text-white';
  const themeIconColor = useDarkText ? 'text-gray-900 hover:text-brand-orange' : 'text-white hover:text-white/80';
  
  const getLinkClass = (path: string) => {
    if (useDarkText) {
       return isActive(path);
    }
    return "text-white/90 mix-blend-difference hover:text-white font-medium";
  };

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-14">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsOpen(false)}>
            <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0">
               <div className={`absolute inset-0 border-2 ${useDarkText ? 'border-brand-orange' : 'border-white'} rotate-45 group-hover:rotate-90 transition-all duration-500 ease-out`}></div>
               <div className={`absolute inset-0 flex items-center justify-center ${useDarkText ? 'bg-brand-dark' : 'bg-white'} scale-75 transition-colors duration-500`}>
                  <span className={`font-serif italic ${useDarkText ? 'text-brand-orange' : 'text-brand-dark'} text-lg md:text-xl font-bold transition-colors duration-500`}>S</span>
               </div>
            </div>
            <div className={`flex flex-col ${logoTextColor} transition-colors duration-500`}>
              <span className="font-serif font-bold text-base md:text-lg tracking-wide leading-none">SHAPE N SHADES</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium opacity-90">Interiors</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`${getLinkClass(link.path)} text-xs md:text-sm uppercase tracking-widest transition-all duration-300 relative group py-2`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${location.pathname === link.path && useDarkText ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}

            {/* Theme Switcher */}
            <div className="relative" ref={themeMenuRef}>
              <button 
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className={`p-2 rounded-full transition-all duration-300 ${themeIconColor} focus:outline-none`}
                aria-label="Change Theme"
              >
                <Palette size={20} />
              </button>

              {/* Theme Dropdown */}
              {showThemeMenu && (
                <div className="absolute top-full right-0 mt-4 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up origin-top-right z-50">
                  <div className="p-3 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Color Palette</span>
                    <span className="text-[10px] text-gray-400">{Object.keys(themes).length} options</span>
                  </div>
                  <div className="p-2 space-y-1">
                    {Object.entries(themes).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setTheme(key as ThemeId);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 group ${currentTheme === key ? 'bg-brand-light ring-1 ring-brand-orange/20' : 'hover:bg-gray-50'}`}
                      >
                        <div 
                          className="w-8 h-8 rounded-full border border-black/5 shadow-sm flex items-center justify-center transition-transform group-hover:scale-110" 
                          style={{ backgroundColor: theme.primary }}
                        >
                           {currentTheme === key && <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm" />}
                        </div>
                        <div className="flex flex-col items-start">
                          <span className={`text-sm font-semibold ${currentTheme === key ? 'text-brand-dark' : 'text-gray-600'}`}>
                            {theme.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact">
              {/* Using Shimmer Button for the CTA */}
              <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-lg hover:shadow-brand-orange/20 transition-all">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900 group-hover:text-brand-orange">
                   Start Project
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4 relative z-50">
             {/* Mobile Theme Toggle (Simple Cycle) */}
            <button 
                onClick={() => {
                   const themeKeys = Object.keys(themes) as ThemeId[];
                   const currentIndex = themeKeys.indexOf(currentTheme);
                   const nextIndex = (currentIndex + 1) % themeKeys.length;
                   setTheme(themeKeys[nextIndex]);
                }}
                className={`${isOpen ? 'text-gray-900' : menuButtonColor} focus:outline-none p-2 transition-colors`}
              >
                <Palette size={24} />
            </button>

            <button
              onClick={toggleMenu}
              className={`${isOpen ? 'text-gray-900' : menuButtonColor} focus:outline-none p-2 transition-colors duration-300 hover:text-brand-orange`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-serif font-bold transition-all duration-300 transform hover:scale-105 ${location.pathname === link.path ? 'text-brand-orange' : 'text-gray-900 hover:text-brand-orange'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-8 w-full px-12">
             <button className="w-full bg-brand-dark text-white py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl hover:bg-brand-orange transition-colors">
                Get a Quote
             </button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;