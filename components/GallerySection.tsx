"use client";

import { useState, MouseEvent } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface GalleryItem {
    id: string;
    image: string;
    title: string;
    category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: 'dessert-1',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4tzBB8Mt45g2dAnD4tl1Bi3sLCx0iZX1qM-QKaUboG2C3JG6pPZT1ulU_TbCWD8mwZWE2hf9uyGcIvWad9nRyl3vFamklRcpHj7ZDU_-4TZTh6ARiaGemqS81Qjm7kWHzTxQIc9nZe68-DT7Fkaz2fvpS9impOTx12M91DRjMWlp4eu7AFbEXjQmhuFStbhcgI6FU-gMybe9i68iCzXzv70EYs6Nd6IcnTna3drSimeUasAF7udtVz6hL72A2b5aYEN1E7SQnhZBU',
        title: 'Gourmet Gateau with Berries',
        category: 'Dessert'
    },
    {
        id: 'coffee-swan',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof',
        title: 'Swan Microfoam Artistry',
        category: 'Specialty Coffee'
    },
    {
        id: 'salad-vibrant',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlANoozqxArb9lDUtBdJZQstDUmEqn4y1xl0_BqPhSqSz7rluQb-ngS5KsLSUguITUuNNzzkLvGUV_ZRYbXIlISrHxfWwTHwKazFmBwEKIL6Bn_dtIPLWYAyM0luT4jzZowNkW72VwkDKiCvgyuIRjrdEys7Qprjw1DTqJSZ8ForFr8AQaeLvE5zfnPMh3IfLg_YH7nxrnsDPIW_b-k1pGPuPoJGUAg9kLtBnYIiuOkPiwNqxZOeNqa3PpgINCRCQIuSkwA1KDIfpd',
        title: 'Artisan Garden Medley',
        category: 'Lunch'
    },
    {
        id: 'interior-space',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNh3b0GUp5bt3nqXyj-wERC7TX7RN8WB6yOsXr7Lo8dMt7oINFP0r-womQx04I9DxmzMi5qJ5m8HYhfeTK4JjLa1ITsgq_ZiA-QZFCMywez4ryzWMOS83CWW4ybWvkY2pDEdRwYdQnwgjktCRHvr5d3myRpP2DvSFI18daFgz19rvJm_FWTK8v9635T1_j9I8VoPSKfr3UPJInI-9l-ZAWw2Z2_8B6D_KBZsXAVG_2thwON1WUnWv0cUlgOyTMUD1jMTGnjHoqQri_',
        title: 'Elegant Dining Lounge',
        category: 'Interior'
    },
    {
        id: 'barista-lit',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof',
        title: 'Barista Theatrical Pour',
        category: 'Experience'
    },
    {
        id: 'chef-plating-action',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNMBpCobdLUPcru0XzFcgIADAYePGM1ZYyNFuxy6w1nV5xMVb0Q94pCPNpUEFxcrqqsPd0jViHo-vZ19WGa6gjcw45owfqK1chW2X3SELLWHGFM_BAAYkuXM5ptsKaqbuzOg8KZgpP9gx1-FjyyKfGRqrq1g0Zzg9xUxgbc34Ll62QAcTlLj6knLP2SL-Sj4p1_s8AgcnyDU2YZlEm0Il4bE4yE0LMVt0Fu5x89YnIoM-HTRcc-LbDjPyyXIWFkP0zmCuL6W1NdR8L',
        title: 'Precision Herb Plating',
        category: 'Kitchen'
    },
    {
        id: 'birthday-balloon-group',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIu8M9qB_7xgjXMsqD9KuyrTvc6t8ZLyHa5gt0R5_zXiF6SimPisA2g6W9mwxbHP466PnvjR9vC9IHXTbvhmmNxNyu-u38kmdLgQepixct3AWSfuBOTIXw0THvu0R2fbK8tU-8DN3cAYOlNcMf0l8Hq3ANu6xy3fQIrJ2i_KmP7yD1Jg1VBnEvkT0BZI62WZdy7GqCuxh49D_-8AMG86AJALcGxOWA5erS7hfGkKEbr0pUoL7PPTBlHCaGg52_oBkqtT1CHKb9ip2V',
        title: 'Curated Birthday Gatherings',
        category: 'Celebrations'
    }
];

