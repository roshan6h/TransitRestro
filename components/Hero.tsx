import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
    onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Immersive background image with parallax scaling */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.65 }}
                    transition={{ duration: 1.8, ease: 'easeOut' }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3CRVSF8NbA0LGVWYg6uv-zRmzxOj-B-n7qA7RM4dT7Mvz_warQNrU-iNJwTjSImQMPol_tsVkEvPbd7jdr1nptZ7-8OG1QJSrJI7geYkXG_m778P-jO2B-mpm5Et5IO7aQWvE9YJMj1OCk0il8KyQ6URA6nIGjVxZOheT5HExr3Ej75ADq4wpYorcPVLbaMl8KG4aW0Pl4AiE4CY6hsRgZuxLyE7iixvRmPrn4STY2nyJQH4q4_Hqh6RZtTsrY_aTt3J6fy_Emq_e"
                    alt="Transit Restaurant fine dining"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/40 to-[#fdf8f8]" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                {/* Logo/Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 flex items-center gap-2 px-4 py-1.5 bg-black/50 border border-gold/30 rounded-full text-gold text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                >
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    Established in 2017
                </motion.div>

                {/* Cinematic Header */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white font-sans text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-shadow"
                    id="hero-title"
                >
                    Experience Dining <br />
                    <span className="text-gold">Beyond Expectations</span>
                </motion.h1>

                {/* Dynamic description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-stone-200 font-sans text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light uppercase tracking-widest border-y border-white/10 py-3"
                    id="hero-description"
                >
                    Premium Cuisine <span className="text-gold">•</span> Specialty Coffee{' '}
                    <span className="text-gold">•</span> Family Gatherings{' '}
                    <span className="text-gold">•</span> Celebrations
                </motion.p>

                {/* Action button triggers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                >
                    <button
                        onClick={() => onNavigate('reservation')}
                        className="w-full sm:w-auto px-8 py-4 bg-gold text-black rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-xl hover:bg-white hover:text-black hover:shadow-gold/20 transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 border border-gold"
                        id="hero-reserve-btn"
                    >
                        Reserve Table <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => onNavigate('menu')}
                        className="w-full sm:w-auto px-8 py-4 bg-stone-900/60 text-white backdrop-blur-sm hover:bg-stone-800/80 hover:text-gold border border-white/20 hover:border-gold rounded-full font-bold text-sm tracking-widest uppercase transition-all transform active:scale-95 cursor-pointer"
                        id="hero-explore-btn"
                    >
                        Explore Menu
                    </button>
                </motion.div>
            </div>

            {/* Smooth scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                onClick={() => onNavigate('about')}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white hover:text-gold cursor-pointer flex flex-col items-center gap-1.5 focus:outline-none"
                aria-label="Scroll down to About section"
            >
                <span className="text-xs uppercase tracking-widest text-stone-300 font-bold">
                    Our Story
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="h-6 w-6 text-gold" />
                </motion.div>
            </motion.button>
        </section>
    );
}
