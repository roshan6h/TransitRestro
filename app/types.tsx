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

export interface Reservation {
    id: string;
    name: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    seatingPreference: 'indoor' | 'garden' | 'vip';
    notes?: string;
    status: 'pending' | 'confirmed';
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    rating: number;
    text: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    description: string;
}

export interface GalleryItem {
    id: string;
    image: string;
    title: string;
    category: string;
}