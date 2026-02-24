import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
    { src: '/gallery/WhatsApp Image 2026-02-24 at 8.21.02 PM.jpeg', alt: 'Component X' },
    { src: '/gallery/WhatsApp Image 2026-02-24 at 8.21.44 PM.jpeg', alt: 'Puffs & Lime Challenge ' },
    { src: '/gallery/WhatsApp Image 2026-02-24 at 8.23.59 PM.jpeg', alt: 'Speed Typing' },
    { src: '/gallery/WhatsApp Image 2026-02-24 at 8.23.59 PM (1).jpeg', alt: 'UNO Clash' },
    { src: '/gallery/WhatsApp Image 2026-02-24 at 8.23.59 PM (2).jpeg', alt: 'Picture Perfect' },
    { src: '/gallery/WhatsApp Image 2026-02-24 at 8.25.07 PM.jpeg', alt: 'Discover Mulearn Pathways' },
]

function Gallery({ darkMode }) {
    const [hovered, setHovered] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )
        const elements = containerRef.current?.querySelectorAll('.reveal')
        elements?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setSelectedImage(null)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    return (
        <div ref={containerRef} className="pt-20 sm:pt-24 pb-12 sm:pb-16">
            {/* Header */}
            <section className="container-main text-center mb-8 sm:mb-12">
                <div className="reveal">
                    <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                        Moments Captured
                    </span>
                    <h1 className={`text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                        Our{' '}
                        <span className="gradient-text">Gallery</span>
                    </h1>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                        A glimpse into the vibrant life at muLearn VISAT — from
                        hackathons and workshops to celebrations and community moments.
                    </p>
                </div>
            </section>

            {/* Masonry Grid */}
            <section className="container-main">
                <div className="columns-1 gap-3 sm:gap-4 space-y-3 sm:space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => setSelectedImage(img)}
                            className={`group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ease-in-out break-inside-avoid ${darkMode
                                    ? 'shadow-lg shadow-black/30'
                                    : 'shadow-lg shadow-surface-200/50'
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className={`w-full rounded-xl sm:rounded-2xl object-cover transition-all duration-300 ease-in-out ${hovered === null
                                        ? 'scale-100'
                                        : hovered === index
                                            ? 'scale-105'
                                            : 'blur-sm brightness-75'
                                    }`}
                            />
                            {/* Hover overlay with caption */}
                            <div
                                className={`absolute inset-0 flex items-end p-3 sm:p-4 transition-opacity duration-300 rounded-xl sm:rounded-2xl ${hovered === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                                }}
                            >
                                <span className="text-white text-xs sm:text-sm font-medium">
                                    {img.alt}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                        style={{ background: 'rgba(0,0,0,0.85)' }}
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer border-none z-10"
                            aria-label="Close lightbox"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[85vh] rounded-xl sm:rounded-2xl object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Caption */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="absolute bottom-4 sm:bottom-8 text-white/80 text-sm font-medium"
                        >
                            {selectedImage.alt}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Gallery