export default function GallerySection() {
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

    const handleOpenLightbox = (index: number) => {
        setActiveImageIndex(index);
    };

    const handleCloseLightbox = () => {
        setActiveImageIndex(null);
    };

    const handlePrev = (e: MouseEvent) => {
        e.stopPropagation();
        if (activeImageIndex !== null) {
            setActiveImageIndex(prev => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev ?? 0) - 1));
        }
    };

    const handleNext = (e: MouseEvent) => {
        e.stopPropagation();
        if (activeImageIndex !== null) {
            setActiveImageIndex(prev => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev ?? 0) + 1));
        }
    };

    return (
        <section id="gallery" className="py-24 sm:py-32 bg-[#fdf8f8] text-stone-900 overflow-hidden border-b border-stone-200/50">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <span className="text-gold font-sans font-bold tracking-[0.2em] uppercase text-xs block mb-3">
                    Visual Symphony
                </span>
                <h2 className="text-stone-950 font-sans text-4xl sm:text-5xl font-extrabold tracking-tight" id="gallery-title">
                    Gallery of Flavors
                </h2>
                <p className="text-stone-500 font-light mt-4 max-w-xl mx-auto">
                    Explore the visual craftsmanship behind our kitchen creations and cozy gathering settings. Click on any image to expand.
                </p>
            </div>

            {/* Masonry/Pinterest-style Columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 px-6 max-w-7xl mx-auto space-y-6" id="gallery-columns">
                {GALLERY_ITEMS.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                        onClick={() => handleOpenLightbox(index)}
                        className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-stone-200/60 bg-white relative group cursor-pointer"
                        id={`gallery-item-${item.id}`}
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                        />

                        {/* Hover visual overlay */}
                        <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" id={`gallery-overlay-${item.id}`}>
                            <div className="flex justify-end">
                                <span className="p-2 bg-white/15 backdrop-blur-md rounded-full border border-white/10 text-gold">
                                    <Eye className="h-4 w-4" />
                                </span>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-gold">
                                    {item.category}
                                </span>
                                <h3 className="text-base font-bold font-sans">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Interactive Lightbox Modal */}
            <AnimatePresence>
                {activeImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseLightbox}
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-center items-center p-4 sm:p-10"
                        id="gallery-lightbox-modal"
                    >
                        {/* Close button */}
                        <button
                            onClick={handleCloseLightbox}
                            className="absolute top-6 right-6 p-2 bg-stone-900/60 hover:bg-stone-800 rounded-full border border-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                            id="close-lightbox-btn"
                            aria-label="Close Lightbox"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Lightbox Content Container */}
                        <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">

                            {/* Prev Slide button */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 sm:-left-12 p-3 bg-stone-900/60 hover:bg-stone-800 rounded-full border border-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                                id="prev-slide-btn"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            {/* Main Image */}
                            <motion.img
                                key={activeImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                src={GALLERY_ITEMS[activeImageIndex].image}
                                alt={GALLERY_ITEMS[activeImageIndex].title}
                                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/5"
                                onClick={(e) => e.stopPropagation()}
                                referrerPolicy="no-referrer"
                            />

                            {/* Next Slide button */}
                            <button
                                onClick={handleNext}
                                className="absolute right-2 sm:-right-12 p-3 bg-stone-900/60 hover:bg-stone-800 rounded-full border border-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                                id="next-slide-btn"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                        </div>

                        {/* Photo labels details bottom */}
                        <motion.div
                            key={`details-${activeImageIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-white mt-6 space-y-1.5"
                            id="lightbox-labels"
                        >
                            <span className="text-xs uppercase font-extrabold tracking-widest text-gold">
                                {GALLERY_ITEMS[activeImageIndex].category}
                            </span>
                            <h4 className="text-lg font-bold font-sans">
                                {GALLERY_ITEMS[activeImageIndex].title}
                            </h4>
                            <p className="text-stone-400 text-xs">
                                Image {activeImageIndex + 1} of {GALLERY_ITEMS.length}
                            </p>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
