"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSecton';
import CoffeeSection from '@/components/CoffeeSection';
import EventsSection from '@/components/EventsSection';
import GallerySection from '@/components/GallerySection';
import TeamSection from '@/components/TeamSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartItem, MenuItem } from './types';
import { ShoppingBag, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Page() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Monitor scroll for Scroll-to-Top visibility
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Sync cart with local storage (optional backup)
  useEffect(() => {
    const cached = localStorage.getItem('transit_table_order');
    if (cached) {
      try {
        setCartItems(JSON.parse(cached));
      } catch (e) {
        console.error('Failed to restore order cache:', e);
      }
    }
  }, []);

  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem('transit_table_order', JSON.stringify(items));
  };

  // Add item to table order
  const handleAddToCart = (item: MenuItem) => {
    const existing = cartItems.find((i) => i.menuItem.id === item.id);
    let updated: CartItem[];
    if (existing) {
      updated = cartItems.map((i) =>
        i.menuItem.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updated = [...cartItems, { menuItem: item, quantity: 1 }];
    }
    saveCart(updated);
    triggerToast(`"${item.name}" added to your table order!`);
  };

  // Toast notification system
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    // Auto clear
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  // Update item quantities
  const handleUpdateQuantity = (itemId: string, delta: number) => {
    const updated = cartItems
      .map((item) => {
        if (item.menuItem.id === itemId) {
          const nextQty = item.quantity + delta;
          return { ...item, quantity: nextQty };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    saveCart(updated);
  };

  // Remove completely
  const handleRemoveItem = (itemId: string) => {
    const updated = cartItems.filter((i) => i.menuItem.id !== itemId);
    saveCart(updated);
  };

  // Clear entirely
  const handleClearCart = () => {
    saveCart([]);
  };

  // Custom visual offset scroll
  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const navbarOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fdf8f8] text-stone-900 selection:bg-gold selection:text-black antialiased font-sans">

      {/* Header Sticky Navigation */}
      <Navbar
        cartCount={totalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Sections */}
      <main className="relative">
        <Hero onNavigate={handleNavigate} />
        <About />
        <MenuSection onAddToCart={handleAddToCart} />
        <CoffeeSection onViewCoffee={() => handleNavigate('menu')} />
        <EventsSection onBookEvent={() => handleNavigate('reservation')} />
        <GallerySection />
        <TeamSection />
        <ReservationSection />
        <ContactSection />
      </main>

      {/* Footer Branding & Socials */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Slid-out Drawer for Table Order */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Global Bottom-Right Toast Notifications */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 bg-stone-950 text-white border border-gold/20 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3.5 max-w-sm"
            id="toast-notification"
          >
            <div className="p-2 bg-gold text-black rounded-lg">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-gold uppercase tracking-widest">Table Order Update</p>
              <p className="text-sm font-sans text-stone-200">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll-to-Top Fab */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 p-3 bg-stone-950 hover:bg-gold text-white hover:text-black border border-white/10 hover:border-gold rounded-full transition-all shadow-xl cursor-pointer"
            id="scroll-to-top-btn"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
