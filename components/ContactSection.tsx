import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault();
        if (!email || !message) return;

        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);
            setEmail('');
            setMessage('');
            setTimeout(() => setIsSent(false), 3000);
        }, 1200);
    };

    return (
        <section id="contact" className="py-24 sm:py-32 bg-[#fdf8f8] text-stone-900 border-b border-stone-200/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Column 1: Schedule & Contact (lg:col-span-4) */}
                    <div className="lg:col-span-4 space-y-10">
                        {/* Opening Hours */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-gold" />
                                <h3 className="text-xl font-bold font-sans text-stone-950 uppercase tracking-wider">
                                    Opening Hours
                                </h3>
                            </div>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-stone-200 pb-2.5">
                                    <span className="text-stone-500 font-light">Monday - Thursday</span>
                                    <span className="font-bold text-stone-950">08:00 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-stone-200 pb-2.5">
                                    <span className="text-stone-500 font-light">Friday - Saturday</span>
                                    <span className="font-bold text-stone-950">08:00 AM - 11:30 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-stone-200 pb-2.5 text-gold">
                                    <span className="font-semibold">Sunday</span>
                                    <span className="font-bold">09:00 AM - 10:00 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Direct Contact details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold font-sans text-stone-950 uppercase tracking-wider">
                                Get In Touch
                            </h3>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 bg-stone-100 rounded-xl text-gold">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                                            EMAIL ADDRESS
                                        </p>
                                        <a
                                            href="mailto:transitrestaurantdml@gmail.com"
                                            className="font-bold text-sm text-stone-900 hover:text-gold transition-colors break-all"
                                        >
                                            transitrestaurantdml@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 bg-stone-100 rounded-xl text-gold">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                                            TELEPHONE PHONE
                                        </p>
                                        <a
                                            href="tel:9824127581"
                                            className="font-bold text-sm text-stone-900 hover:text-gold transition-colors"
                                        >
                                            +977 9824127581
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 bg-stone-100 rounded-xl text-gold">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                                            LOCATION
                                        </p>
                                        <p className="font-bold text-sm text-stone-900">
                                            Kathmandu, Nepal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Live Feedback Form (lg:col-span-4) */}
                    <div className="lg:col-span-4 bg-white p-8 rounded-[2rem] border border-stone-200/60 shadow-lg space-y-6">
                        <div>
                            <h3 className="text-xl font-bold font-sans text-stone-950">
                                Send Us a Message
                            </h3>
                            <p className="text-xs text-stone-500 mt-1 font-light">
                                Questions or feedback? We’d love to hear from you.
                            </p>
                        </div>

                        <form onSubmit={handleSendMessage} className="space-y-4" id="feedback-form">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full border border-stone-200 focus:border-gold focus:outline-none rounded-xl py-2.5 px-3 text-sm bg-transparent"
                                    id="feedback-email"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block ml-1">
                                    Message / Inquiry
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Ask about private hire, barista academy registration, or table availability..."
                                    className="w-full border border-stone-200 focus:border-gold focus:outline-none rounded-xl py-2.5 px-3 text-sm bg-transparent"
                                    id="feedback-message"
                                />
                            </div>

                            {/* Toast banner inside card */}
                            <AnimatePresence>
                                {isSent && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="p-3.5 bg-emerald-50 text-emerald-800 rounded-xl flex items-center gap-2.5 text-xs font-semibold"
                                        id="feedback-toast"
                                    >
                                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                                        Message sent! Priya Rai will respond shortly.
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full py-3 bg-stone-950 text-white hover:bg-gold hover:text-black font-bold rounded-xl text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                id="feedback-submit-btn"
                            >
                                {isSending ? (
                                    <>Transmitting...</>
                                ) : (
                                    <>
                                        Send Message <Send className="h-3.5 w-3.5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Column 3: Minimalist Gold City Map (lg:col-span-4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <h3 className="text-xl font-bold font-sans text-stone-950 uppercase tracking-wider flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-gold" /> Find Our Transit
                        </h3>
                        <div className="h-72 lg:h-80 rounded-2xl overflow-hidden shadow-inner border border-stone-200/60 grayscale hover:grayscale-0 transition-all duration-700 relative group">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR4qb96_Qh6vt-NfMm0Ad0NZEdOxKAQFca4HrLy-DwzPKsl-nsPn5_W2No3jqcClBS3_axSEK--TqiVEmwpqbW3HtJcgk-J-hLZQBxaf0xnzcI_OnB11wFtiGBvXOstdGetO_ZJ_8iHA_eKovJoXzs53YGtFiZfXFN1LTAvG8Bsv1Tdy9Ic5__5G9q468rQEWPKw-ZokaVLYzkWE5v-kkV7vPWTNKv0TZcOcatwxoWUDL-F-hJOv0IGz0Vp6NKyGLAu8rx76Yc_N9O"
                                alt="Transit Restaurant location map Kathmandu"
                                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-all pointer-events-none" />
                            <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/85 backdrop-blur-md text-white rounded-xl border border-white/10 text-center">
                                <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-gold block mb-0.5">
                                    Transit Restaurant Lounge
                                </span>
                                <p className="text-[11px] text-stone-300 font-light">
                                    Swoyambhu, Kathmandu, Nepal
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
