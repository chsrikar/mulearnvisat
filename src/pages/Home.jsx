import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CrowdCanvas from '../components/CrowdCanvas'
import RetroCard from '../components/RetroCard'

function useScrollReveal() {
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )
        const elements = ref.current?.querySelectorAll('.reveal')
        elements?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])
    return ref
}

const features = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        title: 'Peer Learning',
        description: 'Learn from peers, share ideas, and build meaningful connections in an environment that supports collaborative growth and knowledge sharing.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.172a.768.768 0 01-1.114-.81l1.028-5.994-4.355-4.244a.768.768 0 01.426-1.311l6.018-.875L10.71 0a.768.768 0 011.38 0l2.69 5.107 6.018.875a.768.768 0 01.426 1.311l-4.355 4.244 1.028 5.994a.768.768 0 01-1.114.81L12 15.17z" />
            </svg>
        ),
        title: 'Real-world Skill Building',
        description: 'Gain practical exposure through hands-on projects, collaborative activities, and real-world problem solving that goes beyond traditional classroom education.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
        ),
        title: 'Industry Collaboration',
        description: 'Build industry-relevant skills, connect with mentors, and prepare for future challenges and opportunities through a culture of continuous learning and personal growth.',
    },
]

const stats = [
    { value: '500+', label: 'Active Members' },
    { value: '50+', label: 'Events Hosted' },
    { value: '20+', label: 'Projects Built' },
    { value: '10+', label: 'Industry Partners' },
]

