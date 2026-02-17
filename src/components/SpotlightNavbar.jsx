import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'
import { cn } from '../lib/utils'

function SpotlightNavbar({ items, activeIndex, onItemClick, className }) {
    const navRef = useRef(null)
    const [hoverX, setHoverX] = useState(null)

    // Refs for the "light" positions so we can animate them imperatively
    const spotlightX = useRef(0)
    const ambienceX = useRef(0)

    useEffect(() => {
        if (!navRef.current) return
        const nav = navRef.current

        const handleMouseMove = (e) => {
            const rect = nav.getBoundingClientRect()
            const x = e.clientX - rect.left
            setHoverX(x)
            spotlightX.current = x
            nav.style.setProperty('--spotlight-x', `${x}px`)
        }

        const handleMouseLeave = () => {
            setHoverX(null)
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`)
            if (activeItem) {
                const navRect = nav.getBoundingClientRect()
                const itemRect = activeItem.getBoundingClientRect()
                const targetX = itemRect.left - navRect.left + itemRect.width / 2

                animate(spotlightX.current, targetX, {
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v
                        nav.style.setProperty('--spotlight-x', `${v}px`)
                    },
                })
            }
        }

        nav.addEventListener('mousemove', handleMouseMove)
        nav.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            nav.removeEventListener('mousemove', handleMouseMove)
            nav.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [activeIndex])

    // Handle the "Ambience" (Active Item) Movement
    useEffect(() => {
        if (!navRef.current) return
        const nav = navRef.current
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`)

        if (activeItem) {
            const navRect = nav.getBoundingClientRect()
            const itemRect = activeItem.getBoundingClientRect()
            const targetX = itemRect.left - navRect.left + itemRect.width / 2

            animate(ambienceX.current, targetX, {
                type: 'spring',
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v
                    nav.style.setProperty('--ambience-x', `${v}px`)
                },
            })
        }
    }, [activeIndex])

    return (
        <nav
            ref={navRef}
            className={cn(
                'spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow',
                'relative h-11 rounded-full transition-all duration-300 overflow-hidden',
                className
            )}
        >
            {/* Content */}
            <ul className="relative flex items-center h-full px-2 gap-0 z-10 list-none m-0 p-0">
                {items.map((item, idx) => (
                    <li key={idx} className="relative h-full flex items-center justify-center">
                        <button
                            data-index={idx}
                            onClick={() => onItemClick(item, idx)}
                            className={cn(
                                'px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer border-none bg-transparent',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400',
                                activeIndex === idx
                                    ? 'text-surface-900 dark:text-white'
                                    : 'text-surface-400 dark:text-surface-500 hover:text-surface-900 dark:hover:text-white'
                            )}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* 1. The Moving Spotlight (Follows Mouse) */}
            <div
                className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] transition-opacity duration-300"
                style={{
                    opacity: hoverX !== null ? 1 : 0,
                    background: `radial-gradient(120px circle at var(--spotlight-x) 100%, var(--spotlight-color) 0%, transparent 50%)`,
                }}
            />

            {/* 2. The Active State Ambience (Stays on Active) */}
            <div
                className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
                style={{
                    background: `radial-gradient(60px circle at var(--ambience-x) 0%, var(--ambience-color) 0%, transparent 100%)`,
                }}
            />
        </nav>
    )
}

export default SpotlightNavbar
