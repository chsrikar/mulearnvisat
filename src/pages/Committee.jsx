import { useEffect, useRef } from 'react'
import AnimatedTestimonials from '../components/AnimatedTestimonials'
import { committee } from '../data/committee'

function Committee({ darkMode }) {
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

    return (
        <div ref={containerRef} className="pt-20 sm:pt-24 pb-12 sm:pb-16">
            {/* Header */}
            <section className="container-main text-center mb-8 sm:mb-12">
                <div className="reveal">
                    <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                        Our Team
                    </span>
                    <h1 className={`text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                        Meet the{' '}
                        <span className="gradient-text">Committee</span>
                    </h1>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                        The passionate individuals driving μLearn VISAT forward through
                        leadership, innovation, and community building.
                    </p>
                </div>
            </section>

            {/* Animated Testimonials Showcase */}
            <section className="container-main mb-12 sm:mb-16">
                <div className="reveal">
                    <AnimatedTestimonials
                        members={committee}
                        autoplay={true}
                        darkMode={darkMode}
                    />
                </div>
            </section>

            {/* Join the Team CTA */}
            <section className="container-main mt-10 sm:mt-16">
                <div className={`reveal card-base p-6 sm:p-8 md:p-12 text-center ${darkMode ? 'bg-[#1a1a24] border-surface-800' : ''}`}>
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                        Want to Join Our Team?
                    </h3>
                    <p className={`max-w-lg mx-auto mb-6 ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                        We are always looking for passionate individuals to join our committee
                        and help shape the future of learning at VISAT.
                    </p>
                    <a
                        href="https://mulearn.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="cta-join-team"
                        className="btn-primary no-underline"
                    >
                        Apply Now
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Committee
