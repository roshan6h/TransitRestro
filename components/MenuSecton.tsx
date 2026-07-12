"use client";

import { useState } from 'react';
import { Sparkles, Plus, Check, Coffee as CoffeeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
    category: 'breakfast' | 'lunch' | 'dinner' | 'coffee';
    image: string;
    tags?: string[];
    isChefSpecial?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
    {
        id: 'crispy-chicken',
        name: 'Signature Crispy Chicken',
        price: 24.00,
        description: 'Herb-crusted crispy chicken breast served with seasonal microgreens, thin strips of red beet, and a rich balsamic reduction.',
        category: 'dinner',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxiIAXE3ftLqiOWUPBSSGhIUujoc4EozZWIHZLqhnlP6c1sa99pjMYYuUq3v3lpbjmVu1ArMjR-GkxQ8bt9AP7Ekcw_nuJmgU8v4j42OReMODeSAQB88Th0TeUKAKjU7bnSR3dTjrDvyE1SIMzc3rfwYIeZFSm_76rEkc7slDts_ao8pQ0L9AUHmXpDTZlOHi5ltxRx8G_qOv1Wrl-Mt1ot10H9PiKpQb20uwpJMNG2gdEG_zfJ5nvNP-cv0hcCsXEr1R2D3fyDzTa',
        tags: ['Signature', 'Crispy'],
        isChefSpecial: true
    },
    {
        id: 'grilled-medallions',
        name: 'Grilled Herb Medallions',
        price: 28.00,
        description: 'Succulent golden-brown chicken medallions resting in a pool of velvety, creamy herb sauce with fresh garden broccoli and steamed asparagus.',
        category: 'lunch',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuBlNBb_8p4rsqqdG9xpsC3LpDiRwByH4C4JGyQzdGQ5wsK_2FMahWTc6ZQfuujBQO6nZRKzTycNM0CuMNhGR4uIyZfqVCOZH2nD2Xkca4W6ngLNm7v870vDkNpp7lN7ss9wneT791AEB28Un3fm-uYGLt7e4YbvxTlX7CsY5ftfvVnKs-_gM_Q1gZR5GBi9rDjNyDam06fvWzTS9BF6XQmN1UeJhQWOOCdL9vRj7cYd-HOeQ_KOaM8hieL2W3S-AOiPnsKCUX18vs',
        tags: ['Healthy', 'Juicy']
    },
    {
        id: 'flamin-latte',
        name: "Flamin' Latte Art",
        price: 12.00,
        description: 'Our specialty flamed latte, roasted to order. Baristas ignite cinnamon and citrus elements table-side for a rich caramelized aroma.',
        category: 'coffee',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof',
        tags: ['Interactive', 'Showstopper'],
        isChefSpecial: true
    },
    {
        id: 'chocolate-gateau',
        name: 'Artisan Chocolate Gateau',
        price: 14.00,
        description: 'Decadent chocolate dessert styled with gold details, fresh handpicked woodland berries, and a dust of cocoa.',
        category: 'breakfast',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4tzBB8Mt45g2dAnD4tl1Bi3sLCx0iZX1qM-QKaUboG2C3JG6pPZT1ulU_TbCWD8mwZWE2hf9uyGcIvWad9nRyl3vFamklRcpHj7ZDU_-4TZTh6ARiaGemqS81Qjm7kWHzTxQIc9nZe68-DT7Fkaz2fvpS9impOTx12M91DRjMWlp4eu7AFbEXjQmhuFStbhcgI6FU-gMybe9i68iCzXzv70EYs6Nd6IcnTna3drSimeUasAF7udtVz6hL72A2b5aYEN1E7SQnhZBU',
        tags: ['Sweet', 'Premium']
    },
    {
        id: 'roasted-salad',
        name: 'Vibrant Roasted Salad',
        price: 16.00,
        description: 'Oven-roasted root vegetables layered with local organic greens, toasted pine nuts, and our house artisan herb vinaigrette.',
        category: 'lunch',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlANoozqxArb9lDUtBdJZQstDUmEqn4y1xl0_BqPhSqSz7rluQb-ngS5KsLSUguITUuNNzzkLvGUV_ZRYbXIlISrHxfWwTHwKazFmBwEKIL6Bn_dtIPLWYAyM0luT4jzZowNkW72VwkDKiCvgyuIRjrdEys7Qprjw1DTqJSZ8ForFr8AQaeLvE5zfnPMh3IfLg_YH7nxrnsDPIW_b-k1pGPuPoJGUAg9kLtBnYIiuOkPiwNqxZOeNqa3PpgINCRCQIuSkwA1KDIfpd',
        tags: ['Vegan', 'Fresh']
    },
    {
        id: 'swan-latte',
        name: 'Classic Swan Latte',
        price: 6.50,
        description: 'Double-shot of locally sourced Nepali specialty coffee beans finished with velvety microfoam poured in elegant swan patterns.',
        category: 'coffee',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof',
        tags: ['Classic', 'Local Beans']
    }
];

