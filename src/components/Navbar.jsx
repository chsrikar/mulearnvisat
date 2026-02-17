import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import SpotlightNavbar from './SpotlightNavbar'

const navLinks = [
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Committee', path: '/committee' },
    { label: 'Contact', path: '/contact' },
]

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const activeIndex = navLinks.findIndex((link) => link.path === location.pathname)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const handleNavClick = (item, index) => {
        navigate(item.path)
    }

    return (
        <nav
            id="main-nav"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? darkMode
                    ? 'bg-[#0f0f14]/60 backdrop-blur-nav'
                    : 'bg-white/60 backdrop-blur-nav'
                : 'bg-transparent'
                }`}
        >
            <div className="container-main">
                <div className="flex items-center justify-between h-16 md:h-18">
                    {/* Logo */}
                    <Link
                        to="/"
                        id="nav-logo"
                        className="flex items-center gap-2 no-underline group"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <span className="text-white font-bold text-lg">μ</span>
                        </div>
                        <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-surface-900'} transition-colors`}>
                            μLearn <span className="text-primary-600 font-medium">VISAT</span>
                        </span>
                    </Link>

                    {/* Desktop: Spotlight Navbar (centered) */}
                    <div className="hidden md:flex items-center">
                        <SpotlightNavbar
                            items={navLinks}
                            activeIndex={activeIndex >= 0 ? activeIndex : 0}
                            onItemClick={handleNavClick}
                        />
                    </div>

                    {/* Desktop: Theme Toggle */}
                    <div className="hidden md:flex items-center">
                        <ThemeToggle
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                            className="w-10 h-10"
                        />
                    </div>

                    {/* Mobile: Toggle + Hamburger */}
                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                            className="w-10 h-10"
                        />
                        <button
                            id="mobile-menu-btn"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border-none ${darkMode
                                ? 'bg-surface-800 text-white'
                                : 'bg-surface-100 text-surface-700'
                                }`}
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-1.5 w-5">
                                <span
                                    className={`h-0.5 rounded-full transition-all duration-300 ${darkMode ? 'bg-white' : 'bg-surface-700'
                                        } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                                />
                                <span
                                    className={`h-0.5 rounded-full transition-all duration-300 ${darkMode ? 'bg-white' : 'bg-surface-700'
                                        } ${isOpen ? 'opacity-0 scale-0' : ''}`}
                                />
                                <span
                                    className={`h-0.5 rounded-full transition-all duration-300 ${darkMode ? 'bg-white' : 'bg-surface-700'
                                        } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-80 pb-4' : 'max-h-0'
                        }`}
                >
                    <div className={`flex flex-col gap-1 pt-2 border-t ${darkMode ? 'border-surface-800' : 'border-surface-100'}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.path}
                                id={`mobile-nav-${link.label.toLowerCase()}`}
                                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 no-underline ${location.pathname === link.path
                                    ? 'bg-primary-600/10 text-primary-600'
                                    : darkMode
                                        ? 'text-surface-300 hover:text-white hover:bg-white/5'
                                        : 'text-surface-600 hover:text-surface-900 hover:bg-surface-50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
