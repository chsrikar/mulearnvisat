import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import SpotlightNavbar from './SpotlightNavbar'

const navLinks = [
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Committee', path: '/committee' },
    { label: 'Contact', path: '/contact' },
]

const mobileMenuVariants = {
    closed: {
        opacity: 0,
        x: '100%',
        transition: {
            duration: 0.3,
            ease: easeInOut,
        },
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: easeInOut,
            staggerChildren: 0.1,
        },
    },
}

const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
}

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
        <>
            <nav
                id="main-nav"
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
            >
                <div className="container-main">
                    <div className="flex items-center justify-between h-16 md:h-18">
                        {/* Logo */}
                        <Link
                            to="/"
                            id="nav-logo"
                            className="flex items-center gap-2 no-underline group"
                        >
                            <img
                                src="/mulearn-logo.png"
                                alt="muLearn VISAT"
                                className={`w-9 h-9 rounded-xl object-contain transition-all duration-300 group-hover:scale-110 ${darkMode ? '' : 'brightness-0'}`}
                            />
                            <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-surface-900'} transition-colors`}>
                                muLearn <span className="text-primary-600 font-medium">VISAT</span>
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
                            <motion.button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border-none ${
                                    darkMode
                                        ? 'bg-surface-800 text-yellow-400'
                                        : 'bg-surface-100 text-surface-700'
                                }`}
                                aria-label="Toggle dark mode"
                                whileTap={{ scale: 0.9, rotate: 15 }}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {darkMode ? (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <Moon className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <Sun className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border-none ${darkMode
                                    ? 'bg-surface-800 text-white'
                                    : 'bg-surface-100 text-surface-700'
                                    }`}
                                aria-label="Toggle menu"
                                whileTap={{ scale: 0.95 }}
                            >
                                {isOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay + Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Floating Menu Panel */}
                        <motion.div
                            className={`fixed top-18 right-4 z-50 w-72 overflow-hidden rounded-2xl border shadow-2xl md:hidden ${darkMode
                                ? 'bg-surface-900 border-surface-700'
                                : 'bg-white border-surface-200'
                                }`}
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="space-y-4 p-5">
                                {/* Nav Links */}
                                <div className="space-y-1">
                                    {navLinks.map((link) => (
                                        <motion.div key={link.label} variants={mobileItemVariants}>
                                            <Link
                                                to={link.path}
                                                className={`block rounded-xl px-4 py-3 font-medium transition-colors duration-200 no-underline ${location.pathname === link.path
                                                    ? 'bg-primary-600/10 text-primary-600'
                                                    : darkMode
                                                        ? 'text-surface-300 hover:text-white hover:bg-white/5'
                                                        : 'text-surface-600 hover:text-surface-900 hover:bg-surface-50'
                                                    }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
