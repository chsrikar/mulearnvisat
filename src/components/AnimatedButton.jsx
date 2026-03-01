import { cn } from '../lib/utils'

/**
 * Animated hover-effect button with expanding circle + SVG wave overlays.
 *
 * @param {object}  props
 * @param {'link'|'a'|'button'} props.as        – rendered element (default 'button')
 * @param {string}  props.className              – extra classes on the wrapper
 * @param {string}  props.hoverColor             – Tailwind bg-* class for the expanding circle (default 'bg-primary-600')
 * @param {string}  props.variant                – 'primary' | 'outline' | 'white' (preset colour combos)
 * @param {React.ReactNode} props.children
 * @param {object}  props.rest                   – forwarded to the element (to, href, onClick …)
 */

import { Link } from 'react-router-dom'

const variantStyles = {
    primary:
        'bg-gradient-to-r from-primary-700 to-accent-700 text-white',
    outline:
        'bg-transparent border-2 border-primary-600 text-primary-600 hover:text-white',
    white:
        'bg-white text-primary-700',
}

const hoverColors = {
    primary: 'bg-primary-600',
    outline: 'bg-primary-600',
    white: 'bg-primary-600',
}

export default function AnimatedButton({
    as = 'button',
    variant = 'primary',
    hoverColor,
    className,
    children,
    ...rest
}) {
    const resolvedHover = hoverColor || hoverColors[variant] || 'bg-primary-600'

    const inner = (
        <>
            {/* Expanding circle on hover */}
            <span
                className={cn(
                    'absolute h-0 w-0 rounded-full transition-all duration-500 ease-out group-hover:h-[28rem] group-hover:w-[28rem]',
                    resolvedHover
                )}
            />

            {/* Left wave SVG */}
            <span className="absolute bottom-0 left-0 -ml-2 h-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-auto opacity-100"
                    viewBox="0 0 487 487"
                >
                    <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    />
                </svg>
            </span>

            {/* Right wave SVG */}
            <span className="absolute top-0 right-0 -mr-3 h-full w-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full object-cover"
                    viewBox="0 0 487 487"
                >
                    <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    />
                </svg>
            </span>

            {/* Bottom gradient overlay */}
            <span className="absolute inset-0 -mt-1 h-full w-full rounded-xl bg-gradient-to-b from-transparent via-transparent to-white/10 opacity-30" />

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-base">
                {children}
            </span>
        </>
    )

    const baseClasses = cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 tracking-tight transition-all duration-300 cursor-pointer no-underline border-none',
        'hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
        variantStyles[variant],
        className
    )

    if (as === 'link') {
        return (
            <Link className={baseClasses} {...rest}>
                {inner}
            </Link>
        )
    }

    if (as === 'a') {
        return (
            <a className={baseClasses} {...rest}>
                {inner}
            </a>
        )
    }

    return (
        <button className={baseClasses} {...rest}>
            {inner}
        </button>
    )
}