function Home({ darkMode }) {
    const containerRef = useScrollReveal()

    return (
        <div ref={containerRef}>
            {/* Hero Section */}
            <section id="hero" className="hero-gradient relative min-h-screen flex items-center pt-16 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute w-72 h-72 rounded-full bg-primary-500/5 -top-20 -right-20 blur-3xl" />
                    <div className="absolute w-96 h-96 rounded-full bg-accent-500/5 -bottom-32 -left-32 blur-3xl" />
                    <div className="absolute w-48 h-48 rounded-full bg-primary-400/8 top-1/3 right-1/4 blur-2xl" />
                </div>

                {/* CrowdCanvas — full-section, no partial-height containers */}
                <div className="absolute inset-0 pointer-events-none">
                    <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
                </div>
                {/* Single smooth gradient overlay — covers full section, no seams */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: darkMode
                            ? 'linear-gradient(to bottom, #0f0f14 0%, rgba(15,15,20,0.85) 35%, rgba(15,15,20,0.3) 70%, transparent 100%)'
                            : 'linear-gradient(to bottom, rgba(250,250,250,1) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.3) 70%, transparent 100%)',
                    }}
                />

                <div className="container-main relative z-10 text-center py-12 sm:py-16 md:py-20">
                    {/* Heading */}
                    <h1 className="reveal stagger-2 opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6">
                        <span className="animated-gradient-text">muLearn VISAT</span>
                        <br />
                        <span className={darkMode ? 'text-surface-200' : 'text-surface-800'}>
                            Student Branch
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className={`reveal stagger-3 opacity-0 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                        A student-led learning ecosystem focused on{' '}
                        <span className="font-semibold text-primary-600">Collaboration</span>,{' '}
                        <span className="font-semibold text-accent-600">Innovation</span> &{' '}
                        <span className="font-semibold text-primary-600">Experiential Learning</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="reveal stagger-4 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/events" id="cta-events" className="btn-primary no-underline">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            View Events
                        </Link>
                        <a
                            href="https://mulearn.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="cta-join"
                            className="btn-outline no-underline"
                        >
                            Join Community
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="reveal stagger-5 opacity-0 mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                                <p className={`text-xs md:text-sm mt-1 ${darkMode ? 'text-surface-500' : 'text-surface-400'}`}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`section-spacing ${darkMode ? 'bg-[#12121a]' : 'bg-white'}`}>
                <div className="container-main">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="reveal">
                            <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                                About muLearn
                            </span>
                            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                                A Learning Ecosystem{' '}
                                <span className="gradient-text">Like No Other</span>
                            </h2>
                            <div className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-surface-400' : 'text-surface-600'}`}>
                                <p>
                                    muLearn is a community-driven learning ecosystem that empowers students to
                                    discover their potential beyond traditional academics. At VISAT, muLearn is not
                                    limited to technical learning — it fosters creativity, passion, leadership, and
                                    career development through peer-led initiatives, hands-on workshops, and
                                    collaborative experiences across diverse fields.
                                </p>
                                <p>
                                    Our "Build-in-Public" philosophy encourages students to share their journey,
                                    explore their interests, and grow with the support of a like-minded community.
                                    muLearn VISAT provides a space where you can learn, create, and shape your future
                                    with confidence.
                                </p>
                            </div>
                            <div className="mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                                        >
                                            <img
                                                src={`/images/member${i}.png`}
                                                alt="Member"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <p className={`text-sm ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                                    <span className="font-semibold text-primary-600">500+</span> students
                                    already learning
                                </p>
                            </div>
                        </div>

                        <div className="reveal sm:columns-2 gap-4 space-y-4">
                            <div>
                                <RetroCard
                                    tag="Learn"
                                    tagColor="bg-primary-600"
                                    title="Discover & Learn"
                                    description="Explore structured learning experiences designed to help you discover your strengths, build valuable skills, and grow at your own pace."
                                    darkMode={darkMode}
                                />
                            </div>
                            <div className="sm:mt-8 break-inside-avoid">
                                <RetroCard
                                    tag="Build"
                                    tagColor="bg-accent-600"
                                    title="Create & Build"
                                    description="Turn your ideas into meaningful outcomes through hands-on experiences and collaborative efforts."
                                    darkMode={darkMode}
                                />
                            </div>
                            <div className="break-inside-avoid">
                                <RetroCard
                                    tag="Grow"
                                    tagColor="bg-emerald-600"
                                    title="Holistic Growth"
                                    description="muLearn helps you grow not just in skills, but also in mindset, leadership, and overall personal development."
                                    darkMode={darkMode}
                                />
                            </div>
                            <div className="sm:mt-8 break-inside-avoid">
                                <RetroCard
                                    tag="Share"
                                    tagColor="bg-amber-600"
                                    title="Share & Inspire"
                                    description="Share your journey, express your progress, and inspire others through your experiences. muLearn creates a supportive environment where every step of growth is valued and celebrated."
                                    darkMode={darkMode}
                                />
                            </div>
                            <div className="break-inside-avoid">
                                <RetroCard
                                    tag="Explore"
                                    tagColor="bg-cyan-600"
                                    title="Explore Your Potential"
                                    description="muLearn provides a space where you can explore your interests, follow your passion, and discover your true potential in a community that supports your growth."
                                    darkMode={darkMode}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section id="why-join" className="section-spacing">
                <div className="container-main">
                    <div className="text-center mb-12">
                        <span className={`reveal text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                            Why Join Us
                        </span>
                        <h2 className={`reveal text-2xl sm:text-3xl md:text-4xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                            Supercharge Your{' '}
                            <span className="gradient-text">Learning Journey</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`reveal stagger-${index + 1}`}
                            >
                                <RetroCard
                                    tag={feature.title}
                                    tagColor={index === 0 ? 'bg-primary-600' : index === 1 ? 'bg-accent-600' : 'bg-emerald-600'}
                                    title={feature.title}
                                    description={feature.description}
                                    darkMode={darkMode}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="section-spacing">
                <div className="container-main">
                    <div className="reveal relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 p-6 sm:p-10 md:p-16 text-center">
                        {/* Decorative circles */}
                        <div className="absolute w-64 h-64 rounded-full bg-white/5 -top-32 -right-16" />
                        <div className="absolute w-48 h-48 rounded-full bg-white/5 -bottom-24 -left-12" />
                        <div className="absolute w-32 h-32 rounded-full bg-white/5 top-1/2 right-1/3" />

                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-primary-200 text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8">
                                At muLearn VIT, students are not just participants — they are creators,
                                innovators, and leaders. Chase your passion, unlock new opportunities,
                                and become ready to contribute, lead, and make an impact.
                            </p>
                            <a
                                href="https://mulearn.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="cta-get-involved"
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-700 font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 cursor-pointer no-underline text-sm sm:text-base"
                            >
                                Get Involved
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
