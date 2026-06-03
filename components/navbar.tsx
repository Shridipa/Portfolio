'use client';

import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

const navLinks: { href: string; label: string }[] = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-white/95 shadow-soft backdrop-blur-xl' : 'bg-white/80'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white shadow-sm shadow-primary/20">
            SD
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-text">Shridipa Dhar</span>
            <span className="text-xs text-muted">AI Research Engineer</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted transition-colors duration-200 hover:text-text">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#resume" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors duration-200 hover:bg-primaryDark">
            <FileText size={16} /> Resume
          </a>
        </div>

        <button className="inline-flex items-center rounded-full border border-border bg-white p-3 text-text shadow-sm shadow-black/5 transition-colors duration-200 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white/95 px-4 pb-5 sm:px-6 md:hidden">
          <div className="mt-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-3 text-sm font-medium text-text transition-colors duration-200 hover:bg-hover"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a href="#resume" className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primaryDark">
              <FileText size={16} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
