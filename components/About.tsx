"use client";
import { useState, useEffect, useRef } from 'react';
import { Calendar, Award, Star, Coffee } from 'lucide-react';
import { motion, useInView, animate } from 'motion/react';

export default function About() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    const [customerCount, setCustomerCount] = useState(0);
    const [dishesCount, setDishesCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const customerControls = animate(0, 10000, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (value) => setCustomerCount(Math.floor(value)),
        });

        const dishesControls = animate(0, 120, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (value) => setDishesCount(Math.floor(value)),
        });

        return () => {
            customerControls.stop();
            dishesControls.stop();
        };
    }, [isInView]);

    return (
        <section
            id="about"
            ref={containerRef}
            className="py-24 sm:py-32 bg-[#fdf8f8] text-stone-900 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Visual Grid - Left side */}
                    <div className="lg:col-span-6 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group bg-stone-200"
                        >
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNh3b0GUp5bt3nqXyj-wERC7TX7RN8WB6yOsXr7Lo8dMt7oINFP0r-womQx04I9DxmzMi5qJ5m8HYhfeTK4JjLa1ITsgq_ZiA-QZFCMywez4ryzWMOS83CWW4ybWvkY2pDEdRwYdQnwgjktCRHvr5d3myRpP2DvSFI18daFgz19rvJm_FWTK8v9635T1_j9I8VoPSKfr3UPJInI-9l-ZAWw2Z2_8B6D_KBZsXAVG_2thwON1WUnWv0cUlgOyTMUD1jMTGnjHoqQri_"
                                alt="Transit Restaurant cozy interior seating"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute bottom-6 right-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden md:block"
                        >
                            <p className="text-gold font-sans font-extrabold text-2xl mb-1">Since 2017</p>
                            <p className="text-stone-500 font-sans uppercase tracking-[0.15em] text-[9px] font-semibold flex items-center gap-1.5">
                                <Award className="h-3 w-3 text-gold" />
                                Excellence in Service
                            </p>
                        </motion.div>
                    </div>

                    {/* Narrative Content - Right side */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6 }}
                                className="text-gold font-sans font-bold tracking-[0.2em] uppercase text-xs block"
                            >
                                Culinary Excellence
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-stone-950 font-sans text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
                                id="about-title"
                            >
                                Our Story
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-stone-600 font-sans text-lg leading-relaxed font-light"
                            id="about-narrative"
                        >
                            At <strong className="font-semibold text-stone-900">Transit Restaurant</strong>, we believe every meal should be a destination. Since opening our doors in <strong className="font-semibold text-stone-900">2017</strong>, we have curated a space where modern gastronomic craftsmanship meets the comfort of memorable family celebrations.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-stone-600 font-sans text-base leading-relaxed font-light"
                        >
                            From our custom-roasted organic beans harvested from high-altitude Nepalese plantations to our masterfully styled chicken schnitzel and medallions, we take pride in delivering visual wonder alongside stunning flavors.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 gap-8 py-8 border-y border-stone-200"
                        >
                            <div>
                                <h3 className="text-4xl sm:text-5xl font-extrabold font-sans text-stone-950" id="counter-customers">
                                    {customerCount.toLocaleString()}+
                                </h3>
                                <p className="text-xs font-semibold tracking-wider text-stone-500 uppercase mt-2 flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-gold text-gold" />
                                    Happy Customers
                                </p>
                            </div>
                            <div>
                                <h3 className="text-4xl sm:text-5xl font-extrabold font-sans text-stone-950" id="counter-dishes">
                                    {dishesCount}+
                                </h3>
                                <p className="text-xs font-semibold tracking-wider text-stone-500 uppercase mt-2 flex items-center gap-1">
                                    <Coffee className="h-3 w-3 text-gold" />
                                    Crafted Offerings
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex items-center gap-6 text-sm text-stone-500"
                        >
                            <span className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-gold" /> Daily: 8 AM - 10 PM
                            </span>
                            <span className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-gold fill-gold" /> Rated 4.9 on TripAdvisor
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}