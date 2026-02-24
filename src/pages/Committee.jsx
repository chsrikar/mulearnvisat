import { useEffect, useRef } from 'react'
import AnimatedTestimonials from '../components/AnimatedTestimonials'
import { leadership, committees, igLeads } from '../data/committee'

const committeeTagColors = {
    primary: 'bg-primary-600',
    accent: 'bg-accent-600',
    emerald: 'bg-emerald-600',
    amber: 'bg-amber-600',
}

const committeeBorderAccents = {
    primary: 'border-l-primary-500',
    accent: 'border-l-accent-500',
    emerald: 'border-l-emerald-500',
    amber: 'border-l-amber-500',
}

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

            {/* Leadership — Animated Testimonials */}
            <section className="container-main mb-12 sm:mb-16">
                <div className="reveal">
                    <AnimatedTestimonials
                        members={leadership}
                        autoplay={true}
                        darkMode={darkMode}
                    />
                </div>
            </section>

            {/* Core Committees & IG Leads — combined section heading */}
            <section className="container-main mb-12 sm:mb-16">
                <div className="reveal text-center mb-10 sm:mb-12">
                    <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                        Core Teams
                    </span>
                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                        Our <span className="gradient-text">Committees</span> &{' '}
                        <span className="gradient-text">Interest Groups</span>
                    </h2>
                </div>

                {/* Committees — retro cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
                    {committees.map((group) => (
                        <article
                            key={group.name}
                            className={`reveal flex w-full flex-col items-start justify-between border-4 p-5 sm:p-6 transition-shadow duration-300 ${
                                darkMode
                                    ? 'bg-[#1a1a24] border-surface-200 shadow-[6px_6px_0_0_rgba(255,255,255,0.8)] hover:shadow-[10px_10px_0_0_rgba(255,255,255,0.9)]'
                                    : 'bg-white border-surface-900 shadow-[6px_6px_0_0_#171717] hover:shadow-[10px_10px_0_0_#171717]'
                            }`}
                        >
                            {/* Committee tag */}
                            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                                <span
                                    className={`${committeeTagColors[group.color]} px-3 py-1 font-bold text-white border-2 ${
                                        darkMode ? 'border-surface-200' : 'border-surface-900'
                                    }`}
                                >
                                    {group.name}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                className={`mt-1 text-lg sm:text-xl leading-snug font-black uppercase ${
                                    darkMode ? 'text-white' : 'text-surface-900'
                                }`}
                            >
                                {group.name}
                            </h3>

                            {/* Members list */}
                            <div className={`text-sm sm:text-base mt-3 sm:mt-4 border-l-4 ${committeeBorderAccents[group.color]} pl-3 sm:pl-4 leading-relaxed w-full`}>
                                <div className="flex flex-col gap-3 mt-1">
                                    {group.members.map((member) => (
                                        <div key={member.id} className="flex items-center gap-3">
                                            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 flex-shrink-0 ${
                                                darkMode ? 'border-surface-600' : 'border-surface-900'
                                            }`}>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <span className={`font-bold ${darkMode ? 'text-surface-300' : 'text-surface-700'}`}>
                                                {member.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* IG Leads — retro cards */}
                <div className="reveal text-center mb-8 sm:mb-10">
                    <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-accent-400' : 'text-accent-600'}`}>
                        Interest Groups
                    </span>
                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                        IG <span className="gradient-text">Leads</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {igLeads.map((lead) => (
                        <article
                            key={lead.id}
                            className={`reveal flex w-full flex-col items-start justify-between border-4 p-5 sm:p-6 transition-shadow duration-300 ${
                                darkMode
                                    ? 'bg-[#1a1a24] border-surface-200 shadow-[6px_6px_0_0_rgba(255,255,255,0.8)] hover:shadow-[10px_10px_0_0_rgba(255,255,255,0.9)]'
                                    : 'bg-white border-surface-900 shadow-[6px_6px_0_0_#171717] hover:shadow-[10px_10px_0_0_#171717]'
                            }`}
                        >
                            {/* IG tag */}
                            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                                <span
                                    className={`bg-accent-600 px-3 py-1 font-bold text-white border-2 ${
                                        darkMode ? 'border-surface-200' : 'border-surface-900'
                                    }`}
                                >
                                    IG Lead
                                </span>
                                <span
                                    className={`bg-primary-600 px-3 py-1 font-bold text-white border-2 ${
                                        darkMode ? 'border-surface-200' : 'border-surface-900'
                                    }`}
                                >
                                    {lead.role}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                className={`mt-1 text-lg sm:text-xl leading-snug font-black uppercase ${
                                    darkMode ? 'text-white' : 'text-surface-900'
                                }`}
                            >
                                {lead.role}
                            </h3>

                            {/* Description */}
                            <p
                                className={`text-sm sm:text-base mt-3 sm:mt-4 border-l-4 border-accent-500 pl-3 sm:pl-4 leading-relaxed ${
                                    darkMode ? 'text-surface-400' : 'text-surface-600'
                                }`}
                            >
                                Interest Group focusing on {lead.role} — exploring, building, and innovating together.
                            </p>

                            {/* Author */}
                            <div className="relative mt-5 sm:mt-6 flex items-center gap-x-3">
                                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 flex-shrink-0 ${
                                    darkMode ? 'border-surface-600' : 'border-surface-900'
                                }`}>
                                    <img
                                        src={lead.image}
                                        alt={lead.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="text-sm leading-5">
                                    <p className={`font-black ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                                        {lead.name}
                                    </p>
                                    <p className={`font-bold text-xs ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                                        {lead.role} Lead
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
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
