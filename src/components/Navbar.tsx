import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  currentPage?: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Klinik Kütüphane', href: '/library' },
    { name: 'Semptomlar', href: '/symptoms' },
    { name: 'Metodoloji', href: '/methodology' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-surface/90 backdrop-blur-md border-b border-primary/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a 
            href="/"
            className="text-2xl font-serif font-bold tracking-tight text-primary flex flex-col leading-none"
          >
            <span>ESTRANOVA</span>
            <span className="text-[10px] font-sans font-medium tracking-[0.2em] text-secondary mt-1">THE CLINICAL CURATOR</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  currentPage === link.href ? "text-primary" : "text-charcoal/60"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-primary transition-colors">
            <Search size={18} />
          </button>
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-primary/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-serif text-left text-charcoal border-b border-primary/5 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
