"use client";

import { Coffee, Flame, CupSoda, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export interface CoffeeMenuItem {
    name: string;
    price: number;
    desc: string;
}

export const COFFEE_MENU: CoffeeMenuItem[] = [
    { name: 'Transit Espresso Roast', price: 4.50, desc: 'Rich, dark chocolate notes with a velvety smooth crema.' },
    { name: 'Nitrogen Cold Brew', price: 6.00, desc: '24-hour steep infused with nitrogen for a creamy, sweet head.' },
    { name: 'Smoked Cinnamon Latte', price: 7.50, desc: 'Signature espresso topped with torched organic cinnamon bark.' },
    { name: 'Manual V60 Pour Over', price: 5.50, desc: 'Our single-origin hand-poured coffee showcasing complex profiles.' }
];

interface CoffeeSectionProps {
    onViewCoffee: () => void;
}

export default function CoffeeSection({ onViewCoffee }: CoffeeSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section
            id="coffee"
            ref={ref}
            className="py-24 sm:py-32 bg-[#111111] text-white overflow-hidden relative border-y border-stone-900"
        >
            {/* Decorative radial gradient glow */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-10 bottom-10 w-80 h-80 bg-[#4e3b31]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Coffee List - Left side */}
                    <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                className="text-gold font-sans font-bold tracking-[0.2em] uppercase text-xs block"
                            >
                                Specialty Coffee
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 }}
                                className="text-white font-sans text-4xl sm:text-5xl font-extrabold tracking-tight"
                                id="coffee-title"
                            >
                                The Coffee Experience
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.2 }}
                                className="text-stone-400 font-sans text-lg font-light leading-relaxed max-w-2xl"
                            >
                                We source only the finest single-origin organic beans, harvested from high-altitude plantations in Nepal and roasted locally to preserve the intricate, delicate flavor profiles that define the Transit experience.
                            </motion.p>
                        </div>

                        {/* Dotted Leader Menu List */}
                        <div className="space-y-6" id="coffee-dotted-list">
                            {COFFEE_MENU.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
                                    className="space-y-1"
                                >
                                    <div className="flex justify-between items-baseline gap-4">
                                        <span className="font-sans font-bold text-base text-stone-100 flex items-center gap-2">
                                            {index === 2 ? (
                                                <Flame className="h-4 w-4 text-orange-400 fill-orange-400" />
                                            ) : index === 1 ? (
                                                <CupSoda className="h-4 w-4 text-cyan-400" />
                                            ) : (
                                                <Coffee className="h-4 w-4 text-gold" />
                                            )}
                                            {item.name}
                                        </span>
                                        <span className="flex-grow border-b border-stone-800 border-dotted mx-2" />
                                        <span className="font-mono font-bold text-gold">${item.price.toFixed(2)}</span>
                                    </div>
                                    <p className="text-stone-500 text-xs font-sans font-light pl-6">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            onClick={onViewCoffee}
                            className="px-8 py-3.5 bg-gold hover:bg-white text-black font-bold rounded-full text-xs tracking-widest uppercase transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg shadow-gold/5 flex items-center gap-2"
                            id="view-coffee-btn"
                        >
                            <Sparkles className="h-4 w-4 text-black fill-black" />
                            View Full Coffee Menu
                        </motion.button>
                    </div>

                    {/* Coffee Image Showcase - Right side */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, rotate: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, rotate: 2, scale: 1 } : {}}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 aspect-[4/5] group"
                            id="coffee-showcase-container"
                        >
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof"
                                alt="Transit specialty coffee preparation"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 to-transparent" />

                            {/* Overlay stats badge */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-center">
                                <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-gold block mb-1">
                                    Nepal High-Altitude Coffee
                                </span>
                                <p className="text-white text-xs font-light">
                                    Direct Trade Organic Arabica Beans
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
