import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function AnimatedTestimonials({ members, autoplay = true, darkMode }) {
    const [active, setActive] = useState(0)

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % members.length)
    }, [members.length])

    const handlePrev = useCallback(() => {
        setActive((prev) => (prev - 1 + members.length) % members.length)
    }, [members.length])

    // Auto-advance
    useEffect(() => {
        if (!autoplay) return
        const interval = setInterval(handleNext, 5000)
        return () => clearInterval(interval)
    }, [autoplay, handleNext])

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === 'ArrowLeft') handlePrev()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [handleNext, handlePrev])

    const randomRotation = () => Math.floor(Math.random() * 21) - 10

    return (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 lg:gap-20 w-full">
            {/* Image Side */}
            <div className="relative w-full md:w-1/2">
                <div className="relative h-64 sm:h-80 md:h-96 w-full">
                    <AnimatePresence>
                        {members.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: -100,
                                    rotate: randomRotation(),
                                }}
                                animate={{
                                    opacity: index === active ? 1 : 0.7,
                                    scale: index === active ? 1 : 0.95,
                                    z: index === active ? 0 : -100,
                                    rotate: index === active ? 0 : randomRotation(),
                                    zIndex: index === active ? 40 : members.length - Math.abs(active - index),
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: 100,
                                    rotate: randomRotation(),
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeInOut',
                                }}
                                className="absolute inset-0 origin-bottom"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    draggable={false}
                                    className={`h-full w-full rounded-2xl sm:rounded-3xl object-cover object-center select-none ${darkMode
                                            ? 'shadow-xl shadow-black/40'
                                            : 'shadow-xl shadow-surface-300/50'
                                        }`}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-between py-2 sm:py-4">
                <div>
                    {/* Name */}
                    <motion.h3
                        key={`name-${active}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`text-xl sm:text-2xl md:text-3xl font-black ${darkMode ? 'text-white' : 'text-surface-900'
                            }`}
                    >
                        {members[active].name}
                    </motion.h3>

                    {/* Role */}
                    <motion.p
                        key={`role-${active}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.05, ease: 'easeInOut' }}
                        className="text-sm sm:text-base font-semibold text-primary-500 mt-1"
                    >
                        {members[active].role}
                    </motion.p>

                    {/* Bio / Quote */}
                    <motion.blockquote
                        key={`bio-${active}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
                        className={`text-sm sm:text-base md:text-lg mt-4 sm:mt-6 leading-relaxed ${darkMode ? 'text-surface-400' : 'text-surface-600'
                            }`}
                    >
                        <span className="gradient-text text-3xl sm:text-4xl font-black leading-none mr-1">"</span>
                        {members[active].bio}
                        <span className="gradient-text text-3xl sm:text-4xl font-black leading-none ml-1">"</span>
                    </motion.blockquote>

                    {/* LinkedIn */}
                    {members[active].linkedin && (
                        <motion.a
                            key={`link-${active}`}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            href={members[active].linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 mt-4 sm:mt-5 text-sm font-semibold transition-colors duration-200 no-underline ${darkMode
                                    ? 'text-primary-400 hover:text-primary-300'
                                    : 'text-primary-600 hover:text-primary-700'
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Connect on LinkedIn
                        </motion.a>
                    )}
                </div>

                {/* Navigation & Dots */}
                <div className="flex items-center justify-between mt-6 sm:mt-10">
                    {/* Dots */}
                    <div className="flex gap-2">
                        {members.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                aria-label={`Go to member ${index + 1}`}
                                className={`rounded-full transition-all duration-300 cursor-pointer border-none ${index === active
                                        ? 'w-8 h-3 bg-gradient-to-r from-primary-500 to-accent-500'
                                        : `w-3 h-3 ${darkMode ? 'bg-surface-700 hover:bg-surface-600' : 'bg-surface-200 hover:bg-surface-300'}`
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Arrow buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous member"
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border-2 ${darkMode
                                    ? 'border-surface-600 text-surface-400 hover:bg-surface-800 hover:text-white bg-transparent'
                                    : 'border-surface-200 text-surface-500 hover:bg-surface-100 hover:text-surface-900 bg-transparent'
                                }`}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next member"
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border-none text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-lg hover:shadow-primary-500/25`}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedTestimonials
