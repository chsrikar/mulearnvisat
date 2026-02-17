function RetroCard({ tag, tagColor = 'bg-primary-500', title, description, author, authorRole, darkMode }) {
    return (
        <article
            className={`flex w-full flex-col items-start justify-between border-4 p-5 sm:p-6 transition-shadow duration-300 ${darkMode
                    ? 'bg-[#1a1a24] border-surface-200 shadow-[6px_6px_0_0_rgba(255,255,255,0.8)] hover:shadow-[10px_10px_0_0_rgba(255,255,255,0.9)]'
                    : 'bg-white border-surface-900 shadow-[6px_6px_0_0_#171717] hover:shadow-[10px_10px_0_0_#171717]'
                }`}
        >
            {/* Tag badges */}
            {tag && (
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                    <span
                        className={`${tagColor} px-3 py-1 font-bold text-white border-2 ${darkMode ? 'border-surface-200' : 'border-surface-900'
                            }`}
                    >
                        {tag}
                    </span>
                </div>
            )}

            {/* Title & description */}
            <div className="group relative">
                <h3
                    className={`mt-1 text-lg sm:text-xl leading-snug font-black uppercase ${darkMode ? 'text-white' : 'text-surface-900'
                        }`}
                >
                    {title}
                </h3>
                <p
                    className={`text-sm sm:text-base mt-3 sm:mt-4 border-l-4 border-primary-500 pl-3 sm:pl-4 leading-relaxed ${darkMode ? 'text-surface-400' : 'text-surface-600'
                        }`}
                >
                    {description}
                </p>
            </div>

            {/* Author (optional) */}
            {author && (
                <div className="relative mt-5 sm:mt-6 flex items-center gap-x-2">
                    <div className="text-sm leading-6">
                        <p className={`font-black ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                            {author}
                        </p>
                        {authorRole && (
                            <p className={`font-bold text-xs ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                                {authorRole}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </article>
    )
}

export default RetroCard
