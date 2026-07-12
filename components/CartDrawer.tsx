import { ShoppingBag, X, Plus, Minus, Trash2, Utensils, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

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

export interface CartItem {
    menuItem: MenuItem;
    quantity: number;
}

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onUpdateQuantity: (itemId: string, delta: number) => void;
    onRemoveItem: (itemId: string) => void;
    onClearCart: () => void;
}

export default function CartDrawer({
    isOpen,
    onClose,
    cartItems,
    onUpdateQuantity,
    onRemoveItem,
    onClearCart,
}: CartDrawerProps) {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
    const serviceCharge = subtotal * 0.10; // 10% standard service charge
    const vat = (subtotal + serviceCharge) * 0.13; // 13% standard VAT in Nepal
    const total = subtotal + serviceCharge + vat;

    const handleCheckout = () => {
        setIsCheckingOut(true);
        setTimeout(() => {
            setIsCheckingOut(false);
            setIsSuccess(true);
        }, 1500);
    };

    const handleSuccessClose = () => {
        setIsSuccess(false);
        onClearCart();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Dark Transparent Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
                        id="cart-overlay"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
                        className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-[#1c1b1b] text-white z-50 shadow-2xl flex flex-col justify-between"
                        id="cart-drawer-panel"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-stone-900/40">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="h-5 w-5 text-gold animate-pulse" />
                                <h2 className="text-lg font-bold uppercase tracking-wider font-sans text-white">
                                    Your Table Order
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1.5 hover:bg-stone-800 rounded-full text-stone-400 hover:text-white transition-colors cursor-pointer"
                                id="close-cart-btn"
                                aria-label="Close cart"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {isSuccess ? (
                                /* Success Checkout View */
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                                    id="checkout-success-view"
                                >
                                    <CheckCircle className="h-16 w-16 text-emerald-500 animate-bounce" />
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold font-sans text-white">Order Placed!</h3>
                                        <p className="text-stone-400 font-light text-sm max-w-xs mx-auto">
                                            Your table order has been successfully transmitted to chef Suraj Thapa's kitchen!
                                        </p>
                                    </div>
                                    <div className="p-4 bg-stone-800/60 rounded-xl border border-white/5 w-full text-left space-y-2.5">
                                        <div className="flex justify-between text-xs text-stone-400">
                                            <span>Booking Type:</span>
                                            <span className="font-semibold text-white">Table-Side Order</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-stone-400">
                                            <span>Estimated Time:</span>
                                            <span className="font-semibold text-white">15 - 20 Mins</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-stone-400 pt-1 border-t border-white/5">
                                            <span className="font-semibold text-gold">Total Amount Charged:</span>
                                            <span className="font-bold text-gold">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleSuccessClose}
                                        className="px-8 py-3 bg-gold text-black hover:bg-white rounded-lg font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-gold/10"
                                        id="success-close-btn"
                                    >
                                        Close & Start New
                                    </button>
                                </motion.div>
                            ) : cartItems.length === 0 ? (
                                /* Empty Cart state */
                                <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 space-y-4 py-20">
                                    <Utensils className="h-12 w-12 text-stone-700 stroke-1" />
                                    <div>
                                        <p className="font-medium text-stone-300">Your order is empty</p>
                                        <p className="text-xs text-stone-500 max-w-[200px] mt-1">
                                            Browse our menu and click 'Add to Order' to begin.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                /* List of items */
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <motion.div
                                            key={item.menuItem.id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex gap-4 p-3 bg-stone-900/40 border border-white/5 rounded-xl hover:border-gold/20 transition-all group"
                                            id={`cart-item-${item.menuItem.id}`}
                                        >
                                            {/* Item Image */}
                                            <img
                                                src={item.menuItem.image}
                                                alt={item.menuItem.name}
                                                className="w-16 h-16 object-cover rounded-lg bg-stone-800"
                                                referrerPolicy="no-referrer"
                                            />

                                            {/* Details */}
                                            <div className="flex-grow flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start gap-1">
                                                        <h4 className="font-bold text-sm text-stone-200 line-clamp-1 group-hover:text-gold transition-colors">
                                                            {item.menuItem.name}
                                                        </h4>
                                                        <span className="text-xs font-mono font-bold text-gold shrink-0">
                                                            ${(item.menuItem.price * item.quantity).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] text-stone-500 font-sans block mt-0.5">
                                                        Unit Price: ${item.menuItem.price.toFixed(2)}
                                                    </span>
                                                </div>

                                                {/* Adjusters */}
                                                <div className="flex justify-between items-center mt-2">
                                                    <div className="flex items-center gap-2 bg-stone-800 border border-white/5 rounded-lg px-2 py-1">
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                                                            className="p-0.5 hover:text-gold rounded transition-colors cursor-pointer"
                                                            id={`decrease-qty-${item.menuItem.id}`}
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="h-3.5 w-3.5" />
                                                        </button>
                                                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                                                            className="p-0.5 hover:text-gold rounded transition-colors cursor-pointer"
                                                            id={`increase-qty-${item.menuItem.id}`}
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus className="h-3.5 w-3.5" />
                                                        </button>
                                                    </div>

                                                    {/* Delete */}
                                                    <button
                                                        onClick={() => onRemoveItem(item.menuItem.id)}
                                                        className="p-1 text-stone-500 hover:text-red-400 transition-colors cursor-pointer"
                                                        id={`remove-item-${item.menuItem.id}`}
                                                        aria-label="Remove item"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Calculations & Checkout Button */}
                        {!isSuccess && cartItems.length > 0 && (
                            <div className="p-6 bg-stone-900 border-t border-white/5 space-y-4">
                                <div className="space-y-2 text-sm text-stone-400">
                                    <div className="flex justify-between">
                                        <span>Subtotal:</span>
                                        <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="flex items-center gap-1">Service Charge (10%):</span>
                                        <span className="font-semibold text-white">${serviceCharge.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="flex items-center gap-1">Govt. VAT (13%):</span>
                                        <span className="font-semibold text-white">${vat.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-base font-bold text-white pt-2.5 border-t border-white/5">
                                        <span className="text-gold">Total Amount:</span>
                                        <span className="text-gold font-mono">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    disabled={isCheckingOut}
                                    className="w-full py-4 bg-gold hover:bg-white text-black font-bold rounded-xl text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-gold/5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                    id="checkout-btn"
                                >
                                    {isCheckingOut ? (
                                        <div className="flex items-center gap-2">
                                            <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
                                            Transmitting Order...
                                        </div>
                                    ) : (
                                        <>Confirm & Order Table</>
                                    )}
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