interface MenuSectionProps {
    onAddToCart: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'breakfast' | 'lunch' | 'dinner' | 'coffee'>('all');
    const [addedItemIds, setAddedItemIds] = useState<string[]>([]);

    const categories: { label: string; id: 'all' | 'breakfast' | 'lunch' | 'dinner' | 'coffee' }[] = [
        { label: 'All Creations', id: 'all' },
        { label: 'Breakfast', id: 'breakfast' },
        { label: 'Lunch', id: 'lunch' },
        { label: 'Dinner', id: 'dinner' },
        { label: 'Specialty Coffee', id: 'coffee' }
    ];

    const filteredItems = selectedCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === selectedCategory);

    const handleAddClick = (item: MenuItem) => {
        onAddToCart(item);

        // Quick success flash state
        setAddedItemIds(prev => [...prev, item.id]);
        setTimeout(() => {
            setAddedItemIds(prev => prev.filter(id => id !== item.id));
        }, 1500);
    };

    return (
        <section id="menu" className="py-24 sm:py-32 bg-stone-50/50 text-stone-900 border-y border-stone-200/50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs block mb-3">
                        Handcrafted Gastronomy
                    </span>
                    <h2 className="text-stone-950 font-sans text-4xl sm:text-5xl font-extrabold tracking-tight" id="menu-title">
                        Chef’s Featured Selections
                    </h2>
                    <p className="text-stone-500 font-light mt-4">
                        Browse our signature dishes and high-altitude artisanal coffee. Add items to your table-order to preview your dining experience.
                    </p>
                </div>

                {/* Tab Controls */}
                <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-none" id="menu-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative focus:outline-none cursor-pointer whitespace-nowrap ${selectedCategory === cat.id
                                    ? 'text-white'
                                    : 'text-stone-600 bg-white border border-stone-200 hover:border-gold hover:text-gold shadow-sm'
                                }`}
                            id={`tab-${cat.id}`}
                        >
                            {selectedCategory === cat.id && (
                                <motion.span
                                    layoutId="activeTabBg"
                                    className="absolute inset-0 bg-stone-950 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-1.5">
                                {cat.id === 'coffee' && <CoffeeIcon className="h-3.5 w-3.5" />}
                                {cat.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Dynamic Cards Grid with Animation */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    id="menu-grid"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={item.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
                                id={`menu-card-${item.id}`}
                            >
                                {/* Image Wrap */}
                                <div className="relative h-64 overflow-hidden bg-stone-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                    />

                                    {/* Subtle overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                                    {/* Specialty Badges */}
                                    {item.isChefSpecial && (
                                        <span className="absolute top-4 right-4 bg-gold text-black text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                            <Sparkles className="h-3 w-3 fill-black text-black" />
                                            Chef Recommended
                                        </span>
                                    )}
                                </div>

                                {/* Card Body */}
                                <div className="p-8 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex justify-between items-start gap-4 mb-3">
                                            <h3 className="text-xl font-bold font-sans text-stone-950 tracking-tight group-hover:text-gold transition-colors">
                                                {item.name}
                                            </h3>
                                            <span className="text-gold font-mono font-bold text-lg whitespace-nowrap bg-stone-50 border border-stone-100 px-2.5 py-0.5 rounded-lg">
                                                ${item.price.toFixed(2)}
                                            </span>
                                        </div>

                                        {/* Tags */}
                                        {item.tags && item.tags.length > 0 && (
                                            <div className="flex gap-1.5 mb-4 flex-wrap">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-stone-400 bg-stone-100 px-2 py-0.5 rounded-md">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <p className="text-stone-500 font-sans text-sm font-light leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Add to Order CTA */}
                                    <button
                                        onClick={() => handleAddClick(item)}
                                        className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${addedItemIds.includes(item.id)
                                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                                                : 'bg-stone-950 text-white hover:bg-gold hover:text-black hover:shadow-lg hover:shadow-gold/25'
                                            }`}
                                        id={`add-to-cart-${item.id}`}
                                    >
                                        {addedItemIds.includes(item.id) ? (
                                            <>
                                                <Check className="h-4 w-4" /> Added to Order
                                            </>
                                        ) : (
                                            <>
                                                <Plus className="h-4 w-4" /> Add to Order
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
