// Custom inline SVG icons to prevent lucide-react version and export conflicts (e.g., brand icons, Heart, Shield, etc.) in Next.js
const UtensilsIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3Zm0 0v5" />
    </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const HeartIcon = ({ className, fill }: { className?: string; fill?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={fill || "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

interface FooterProps {
    onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
    return (
        <footer className="bg-[#1c1b1b] text-stone-400 py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                {/* Brand Column (md:col-span-5) */}
                <div className="md:col-span-5 space-y-6">
                    <button
                        onClick={() => onNavigate('home')}
                        className="flex items-center gap-2 text-left focus:outline-none cursor-pointer"
                        id="footer-brand-btn"
                    >
                        <UtensilsIcon className="h-6 w-6 text-gold" />
                        <div>
                            <span className="font-sans font-extrabold text-xl tracking-wider text-white">
                                TRANSIT
                            </span>
                            <span className="font-sans font-light text-xs block text-gold tracking-[0.25em] -mt-1 uppercase">
                                Restaurant
                            </span>
                        </div>
                    </button>

                    <p className="text-stone-400 font-sans text-sm font-light leading-relaxed max-w-sm">
                        Elevating the culinary landscape of Kathmandu through rigorous craft, high-altitude organic ingredients, and warm communal hospitality since 2017.
                    </p>

                    <p className="text-xs text-stone-500 font-sans font-light">
                        Swoyambhu, Kathmandu, Nepal
                    </p>
                </div>

                {/* Navigation Links Column (md:col-span-3) */}
                <div className="md:col-span-3 space-y-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                        Explore
                    </h4>
                    <ul className="space-y-2.5 text-sm" id="footer-navigation-list">
                        {['home', 'about', 'menu', 'coffee', 'events', 'gallery'].map((sec) => (
                            <li key={sec}>
                                <button
                                    onClick={() => onNavigate(sec)}
                                    className="hover:text-gold hover:underline decoration-gold/40 transition-all font-light uppercase tracking-wider text-xs focus:outline-none cursor-pointer"
                                    id={`footer-link-${sec}`}
                                >
                                    {sec === 'home' ? 'Welcome Home' : sec}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Private bookings links (md:col-span-2) */}
                <div className="md:col-span-2 space-y-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                        Bookings
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <button
                                onClick={() => onNavigate('reservation')}
                                className="hover:text-gold transition-colors font-light text-xs uppercase tracking-wider focus:outline-none cursor-pointer"
                            >
                                Table Booking
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="hover:text-gold transition-colors font-light text-xs uppercase tracking-wider focus:outline-none cursor-pointer"
                            >
                                Inquiries
                            </button>
                        </li>
                        <li>
                            <span className="text-stone-600 text-xs font-light block">
                                Private Events
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Social media connections (md:col-span-2) */}
                <div className="md:col-span-2 space-y-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                        Follow Us
                    </h4>
                    <div className="flex gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-stone-800 hover:bg-gold hover:text-black rounded-full text-stone-300 transition-colors"
                            aria-label="Facebook"
                        >
                            <FacebookIcon className="h-4 w-4" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-stone-800 hover:bg-gold hover:text-black rounded-full text-stone-300 transition-colors"
                            aria-label="Instagram"
                        >
                            <InstagramIcon className="h-4 w-4" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-stone-800 hover:bg-gold hover:text-black rounded-full text-stone-300 transition-colors"
                            aria-label="Twitter"
                        >
                            <TwitterIcon className="h-4 w-4" />
                        </a>
                    </div>
                    <p className="text-[10px] text-stone-600 font-light pt-2 leading-relaxed">
                        Transit Barista Academy & Gastronomy Group
                    </p>
                </div>

            </div>

            {/* Copyright Footer */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-600 font-light">
                <p>© 2024 - 2026 Transit Restaurant. Since 2017. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="flex items-center gap-1">
                        <HeartIcon className="h-3 w-3 text-red-500 fill-red-500" /> Made for Kathmandu
                    </span>
                    <span className="flex items-center gap-1">
                        <ShieldIcon className="h-3 w-3 text-gold" /> Secure Table Booking
                    </span>
                </div>
            </div>
        </footer>
    );
}
