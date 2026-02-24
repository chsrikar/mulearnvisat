import { useEffect, useRef } from 'react'
import EventCardFlip from '../components/EventCardFlip'
import { events } from '../data/events'

function Events({ darkMode }) {
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
                        Our Events
                    </span>
                    <h1 className={`text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                        Past{' '}
                        <span className="gradient-text">Events</span>
                    </h1>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                        From hackathons to workshops, we host events that inspire creativity,
                        foster collaboration, and build real-world skills.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="container-main">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {events.map((event, index) => (
                        <div key={event.id} className={`reveal stagger-${index + 1} flex justify-center`}>
                            <EventCardFlip {...event} darkMode={darkMode} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Events
