import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
    cartCount: number;
    onOpenCart: () => void;
    onNavigate: (sectionId: string) => void;
}

export default function Navbar({ cartCount, onOpenCart, onNavigate }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Simple active section detection
            const sections = ['home', 'about', 'menu', 'coffee', 'events', 'gallery', 'reservation'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Menu', id: 'menu' },
        { label: 'Coffee', id: 'coffee' },
        { label: 'Events', id: 'events' },
        { label: 'Gallery', id: 'gallery' },
    ];

    const handleLinkClick = (id: string) => {
        setIsMobileMenuOpen(false);
        onNavigate(id);
    };

    return (
        <>
            <nav
                id="navbar-root"
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled
                        ? 'bg-[#1c1b1b]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl'
                        : 'bg-[#1c1b1b]/80 backdrop-blur-md border-b border-white/5 py-4.5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => handleLinkClick('home')}
                        className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
                        id="nav-logo"
                    >
                        <Utensils className="h-6 w-6 text-gold transition-transform group-hover:rotate-12" />
                        <div>
                            <span className="font-sans font-extrabold text-xl tracking-wider text-white">
                                TRANSIT
                            </span>
                            <span className="font-sans font-light text-xs block text-gold tracking-[0.25em] -mt-1 uppercase">
                                Restaurant
                            </span>
                        </div>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleLinkClick(item.id)}
                                className={`text-sm font-semibold tracking-wide uppercase transition-all hover:text-gold relative pb-1 focus:outline-none cursor-pointer ${activeSection === item.id ? 'text-gold' : 'text-stone-300'
                                    }`}
                                id={`nav-link-${item.id}`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <motion.span
                                        layoutId="activeIndicator"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Action buttons */}
                    <div className="flex items-center gap-4">
                        {/* Cart Icon */}
                        <button
                            onClick={onOpenCart}
                            className="relative p-2.5 bg-stone-800/80 border border-white/10 hover:border-gold hover:bg-stone-800 text-white rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer flex items-center justify-center"
                            id="open-cart-btn"
                            aria-label="View shopping bag"
                        >
                            <ShoppingBag className="h-5 w-5 text-white hover:text-gold transition-colors" />
                            <AnimatePresence>
                                {cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-1 -right-1 bg-gold text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-black"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Book Table Button */}
                        <button
                            onClick={() => handleLinkClick('reservation')}
                            className="hidden sm:inline-block px-6 py-2.5 bg-gold text-black hover:bg-black hover:text-gold border border-gold hover:border-gold rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 transform active:scale-95 cursor-pointer"
                            id="reserve-nav-btn"
                        >
                            Book Table
                        </button>

                        {/* Mobile Menu Hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 bg-stone-800/80 border border-white/10 hover:border-gold text-white rounded-full focus:outline-none cursor-pointer"
                            id="mobile-menu-hamburger"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed ${isScrolled ? 'top-[68px]' : 'top-[76px]'} left-0 w-full bg-[#1c1b1b] border-b border-white/5 z-30 shadow-2xl py-6 md:hidden transition-all duration-300`}
                        id="mobile-menu-drawer"
                    >
                        <div className="flex flex-col gap-4 px-6">
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleLinkClick(item.id)}
                                    className={`text-left text-base font-semibold uppercase tracking-wider py-2 border-b border-white/5 transition-colors cursor-pointer ${activeSection === item.id ? 'text-gold' : 'text-stone-300'
                                        }`}
                                    id={`mobile-nav-link-${item.id}`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: menuItems.length * 0.05 }}
                                onClick={() => handleLinkClick('reservation')}
                                className="w-full py-3 bg-gold text-black rounded-lg font-bold text-sm uppercase tracking-wider text-center cursor-pointer mt-2"
                                id="mobile-reserve-nav-btn"
                            >
                                Reserve Table
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
