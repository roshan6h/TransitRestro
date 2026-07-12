import { ArrowUpRight, ShieldCheck, Heart, Sparkles, Building } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface EventsSectionProps {
    onBookEvent: () => void;
}

export default function EventsSection({ onBookEvent }: EventsSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="events" ref={ref} className="py-24 sm:py-32 bg-[#fdf8f8] text-stone-900 border-b border-stone-200/50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-2xl space-y-3">
                        <span className="text-gold font-sans font-bold tracking-[0.2em] uppercase text-xs block">
                            Memorable Moments
                        </span>
                        <h2 className="text-stone-950 font-sans text-4xl sm:text-5xl font-extrabold tracking-tight" id="events-title">
                            Atmosphere for Every Occasion
                        </h2>
                        <p className="text-stone-500 font-light">
                            From corporate retreats to custom-decorated birthday tables, we provide the perfect settings, exquisite food, and meticulous hospitality.
                        </p>
                    </div>
                    <button
                        onClick={onBookEvent}
                        className="px-8 py-3.5 border-2 border-stone-950 text-stone-950 font-bold hover:bg-stone-950 hover:text-gold rounded-full text-xs tracking-widest uppercase transition-all transform active:scale-95 shrink-0 cursor-pointer"
                        id="book-event-trigger"
                    >
                        Inquire About Private Events
                    </button>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px]" id="events-grid">

                    {/* Main Card: Corporate Meetings (md:col-span-8) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8 h-[350px] md:h-full rounded-2xl overflow-hidden shadow-md relative group cursor-pointer border border-stone-200/50"
                        onClick={onBookEvent}
                        id="event-card-corporate"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNh3b0GUp5bt3nqXyj-wERC7TX7RN8WB6yOsXr7Lo8dMt7oINFP0r-womQx04I9DxmzMi5qJ5m8HYhfeTK4JjLa1ITsgq_ZiA-QZFCMywez4ryzWMOS83CWW4ybWvkY2pDEdRwYdQnwgjktCRHvr5d3myRpP2DvSFI18daFgz19rvJm_FWTK8v9635T1_j9I8VoPSKfr3UPJInI-9l-ZAWw2Z2_8B6D_KBZsXAVG_2thwON1WUnWv0cUlgOyTMUD1jMTGnjHoqQri_"
                            alt="Corporate meeting or professional lunch"
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                        <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md border border-white/10 p-2.5 rounded-xl text-gold">
                            <Building className="h-5 w-5" />
                        </div>

                        <div className="absolute bottom-10 left-10 right-10 text-white space-y-2">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-gold block">
                                Professional Settings
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold font-sans flex items-center gap-2 group-hover:text-gold transition-colors">
                                Corporate Meetings & Luncheons <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-stone-300 font-light text-sm max-w-xl">
                                Refined, distraction-free space fitted with modular dining setups, high-speed Wi-Fi, and custom curated menus for professional presentation.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column Grid: Birthdays & Anniversaries (md:col-span-4) */}
                    <div className="md:col-span-4 flex flex-col gap-6 h-full">

                        {/* Birthday celebrations */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-[300px] md:h-1/2 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer border border-stone-200/50"
                            onClick={onBookEvent}
                            id="event-card-birthdays"
                        >
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIu8M9qB_7xgjXMsqD9KuyrTvc6t8ZLyHa5gt0R5_zXiF6SimPisA2g6W9mwxbHP466PnvjR9vC9IHXTbvhmmNxNyu-u38kmdLgQepixct3AWSfuBOTIXw0THvu0R2fbK8tU-8DN3cAYOlNcMf0l8Hq3ANu6xy3fQIrJ2i_KmP7yD1Jg1VBnEvkT0BZI62WZdy7GqCuxh49D_-8AMG86AJALcGxOWA5erS7hfGkKEbr0pUoL7PPTBlHCaGg52_oBkqtT1CHKb9ip2V"
                                alt="Birthday balloon setup and group celebration"
                                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md border border-white/10 p-2.5 rounded-xl text-gold">
                                <Sparkles className="h-5 w-5" />
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                                <span className="text-[9px] font-bold tracking-widest uppercase text-gold block">
                                    Joyous Gatherings
                                </span>
                                <h3 className="text-xl font-bold font-sans flex items-center gap-1 group-hover:text-gold transition-colors">
                                    Birthday Celebrations <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-stone-300 font-light text-xs line-clamp-2">
                                    Delight family members with custom themed balloon setups, beautiful tablescapes, and personalized dessert plates.
                                </p>
                            </div>
                        </motion.div>

                        {/* Anniversary celebrations */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="h-[300px] md:h-1/2 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer border border-stone-200/50"
                            onClick={onBookEvent}
                            id="event-card-anniversaries"
                        >
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_A6LAmJwYtaI1cquUeaWJ56G6E5jeHnx7OsnDfrsx1RVfqe-8aJQA2DTxyl-nS2gIo3HCSnPMgP134l2e7rSoHRqXk3DBGLLa2bT0TVKIJzCz2lQE9A7pqdwD-NCot1j1Pg9pU631PgccKZdKIoalrppM0W9uTZHJwZyCNNNjVmHQdBNnqel1Uf1vo9oaM-GZQj1W3X_-EGf2HKYAzKoh40JwWKg3n3jmvwjzE7ezq5MR4omkg8Mnb0Uqp15GJVfjwX6rCZug64p4"
                                alt="Cozy dining celebration with friends"
                                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md border border-white/10 p-2.5 rounded-xl text-gold">
                                <Heart className="h-5 w-5" />
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                                <span className="text-[9px] font-bold tracking-widest uppercase text-gold block">
                                    Intimate Milestones
                                </span>
                                <h3 className="text-xl font-bold font-sans flex items-center gap-1 group-hover:text-gold transition-colors">
                                    Anniversaries & Gatherings <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-stone-300 font-light text-xs line-clamp-2">
                                    Cherish important milestones with candlelight, ambient lounge background music, and curated wine and steak offerings.
                                </p>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
