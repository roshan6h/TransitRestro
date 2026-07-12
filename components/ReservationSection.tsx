"use client";

import { useState, FormEvent } from 'react';
import { Calendar, Phone, Users, CheckCircle, ArrowRight, Printer, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface Reservation {
    id: string;
    name: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    seatingPreference: 'indoor' | 'garden' | 'vip';
    notes?: string;
    status?: 'pending' | 'confirmed' | 'cancelled';
}

export default function ReservationSection() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('18:00');
    const [guests, setGuests] = useState('2');
    const [seatingPreference, setSeatingPreference] = useState<'indoor' | 'garden' | 'vip'>('indoor');
    const [notes, setNotes] = useState('');

    const [bookingResult, setBookingResult] = useState<Reservation | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!name || !phone || !date) {
            alert('Please fill in Name, Phone, and Date.');
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            // Create a booking record
            const refCode = `TR-${Math.floor(1000 + Math.random() * 9000)}-${phone.slice(-4)}`;
            const reservation: Reservation = {
                id: refCode,
                name,
                phone,
                date,
                time,
                guests: parseInt(guests),
                seatingPreference,
                notes,
                status: 'confirmed',
            };

            // Persist in LocalStorage
            const existing = localStorage.getItem('transit_reservations');
            const list = existing ? JSON.parse(existing) : [];
            list.push(reservation);
            localStorage.setItem('transit_reservations', JSON.stringify(list));

            setBookingResult(reservation);
            setIsSubmitting(false);
        }, 1500);
    };

    const handleReset = () => {
        setName('');
        setPhone('');
        setDate('');
        setTime('18:00');
        setGuests('2');
        setSeatingPreference('indoor');
        setNotes('');
        setBookingResult(null);
    };

    return (
        <section id="reservation" className="py-24 sm:py-32 bg-stone-50/50 text-stone-900 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white p-8 sm:p-16 rounded-[2.5rem] shadow-2xl border border-stone-200/60 relative">

                    {/* Subtle gold badge */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-950 text-gold px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-gold/30 flex items-center gap-1.5 shadow-xl">
                        <Sparkles className="h-4 w-4 text-gold fill-gold" />
                        Fine Dining & Gatherings
                    </div>

                    <AnimatePresence mode="wait">
                        {!bookingResult ? (
                            /* Main Reservation Form */
                            <motion.div
                                key="booking-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="text-center mb-12 space-y-2 mt-4">
                                    <h2 className="text-stone-950 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                                        Book Your Table
                                    </h2>
                                    <p className="text-stone-500 font-light max-w-md mx-auto">
                                        Join us for an unforgettable culinary journey. Submit your details below to secure table reservation.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8" id="reservation-form">

                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1 block">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name"
                                            className="w-full border-b-2 border-stone-200 focus:border-gold focus:outline-none py-3 px-2 bg-transparent text-stone-900 transition-colors"
                                            id="booking-name"
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1 block">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+977 98XXXXXXX"
                                                className="w-full border-b-2 border-stone-200 focus:border-gold focus:outline-none py-3 pl-8 pr-2 bg-transparent text-stone-900 transition-colors"
                                                id="booking-phone"
                                            />
                                            <Phone className="absolute left-1.5 bottom-3.5 h-4 w-4 text-stone-400" />
                                        </div>
                                    </div>

                                    {/* Preferred Date */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1 block">
                                            Preferred Date
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                required
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                className="w-full border-b-2 border-stone-200 focus:border-gold focus:outline-none py-3 pl-8 pr-2 bg-transparent text-stone-900 transition-colors"
                                                id="booking-date"
                                            />
                                            <Calendar className="absolute left-1.5 bottom-3.5 h-4 w-4 text-stone-400" />
                                        </div>
                                    </div>

                                    {/* Number of guests */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1 block">
                                            Number of Guests
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={guests}
                                                onChange={(e) => setGuests(e.target.value)}
                                                className="w-full border-b-2 border-stone-200 focus:border-gold focus:outline-none py-3 pl-8 pr-2 bg-transparent text-stone-900 transition-colors appearance-none cursor-pointer"
                                                id="booking-guests"
                                            >
                                                <option value="1">1 Guest</option>
                                                <option value="2">2 Guests</option>
                                                <option value="4">4 Guests</option>
                                                <option value="6">6 Guests</option>
                                                <option value="8">8+ Guests</option>
                                            </select>
                                            <Users className="absolute left-1.5 bottom-3.5 h-4 w-4 text-stone-400" />
                                        </div>
                                    </div>

                                    {/* Seating Preference */}
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1 block">
                                            Seating Preference Area
                                        </label>
                                        <div className="grid grid-cols-3 gap-4" id="booking-seating-preferences">
                                            {(['indoor', 'garden', 'vip'] as const).map((pref) => (
                                                <button
                                                    key={pref}
                                                    type="button"
                                                    onClick={() => setSeatingPreference(pref)}
                                                    className={`py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border cursor-pointer ${seatingPreference === pref
                                                            ? 'bg-stone-950 text-gold border-stone-950 shadow-md'
                                                            : 'bg-white text-stone-600 border-stone-200 hover:border-gold hover:text-gold'
                                                        }`}
                                                    id={`seating-pref-${pref}`}
                                                >
                                                    {pref === 'vip' ? 'VIP Lounge' : pref === 'garden' ? 'Garden Area' : 'Indoor Dining'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Special Notes / Birthday requests */}
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1 block">
                                            Special requests / Celebrations
                                        </label>
                                        <textarea
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            placeholder="e.g. Birthday celebration details, dietary allergies, high-chair requested..."
                                            rows={3}
                                            className="w-full border border-stone-200 focus:border-gold focus:outline-none rounded-xl py-3 px-4 bg-transparent text-stone-900 transition-colors"
                                            id="booking-notes"
                                        />
                                    </div>

                                    {/* Submit CTA */}
                                    <div className="md:col-span-2 pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-stone-950 text-white hover:bg-gold hover:text-black py-4.5 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all shadow-xl shadow-stone-950/5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                            id="booking-submit-btn"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                                                    Securing table...
                                                </>
                                            ) : (
                                                <>
                                                    Confirm Reservation <ArrowRight className="h-4 w-4" />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                </form>
                            </motion.div>
                        ) : (
                            /* Success Reservation Receipt View */
                            <motion.div
                                key="booking-receipt"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-8"
                                id="booking-success-receipt"
                            >
                                <div className="text-center space-y-2">
                                    <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-full text-emerald-500 mb-2">
                                        <CheckCircle className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-stone-950">
                                        Reservation Confirmed!
                                    </h3>
                                    <p className="text-stone-500 font-light text-sm max-w-sm mx-auto">
                                        Your table at Transit Restaurant has been secured. A copy of your reservation card is shown below.
                                    </p>
                                </div>

                                {/* Printable Booking Card */}
                                <div className="p-6 sm:p-10 bg-stone-950 text-white rounded-3xl border border-gold/20 shadow-2xl relative overflow-hidden space-y-6 max-w-md mx-auto">
                                    {/* Watermark Logo lines */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

                                    {/* Header Logo */}
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <div>
                                            <span className="font-extrabold text-sm tracking-wider text-white">TRANSIT</span>
                                            <span className="text-[9px] uppercase tracking-[0.2em] font-light text-gold block">
                                                ESTD. 2017
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg">
                                            REF: {bookingResult.id}
                                        </span>
                                    </div>

                                    {/* Booking Details Grid */}
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                                                GUEST NAME
                                            </span>
                                            <span className="font-semibold text-stone-200 mt-1 block">
                                                {bookingResult.name}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                                                PHONE NUMBER
                                            </span>
                                            <span className="font-mono text-stone-200 mt-1 block">
                                                {bookingResult.phone}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                                                DATE & TIME
                                            </span>
                                            <span className="font-semibold text-stone-200 mt-1 block">
                                                {bookingResult.date} at {bookingResult.time}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                                                GUESTS & SEATING
                                            </span>
                                            <span className="font-semibold text-stone-200 mt-1 block capitalize">
                                                {bookingResult.guests} Guests • {bookingResult.seatingPreference}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Notes if any */}
                                    {bookingResult.notes && (
                                        <div className="pt-3 border-t border-white/5 text-xs text-stone-400 font-light">
                                            <span className="font-semibold text-stone-300 block mb-1">
                                                SPECIAL REQUESTS:
                                            </span>
                                            "{bookingResult.notes}"
                                        </div>
                                    )}

                                    {/* Simulated Ticket Bottom with Address Location */}
                                    <div className="flex justify-between items-center pt-4 border-t border-white/10 text-[10px] text-stone-400">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3 text-gold" /> Kathmandu, Nepal
                                        </span>
                                        <span className="text-gold font-semibold uppercase tracking-wider">
                                            Bring this receipt or phone number
                                        </span>
                                    </div>
                                </div>

                                {/* Print/Dismiss Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                                    <button
                                        onClick={() => window.print()}
                                        className="flex-1 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                                        id="print-receipt-btn"
                                    >
                                        <Printer className="h-4 w-4" /> Print Receipt
                                    </button>
                                    <button
                                        onClick={handleReset}
                                        className="flex-1 py-3.5 bg-gold text-black hover:bg-black hover:text-gold border border-gold rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                                        id="dismiss-receipt-btn"
                                    >
                                        Done
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}
