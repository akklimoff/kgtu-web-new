import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О нас' },
    { path: '/news', label: 'Новости' },
    { path: '/services', label: 'Услуги' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className={`header-glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-4 border-b border-border">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logos/logo-main.png"
              alt="ЦТТ КГТУ"
              className="h-16 w-auto"
              onError={(e) => {
                // Fallback to text logo if image not found
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="h-16 w-12 bg-primary border-2 border-primary-dark hidden items-center justify-center">
              <span className="text-white font-bold text-lg">ЦТТ</span>
            </div>
            <img
              src="/logos/logo-text.png"
              alt="Центр трансфера технологий при КГТУ им. И. Раззакова"
              className="h-12 w-auto hidden md:block"
              onError={(e) => {
                // Fallback to text if image not found
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden md:flex flex-col">
              <span className="text-lg font-bold text-text-primary uppercase tracking-wide">
                ЦТТ КГТУ
              </span>
              <span className="text-xs text-text-secondary uppercase tracking-wider">
                Центр Трансфера Технологий
              </span>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-2 border border-border">
              <button className="px-3 py-1.5 bg-primary text-white text-xs font-medium uppercase tracking-wide">
                РУС
              </button>
              <button className="px-3 py-1.5 text-text-secondary text-xs font-medium uppercase tracking-wide hover:text-primary transition-colors">
                ENG
              </button>
            </div>

            {/* Contact Button - Desktop */}
            <Link to="/contacts" className="hidden lg:block">
              <button className="btn-primary">
                Связаться
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 border border-border hover:border-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Bar - Desktop */}
        <div className="hidden lg:flex items-center justify-between py-0">
          <nav className="flex border-b-2 border-transparent">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-4 text-sm font-medium uppercase tracking-wide transition-all border-b-2 ${
                  isActive(link.path)
                    ? 'text-primary border-primary'
                    : 'text-text-secondary hover:text-primary border-transparent hover:border-border-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="flex items-center gap-8 text-sm">
            <a
              href="tel:996508888568"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="font-medium">+996 508 888 568</span>
            </a>

            <a
              href="mailto:ttc@kstu.kg"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="font-medium">ttc@kstu.kg</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium uppercase tracking-wide border-l-4 transition-all ${
                    isActive(link.path)
                      ? 'text-primary border-primary bg-primary-light'
                      : 'text-text-secondary border-transparent hover:border-border-dark hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="border-t border-border p-4 space-y-3">
              <a href="tel:996508888568" className="flex items-center gap-3 text-sm text-text-secondary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="font-medium">+996 508 888 568</span>
              </a>

              <a href="mailto:ttc@kstu.kg" className="flex items-center gap-3 text-sm text-text-secondary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="font-medium">ttc@kstu.kg</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
