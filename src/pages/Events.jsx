import { useState, useEffect, useRef } from 'react'
import EventCardFlip from '../components/EventCardFlip'
import { events } from '../data/events'

function Events({ darkMode }) {
    const [activeTab, setActiveTab] = useState('ongoing')
    const containerRef = useRef(null)

    const filteredEvents = events.filter((event) => event.status === activeTab)

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
    }, [activeTab])

    return (
        <div ref={containerRef} className="pt-20 sm:pt-24 pb-12 sm:pb-16">
            {/* Header */}
            <section className="container-main text-center mb-8 sm:mb-12">
                <div className="reveal">
                    <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                        Our Events
                    </span>
                    <h1 className={`text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                        Discover What is{' '}
                        <span className="gradient-text">Happening</span>
                    </h1>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                        From hackathons to workshops, we host events that inspire creativity,
                        foster collaboration, and build real-world skills.
                    </p>
                </div>
            </section>

            {/* Tabs */}
            <section className="container-main mb-8 sm:mb-10">
                <div className="reveal flex justify-center">
                    <div className={`inline-flex rounded-xl p-1 ${darkMode ? 'bg-[#1a1a24]' : 'bg-surface-100'}`}>
                        <button
                            id="tab-ongoing"
                            onClick={() => setActiveTab('ongoing')}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border-none ${activeTab === 'ongoing'
                                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md shadow-primary-500/25'
                                : darkMode
                                    ? 'bg-transparent text-surface-400 hover:text-white'
                                    : 'bg-transparent text-surface-500 hover:text-surface-700'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${activeTab === 'ongoing' ? 'bg-white animate-pulse' : darkMode ? 'bg-surface-600' : 'bg-surface-300'}`} />
                                Ongoing
                            </span>
                        </button>
                        <button
                            id="tab-past"
                            onClick={() => setActiveTab('past')}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border-none ${activeTab === 'past'
                                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md shadow-primary-500/25'
                                : darkMode
                                    ? 'bg-transparent text-surface-400 hover:text-white'
                                    : 'bg-transparent text-surface-500 hover:text-surface-700'
                                }`}
                        >
                            Past
                        </button>
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="container-main">
                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {filteredEvents.map((event, index) => (
                            <div key={event.id} className={`reveal stagger-${index + 1} flex justify-center`}>
                                <EventCardFlip {...event} darkMode={darkMode} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 rounded-2xl bg-surface-100 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-surface-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                        </div>
                        <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                            No events found
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-surface-500' : 'text-surface-400'}`}>
                            Check back soon for new events!
                        </p>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Events
