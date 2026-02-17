function EventCard({ title, date, description, image, status, darkMode }) {
    return (
        <article
            className={`card-base card-glow overflow-hidden group ${darkMode ? 'bg-[#1a1a24] border-surface-800' : ''
                }`}
        >
            {/* Image */}
            <div className="relative overflow-hidden h-40 sm:h-48">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                    <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${status === 'ongoing'
                            ? 'bg-emerald-500/90 text-white'
                            : darkMode
                                ? 'bg-surface-700/90 text-surface-300'
                                : 'bg-surface-200/90 text-surface-600'
                            }`}
                    >
                        {status === 'ongoing' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                        {status === 'ongoing' ? 'Ongoing' : 'Past'}
                    </span>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5">
                <p className={`text-xs font-medium mb-2 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                    {date}
                </p>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-surface-900'} group-hover:text-primary-600 transition-colors duration-300`}>
                    {title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                    {description}
                </p>
            </div>
        </article>
    )
}

export default EventCard
