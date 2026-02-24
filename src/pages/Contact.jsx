import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Loader2, Mail, MapPin, Send } from 'lucide-react'
import { cn } from '../lib/utils'
import emailjs from '@emailjs/browser'

function Contact({ darkMode }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const formRef = useRef(null)
    const formElRef = useRef(null)
    const isInView = useInView(formRef, { once: true, amount: 0.3 })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setName('')
            setEmail('')
            setMessage('')
            setIsSubmitted(true)
            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        } catch (err) {
            console.error('EmailJS error:', err)
            setError('Failed to send message. Please try again later.')
            setTimeout(() => setError(''), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
            {/* Background blurred gradients */}
            <div
                className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, #6366f1, transparent 70%)',
                }}
            />
            <div
                className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, #a855f7, transparent 70%)',
                }}
            />

            {/* Header */}
            <div className="container-main text-center mb-8 sm:mb-12 relative z-10">
                <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                    Get In Touch
                </span>
                <h1 className={`text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-surface-900'}`}>
                    Contact{' '}
                    <span className="gradient-text">Us</span>
                </h1>
                <p className={`text-base md:text-lg max-w-2xl mx-auto ${darkMode ? 'text-surface-400' : 'text-surface-500'}`}>
                    Have a question or want to collaborate? We would love to hear from you.
                </p>
            </div>

            {/* Main Card */}
            <div className="container-main relative z-10">
                <div
                    className={cn(
                        'mx-auto max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border shadow-xl backdrop-blur-sm',
                        darkMode
                            ? 'bg-[#1a1a24]/80 border-surface-800/40'
                            : 'bg-white/80 border-surface-200/40'
                    )}
                >
                    <div className="grid md:grid-cols-2">
                        {/* Left — Form */}
                        <div className="relative p-5 sm:p-6 md:p-10" ref={formRef}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex items-center gap-2 mb-6"
                            >
                                <h2 className={cn(
                                    'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight',
                                    darkMode ? 'text-white' : 'text-surface-900'
                                )}>
                                    Send a
                                </h2>
                                <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight italic gradient-text">
                                    Message
                                </span>
                            </motion.div>

                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <motion.div
                                        className="space-y-1.5"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label htmlFor="contact-name" className={cn(
                                            'text-sm font-medium',
                                            darkMode ? 'text-surface-300' : 'text-surface-700'
                                        )}>
                                            Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter your name"
                                            required
                                            className={cn(
                                                'w-full px-4 py-3 rounded-xl border transition-all duration-300 text-sm',
                                                'focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500',
                                                darkMode
                                                    ? 'bg-[#12121a] border-surface-800 text-white placeholder-surface-600'
                                                    : 'bg-white border-surface-200 text-surface-900 placeholder-surface-400'
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="space-y-1.5"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label htmlFor="contact-email" className={cn(
                                            'text-sm font-medium',
                                            darkMode ? 'text-surface-300' : 'text-surface-700'
                                        )}>
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            className={cn(
                                                'w-full px-4 py-3 rounded-xl border transition-all duration-300 text-sm',
                                                'focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500',
                                                darkMode
                                                    ? 'bg-[#12121a] border-surface-800 text-white placeholder-surface-600'
                                                    : 'bg-white border-surface-200 text-surface-900 placeholder-surface-400'
                                            )}
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    className="space-y-1.5"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label htmlFor="contact-message" className={cn(
                                        'text-sm font-medium',
                                        darkMode ? 'text-surface-300' : 'text-surface-700'
                                    )}>
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell us what you're thinking..."
                                        required
                                        rows={5}
                                        className={cn(
                                            'w-full px-4 py-3 rounded-xl border transition-all duration-300 text-sm resize-none',
                                            'focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500',
                                            darkMode
                                                ? 'bg-[#12121a] border-surface-800 text-white placeholder-surface-600'
                                                : 'bg-white border-surface-200 text-surface-900 placeholder-surface-400'
                                        )}
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full"
                                >
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={cn(
                                            'w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 cursor-pointer border-none',
                                            'bg-gradient-to-b from-primary-500 to-primary-700',
                                            'shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
                                            'hover:shadow-lg hover:shadow-primary-500/25',
                                            'disabled:opacity-70 disabled:cursor-not-allowed',
                                            'flex items-center justify-center gap-2'
                                        )}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : isSubmitted ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </motion.div>

                                {/* Error message */}
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-sm text-red-500 text-center font-medium"
                                    >
                                        {error}
                                    </motion.p>
                                )}
                            </motion.form>
                        </div>

                        {/* Right — Decorative Card + Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="relative flex flex-col items-center justify-center p-5 sm:p-6 md:p-8"
                        >
                            {/* Gradient hero card */}
                            <article className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-primary-600 to-accent-700 p-6 sm:p-8 text-white mb-6">
                                {/* Decorative circles */}
                                <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/10" />
                                <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/5" />
                                <div className="absolute right-8 bottom-12 w-20 h-20 rounded-full bg-white/10" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5">
                                        <span className="text-2xl font-black">mu</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-3">
                                        Let's build something{' '}
                                        <span className="italic">amazing</span>{' '}
                                        together.
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Whether you have a question, project idea, or just want to say hello —
                                        we're always open for a conversation.
                                    </p>
                                </div>
                            </article>

                            {/* Contact details */}
                            <div className="w-full space-y-3">
                                {[
                                    {
                                        icon: Mail,
                                        label: 'Email',
                                        value: 'mulearn@visat.ac.in',
                                        href: 'mailto:mulearn@visat.ac.in',
                                    },
                                    {
                                        icon: MapPin,
                                        label: 'Location',
                                        value: 'VISAT Engineering College, Elanji, Kerala',
                                        href: 'https://maps.google.com/?q=VISAT+Engineering+College',
                                    },
                                ].map((item, index) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className={cn(
                                            'flex items-center gap-3 p-3 rounded-xl transition-all duration-200 no-underline group',
                                            darkMode
                                                ? 'hover:bg-white/5 text-surface-300'
                                                : 'hover:bg-surface-50 text-surface-600'
                                        )}
                                    >
                                        <div className={cn(
                                            'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors',
                                            darkMode
                                                ? 'bg-primary-600/20 text-primary-400 group-hover:bg-primary-600/30'
                                                : 'bg-primary-50 text-primary-600 group-hover:bg-primary-100'
                                        )}>
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className={cn(
                                                'text-xs font-medium',
                                                darkMode ? 'text-surface-500' : 'text-surface-400'
                                            )}>
                                                {item.label}
                                            </p>
                                            <p className={cn(
                                                'text-sm font-semibold',
                                                darkMode ? 'text-white' : 'text-surface-900'
                                            )}>
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
