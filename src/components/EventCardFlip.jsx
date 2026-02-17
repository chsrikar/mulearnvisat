import { useState } from 'react'
import { Calendar, MapPin, ArrowRight, Users, Clock } from 'lucide-react'
import { cn } from '../lib/utils'

function EventCardFlip({ title, date, description, image, status, darkMode }) {
    const [isFlipped, setIsFlipped] = useState(false)

    const isOngoing = status === 'ongoing'

    return (
        <div
            className="group relative h-[380px] w-full [perspective:2000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={cn(
                    'relative h-full w-full',
                    '[transform-style:preserve-3d]',
                    'transition-all duration-700',
                    isFlipped
                        ? '[transform:rotateY(180deg)]'
                        : '[transform:rotateY(0deg)]'
                )}
            >
                {/* Front of card */}
                <div
                    className={cn(
                        'absolute inset-0 h-full w-full',
                        '[transform:rotateY(0deg)] [backface-visibility:hidden]',
                        'overflow-hidden rounded-2xl',
                        darkMode
                            ? 'bg-gradient-to-br from-[#1a1a24] via-[#1a1a24]/95 to-[#222230]'
                            : 'bg-gradient-to-br from-white via-slate-50 to-slate-100',
                        darkMode
                            ? 'border border-surface-800/50'
                            : 'border border-surface-200',
                        'shadow-lg',
                        'transition-all duration-700',
                        'group-hover:shadow-xl',
                        isFlipped ? 'opacity-0' : 'opacity-100'
                    )}
                >
                    {/* Event Image */}
                    <div className="relative h-[55%] overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to top, #1a1a24 0%, transparent 60%)'
                                    : 'linear-gradient(to top, white 0%, transparent 60%)',
                            }}
                        />
                        {/* Status badge */}
                        <div className="absolute top-3 left-3">
                            <span
                                className={cn(
                                    'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
                                    isOngoing
                                        ? 'bg-emerald-500/90 text-white'
                                        : darkMode
                                            ? 'bg-surface-700/80 text-surface-300'
                                            : 'bg-surface-200/90 text-surface-600'
                                )}
                            >
                                {isOngoing && (
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse mr-1.5 align-middle" />
                                )}
                                {status}
                            </span>
                        </div>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute right-0 bottom-0 left-0 p-5">
                        <div className="space-y-2">
                            <div className={cn(
                                'flex items-center gap-2 text-xs font-medium',
                                darkMode ? 'text-primary-400' : 'text-primary-600'
                            )}>
                                <Calendar className="w-3.5 h-3.5" />
                                {date}
                            </div>
                            <h3 className={cn(
                                'text-lg font-bold leading-snug tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-4px]',
                                darkMode ? 'text-white' : 'text-surface-900'
                            )}>
                                {title}
                            </h3>
                            <p className={cn(
                                'text-sm line-clamp-2 transition-all delay-[50ms] duration-500 ease-out group-hover:translate-y-[-4px]',
                                darkMode ? 'text-surface-400' : 'text-surface-500'
                            )}>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className={cn(
                        'absolute inset-0 h-full w-full',
                        '[transform:rotateY(180deg)] [backface-visibility:hidden]',
                        'rounded-2xl p-5',
                        darkMode
                            ? 'bg-gradient-to-br from-[#1a1a24] via-[#1a1a24]/95 to-[#222230]'
                            : 'bg-gradient-to-br from-white via-slate-50 to-slate-100',
                        darkMode
                            ? 'border border-surface-800'
                            : 'border border-surface-200',
                        'shadow-lg',
                        'flex flex-col',
                        'transition-all duration-700',
                        'group-hover:shadow-xl',
                        !isFlipped ? 'opacity-0' : 'opacity-100'
                    )}
                >
                    {/* Background gradient */}
                    <div className={cn(
                        'absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent',
                        darkMode
                            ? 'from-primary-600/10 to-accent-500/10'
                            : 'from-primary-600/5 to-accent-500/5'
                    )} />

                    <div className="relative z-10 flex-1 space-y-4">
                        {/* Header */}
                        <div className="space-y-2">
                            <div className="mb-2 flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500">
                                    <Calendar className="h-4 w-4 text-white" />
                                </div>
                                <h3 className={cn(
                                    'text-lg font-bold leading-snug tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-2px]',
                                    darkMode ? 'text-white' : 'text-surface-900'
                                )}>
                                    {title}
                                </h3>
                            </div>
                            <p className={cn(
                                'text-sm leading-relaxed',
                                darkMode ? 'text-surface-400' : 'text-surface-500'
                            )}>
                                {description}
                            </p>
                        </div>

                        {/* Event details */}
                        <div className="space-y-2.5">
                            {[
                                { icon: Calendar, text: date },
                                { icon: Clock, text: isOngoing ? 'Happening Now' : 'Completed' },
                                { icon: Users, text: 'Open to all students' },
                                { icon: MapPin, text: 'VISAT Campus' },
                            ].map((detail, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        'flex items-center gap-3 text-sm transition-all duration-500',
                                        darkMode ? 'text-surface-300' : 'text-surface-600'
                                    )}
                                    style={{
                                        transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                                        opacity: isFlipped ? 1 : 0,
                                        transitionDelay: `${index * 100 + 200}ms`,
                                    }}
                                >
                                    <div className={cn(
                                        'flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md',
                                        darkMode ? 'bg-primary-600/20' : 'bg-primary-600/10'
                                    )}>
                                        <detail.icon className="h-3.5 w-3.5 text-primary-500" />
                                    </div>
                                    <span className="font-medium">{detail.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom action */}
                    <div className={cn(
                        'relative z-10 mt-auto pt-4 border-t',
                        darkMode ? 'border-surface-800' : 'border-surface-200'
                    )}>
                        <div
                            className={cn(
                                'group/start relative',
                                'flex items-center justify-between',
                                'rounded-lg p-2.5',
                                'transition-all duration-300',
                                darkMode
                                    ? 'bg-surface-800 hover:bg-primary-600/20'
                                    : 'bg-surface-100 hover:bg-primary-600/10',
                                'hover:scale-[1.02] hover:cursor-pointer',
                                'border border-transparent hover:border-primary-500/20'
                            )}
                        >
                            <span className={cn(
                                'text-sm font-semibold transition-colors duration-300 group-hover/start:text-primary-500',
                                darkMode ? 'text-white' : 'text-surface-900'
                            )}>
                                {isOngoing ? 'Register Now' : 'View Details'}
                            </span>
                            <ArrowRight className="h-4 w-4 text-primary-500 transition-all duration-300 group-hover/start:translate-x-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCardFlip
