"use client";

import { Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

// Custom inline SVG icons to prevent lucide-react version conflicts (e.g., Linkedin vs LinkedIn) in Next.js
const LinkedInIcon = ({ className }: { className?: string }) => (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
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

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    description: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'suraj',
        name: 'Suraj Thapa',
        role: 'Executive Chef',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_A6LAmJwYtaI1cquUeaWJ56G6E5jeHnx7OsnDfrsx1RVfqe-8aJQA2DTxyl-nS2gIo3HCSnPMgP134l2e7rSoHRqXk3DBGLLa2bT0TVKIJzCz2lQE9A7pqdwD-NCot1j1Pg9pU631PgccKZdKIoalrppM0W9uTZHJwZyCNNNjVmHQdBNnqel1Uf1vo9oaM-GZQj1W3X_-EGf2HKYAzKoh40JwWKg3n3jmvwjzE7ezq5MR4omkg8Mnb0Uqp15GJVfjwX6rCZug64p4',
        description: 'Suraj crafts custom menus blending Himalayan herbs with global gastronomy, resulting in highly visual and flavorful masterpieces.'
    },
    {
        id: 'anmol',
        name: 'Anmol Gurung',
        role: 'Master Barista',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIu8M9qB_7xgjXMsqD9KuyrTvc6t8ZLyHa5gt0R5_zXiF6SimPisA2g6W9mwxbHP466PnvjR9vC9IHXTbvhmmNxNyu-u38kmdLgQepixct3AWSfuBOTIXw0THvu0R2fbK8tU-8DN3cAYOlNcMf0l8Hq3ANu6xy3fQIrJ2i_KmP7yD1Jg1VBnEvkT0BZI62WZdy7GqCuxh49D_-8AMG86AJALcGxOWA5erS7hfGkKEbr0pUoL7PPTBlHCaGg52_oBkqtT1CHKb9ip2V',
        description: 'Anmol heads the Transit Barista Academy, championing high-altitude premium organic beans and innovative theatrical service.'
    },
    {
        id: 'priya',
        name: 'Priya Rai',
        role: 'Guest Relations Manager',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_A6LAmJwYtaI1cquUeaWJ56G6E5jeHnx7OsnDfrsx1RVfqe-8aJQA2DTxyl-nS2gIo3HCSnPMgP134l2e7rSoHRqXk3DBGLLa2bT0TVKIJzCz2lQE9A7pqdwD-NCot1j1Pg9pU631PgccKZdKIoalrppM0W9uTZHJwZyCNNNjVmHQdBNnqel1Uf1vo9oaM-GZQj1W3X_-EGf2HKYAzKoh40JwWKg3n3jmvwjzE7ezq5MR4omkg8Mnb0Uqp15GJVfjwX6rCZug64p4',
        description: 'With a focus on curated hospitality, Priya guarantees every birthday celebration and corporate meeting at Transit runs flawlessly.'
    }
];

export default function TeamSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section
            id="team"
            ref={ref}
            className="py-24 sm:py-32 bg-stone-50/50 text-stone-900 border-b border-stone-200/50"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-gold font-sans font-bold tracking-[0.2em] uppercase text-xs block mb-3">
                        Our Family
                    </span>
                    <h2 className="text-stone-950 font-sans text-4xl sm:text-5xl font-extrabold tracking-tight" id="team-title">
                        The Hearts Behind the Heat
                    </h2>
                    <p className="text-stone-500 font-light mt-4">
                        Meet the exceptional chefs, baristas, and hosts dedicated to crafting your memorable dining journey.
                    </p>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16" id="team-grid">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="text-center group flex flex-col items-center"
                            id={`team-card-${member.id}`}
                        >
                            {/* Member Avatar */}
                            <div className="w-52 h-52 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg group-hover:border-gold transition-all duration-500 relative bg-stone-200">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                />

                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Identity & Role */}
                            <div className="space-y-2 max-w-sm">
                                <h3 className="text-xl font-bold font-sans text-stone-950 flex items-center justify-center gap-1.5">
                                    {member.name}
                                    {member.role === 'Executive Chef' && (
                                        <Sparkles className="h-4 w-4 text-gold fill-gold" />
                                    )}
                                </h3>
                                <p className="text-gold font-sans uppercase tracking-[0.15em] text-[10px] font-extrabold">
                                    {member.role}
                                </p>
                                <p className="text-stone-500 font-sans text-sm font-light leading-relaxed pt-2">
                                    {member.description}
                                </p>
                            </div>

                            {/* Social links placeholder */}
                            <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    className="p-1.5 bg-stone-100 hover:bg-stone-950 text-stone-500 hover:text-gold rounded-full transition-colors cursor-pointer"
                                    aria-label={`${member.name} LinkedIn`}
                                >
                                    <LinkedInIcon className="h-4 w-4" />
                                </button>
                                <button
                                    className="p-1.5 bg-stone-100 hover:bg-stone-950 text-stone-500 hover:text-gold rounded-full transition-colors cursor-pointer"
                                    aria-label={`${member.name} Twitter`}
                                >
                                    <TwitterIcon className="h-4 w-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
