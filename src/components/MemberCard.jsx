function MemberCard({ name, role, image, linkedin, darkMode }) {
    return (
        <article
            className={`card-base card-glow p-4 sm:p-6 text-center group ${darkMode ? 'bg-[#1a1a24] border-surface-800' : ''
                }`}
        >
            {/* Image Container */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-3 border-primary-100 group-hover:border-primary-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                </div>
                {/* LinkedIn icon - appears on hover */}
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-primary-700 no-underline"
                        aria-label={`${name}'s LinkedIn profile`}
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                )}
            </div>

            {/* Info */}
            <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                {name}
            </h3>
            <p className={`text-sm mt-1 ${darkMode ? 'text-primary-400' : 'text-primary-600'} font-medium`}>
                {role}
            </p>
        </article>
    )
}

export default MemberCard
