import { Link } from 'react-router-dom'

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Committee', path: '/committee' },
    { name: 'Contact', path: '/contact' },
]

const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/mulearn.vit/',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/mulearn-vit/',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
]

function Footer({ darkMode }) {
    return (
        <footer
            id="main-footer"
            className={`${darkMode ? 'bg-[#0a0a0f] border-t border-surface-800' : 'bg-surface-900'
                } text-white`}
        >
            <div className="container-main py-10 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="/mulearn-logo.png"
                                alt="muLearn VISAT"
                                className="w-9 h-9 rounded-xl object-contain"
                            />
                            <span className="font-bold text-lg">
                                muLearn <span className="text-primary-400">VISAT</span>
                            </span>
                        </div>
                        <p className="text-surface-400 text-sm leading-relaxed max-w-xs">
                            Building a culture of curiosity, capability & contribution through
                            community-driven learning at VISAT.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-surface-400 mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 list-none p-0 m-0">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-surface-300 hover:text-primary-400 transition-colors duration-300 text-sm no-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-surface-400 mb-4">
                            Follow Us
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id={`social-${social.name.toLowerCase()}`}
                                    className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center text-surface-400 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1 no-underline"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <div className="mt-6 text-sm text-surface-500">
                            <p>mulearn@visat.ac.in</p>
                            <p className="mt-1">VISAT, Elanji, Ernakulam, Kerala</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 sm:mt-12 pt-6 border-t border-surface-800 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
                    <p className="text-surface-500 text-sm">
                        © {new Date().getFullYear()} muLearn VISAT Student Branch. All rights reserved.
                    </p>
                    <p className="text-surface-600 text-xs">
                        Built with 💜 by the muLearn VISAT community
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
