/**
 * ==============================================================================
 * AMMA'S RASOI - HOMEMADE FOOD & BIRYANI WEBSITE
 * ==============================================================================
 * Welcome to the website code! This file is carefully organized so that anyone,
 * even complete beginners, can easily customize the business name, city, phone
 * number, WhatsApp number, opening hours, menu dishes, prices, and images.
 *
 * HOW TO CUSTOMIZE:
 * 1. Step 1: Edit the "BUSINESS CONFIGURATION" section right below.
 * 2. Step 2: Edit the "MENU ITEMS" list to add or change your dishes.
 * 3. Step 3: Edit the "CUSTOMER REVIEWS" to put real quotes from your customers.
 * 4. Step 4: That's it! Save the file and your website updates instantly.
 * ==============================================================================
 */

import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Truck,
  Leaf,
  Star,
  X,
  Plus,
  Minus,
  Menu as MenuIcon,
  ArrowRight,
  Heart,
  CheckCircle2,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ChevronDown
} from 'lucide-react';

// ==============================================================================
// 1. BUSINESS CONFIGURATION (EDIT YOUR DETAILS HERE)
// ==============================================================================
// Change these values to match your own food business!
export const BUSINESS_CONFIG = {
  // Business name shown in the navbar, hero, about us, and footer
  name: "Amma's Rasoi",

  // Short catchy tagline for the brand
  tagline: "Authentic Homemade Flavours Crafted with Love & Pure Desi Ghee",

  // City where your kitchen operates
  city: "Hyderabad",

  // Phone number formatted for display to customers
  phoneDisplay: "+91 98765 43210",

  // Phone number for direct phone dial link (digits and '+' only, e.g. +919876543210)
  phoneCallable: "+919876543210",

  // WhatsApp number with country code (no '+' or spaces, e.g. 919876543210 for India)
  // This is where customer orders and messages will be sent!
  whatsappNumber: "919876543210",

  // Physical kitchen or pickup address
  address: "Plot 42, Heritage Enclave, Jubilee Hills Road No. 10, Hyderabad, Telangana 500033",

  // Short delivery promise
  deliveryNote: "Free hot delivery within 5 km on orders above ₹499",

  // Opening hours displayed in the contact table
  openingHours: [
    { days: "Monday – Thursday", time: "10:30 AM – 10:00 PM", status: "Open" },
    { days: "Friday – Saturday", time: "10:00 AM – 11:00 PM", status: "Open" },
    { days: "Sunday (Special Biryani & Tiffins)", time: "08:30 AM – 11:00 PM", status: "Open" },
  ],

  // Social media profile links (replace '#' with your actual page URLs)
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
};

// ==============================================================================
// 2. IMAGE ASSETS
// ==============================================================================
// High-resolution photography generated specifically for this kitchen
import heroFoodSpread from './assets/images/hero_food_spread_1790578347726.jpg';
import biryaniImg from './assets/images/menu_hyderabadi_biryani_1790578363918.jpg';
import dosaImg from './assets/images/menu_masala_dosa_1790578379607.jpg';
import paneerImg from './assets/images/menu_paneer_butter_masala_1790578393452.jpg';
import gulabJamunImg from './assets/images/menu_gulab_jamun_1790578405364.jpg';
import samosaImg from './assets/images/menu_crispy_samosas_1790578420631.jpg';
import idliVadaImg from './assets/images/menu_steaming_idli_vada_1790578444106.jpg';
import mangoLassiImg from './assets/images/menu_mango_lassi_1790578455032.jpg';
import naanImg from './assets/images/menu_garlic_butter_naan_1790578470791.jpg';

// ==============================================================================
// 3. MENU ITEMS DATA (8 DISHES)
// ==============================================================================
// Edit names, descriptions, prices in ₹, categories, and images here.
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in Indian Rupees (₹)
  image: string;
  category: 'All' | 'Biryani & Mains' | 'Tiffins' | 'Snacks & Breads' | 'Desserts & Drinks';
  isPopular?: boolean;
  dietary: 'Veg' | 'Non-Veg';
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "item-1",
    name: "Royal Hyderabadi Dum Biryani",
    description: "Slow-cooked saffron basmati rice layered with aromatic tender spices, caramelized onions, and fresh mint in a sealed clay handi.",
    price: 299,
    image: biryaniImg,
    category: "Biryani & Mains",
    isPopular: true,
    dietary: "Non-Veg",
  },
  {
    id: "item-2",
    name: "Crispy Ghee Masala Dosa",
    description: "Golden rice crepe roasted in pure Desi Ghee, stuffed with spiced potato masala, paired with fresh coconut & tomato chutneys.",
    price: 119,
    image: dosaImg,
    category: "Tiffins",
    isPopular: true,
    dietary: "Veg",
  },
  {
    id: "item-3",
    name: "Shahi Paneer Butter Masala",
    description: "Velvety butter gravy with soft malai cottage cheese cubes, slow-simmered with cashews, fresh cream, and fenugreek leaves.",
    price: 249,
    image: paneerImg,
    category: "Biryani & Mains",
    dietary: "Veg",
  },
  {
    id: "item-4",
    name: "Desi Ghee Gulab Jamun (3 Pcs)",
    description: "Traditional soft khoya dumplings fried in pure cow ghee and soaked in warm cardamom and rose-water saffron syrup.",
    price: 99,
    image: gulabJamunImg,
    category: "Desserts & Drinks",
    isPopular: true,
    dietary: "Veg",
  },
  {
    id: "item-5",
    name: "Crispy Punjabi Samosas (2 Pcs)",
    description: "Flaky artisanal pastry pockets stuffed with spiced potatoes, green peas, and whole coriander seeds. Served with sweet dates chutney.",
    price: 69,
    image: samosaImg,
    category: "Snacks & Breads",
    dietary: "Veg",
  },
  {
    id: "item-6",
    name: "Steaming Idli & Medu Vada Combo",
    description: "Two pillow-soft steamed rice idlis and one crispy golden medu vada, served piping hot with fresh drumstick sambar & chutneys.",
    price: 129,
    image: idliVadaImg,
    category: "Tiffins",
    dietary: "Veg",
  },
  {
    id: "item-7",
    name: "Alphonso Mango Kesar Lassi",
    description: "Rich, chilled, thick yogurt churned with Ratnagiri Alphonso mango pulp, fragrant Kashmiri saffron, and crushed green pistachios.",
    price: 89,
    image: mangoLassiImg,
    category: "Desserts & Drinks",
    dietary: "Veg",
  },
  {
    id: "item-8",
    name: "Tandoori Garlic Butter Naan (2 Pcs)",
    description: "Leavened flatbread freshly baked in a clay oven, slathered with melted garlic butter and sprinkled with fresh green coriander.",
    price: 79,
    image: naanImg,
    category: "Snacks & Breads",
    dietary: "Veg",
  },
];

// ==============================================================================
// 4. WHY CHOOSE US PILLARS (3 CORE ICONS)
// ==============================================================================
export const WHY_CHOOSE_US = [
  {
    icon: Leaf,
    title: "Fresh & 100% Natural",
    subtitle: "Zero Preservatives",
    description: "We source hand-picked local produce, cold-pressed oils, and grind all spice blends fresh every morning in small homemade batches.",
  },
  {
    icon: Truck,
    title: "Superfast & Hot Delivery",
    subtitle: "Thermal Insulated Pack",
    description: "Direct from our kitchen to your doorstep in sealed thermal packaging so your biryani, tiffins, and curries arrive piping hot.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Domestic Hygiene",
    subtitle: "Sanitized & Safe",
    description: "Cooked in a clean, sanitized family kitchen following the highest domestic hygiene standards with regular temperature checks.",
  },
];

// ==============================================================================
// 5. CUSTOMER REVIEWS (3 TESTIMONIALS)
// ==============================================================================
export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Banjara Hills, Hyderabad",
    rating: 5,
    date: "Verified Customer",
    comment: "The Hyderabadi Dum Biryani reminds me of the festive cooking at my grandmother's home. The aroma of saffron, fried onions, and real ghee was unforgettable. Truly feels homemade!",
  },
  {
    name: "Rajesh Varma",
    location: "Gachibowli, Hyderabad",
    rating: 5,
    date: "Regular Weekend Order",
    comment: "Finding healthy tiffins for early office mornings that don't cause acidity is hard. Amma's Idlis are cloud-soft and the sambar has that authentic home-cooked balance. Fantastic service!",
  },
  {
    name: "Sneha Reddy",
    location: "Madhapur, Hyderabad",
    rating: 5,
    date: "Family Gathering Catering",
    comment: "We ordered 15 portions for our family puja. Every guest praised the Paneer Butter Masala and the warm Gulab Jamuns melted in our mouths. Ordering via WhatsApp was seamless!",
  },
];

// Cart Item type definition
export interface CartItem {
  item: MenuItem;
  quantity: number;
}

// ==============================================================================
// 6. MAIN APPLICATION COMPONENT
// ==============================================================================
export default function App() {
  // --- State Management ---
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [orderInstructions, setOrderInstructions] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart calculations
  const totalItemCount = Object.values(cart).reduce((sum, entry) => sum + entry.quantity, 0);
  const subtotal = Object.values(cart).reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const deliveryFee = subtotal > 499 || subtotal === 0 ? 0 : 40;
  const packagingFee = totalItemCount > 0 ? 20 : 0;
  const grandTotal = subtotal + deliveryFee + packagingFee;

  // Show temporary toast message
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add an item to the cart
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev[item.id];
      const newQuantity = existing ? existing.quantity + 1 : 1;
      return {
        ...prev,
        [item.id]: { item, quantity: newQuantity },
      };
    });
    triggerToast(`Added "${item.name}" to cart`);
  };

  // Update quantity or remove if reaches 0
  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      const existing = prev[itemId];
      if (!existing) return prev;
      const newQuantity = existing.quantity + delta;
      if (newQuantity <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return {
        ...prev,
        [itemId]: { ...existing, quantity: newQuantity },
      };
    });
  };

  // Clear all items in cart
  const clearCart = () => {
    setCart({});
  };

  // Helper to get formatted WhatsApp Order Message
  const generateWhatsAppOrderLink = () => {
    const itemsList = Object.values(cart);
    if (itemsList.length === 0) {
      // General inquiry message if cart is empty
      const genericMsg = encodeURIComponent(
        `Hello ${BUSINESS_CONFIG.name}! I would like to inquire about today's fresh menu and place an order in ${BUSINESS_CONFIG.city}.`
      );
      return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${genericMsg}`;
    }

    let message = `*NEW ORDER - ${BUSINESS_CONFIG.name.toUpperCase()}*\n`;
    message += `📍 City: ${BUSINESS_CONFIG.city}\n`;
    if (customerName.trim()) {
      message += `👤 Customer: ${customerName.trim()}\n`;
    }
    if (deliveryAddress.trim()) {
      message += `🏠 Delivery Address: ${deliveryAddress.trim()}\n`;
    }
    message += `--------------------------------\n`;
    message += `*ORDER ITEMS:*\n`;

    itemsList.forEach((entry, idx) => {
      const itemTotal = entry.item.price * entry.quantity;
      message += `${idx + 1}. ${entry.item.name} x ${entry.quantity} = ₹${itemTotal}\n`;
    });

    message += `--------------------------------\n`;
    message += `*Subtotal:* ₹${subtotal}\n`;
    message += `*Packaging:* ₹${packagingFee}\n`;
    message += `*Delivery:* ${deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}\n`;
    message += `*GRAND TOTAL:* ₹${grandTotal}\n`;

    if (orderInstructions.trim()) {
      message += `--------------------------------\n`;
      message += `📝 *Special Notes:* ${orderInstructions.trim()}\n`;
    }

    message += `\nPlease confirm availability and payment mode (UPI / Cash on Delivery). Thank you!`;

    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  // Filter menu items by selected category
  const filteredMenuItems = activeCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  // Prevent background scroll when cart modal is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#291A13] flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* ============================================================ */}
      {/* TOAST NOTIFICATION                                           */}
      {/* ============================================================ */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#291A13] text-[#FAF7F2] px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-amber-800/40 text-sm font-medium animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ============================================================ */}
      {/* TOP ANNOUNCEMENT BAR                                         */}
      {/* ============================================================ */}
      <div className="bg-[#291A13] text-[#F3ECE1] py-2 px-4 text-xs sm:text-sm font-medium text-center border-b border-amber-950 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 inline shrink-0" />
        <span>Fresh Morning & Evening Batches Prepared Daily in {BUSINESS_CONFIG.city}</span>
        <span className="hidden md:inline text-amber-300/60">·</span>
        <span className="hidden md:inline text-amber-200">Free delivery on orders above ₹499</span>
      </div>

      {/* ============================================================ */}
      {/* STICKY NAVIGATION BAR (TOP BAR CONTRACT)                    */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC8]/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text wordmark in display font */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-600/20 group-hover:scale-105 transition-transform">
              🍛
            </span>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#291A13] leading-none">
                {BUSINESS_CONFIG.name}
              </span>
              <span className="text-[11px] text-amber-800 font-medium tracking-wide">
                {BUSINESS_CONFIG.city} · Kitchen
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean text with hover state) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A3B32]">
            <a href="#menu" className="hover:text-amber-700 transition-colors">Menu</a>
            <a href="#about" className="hover:text-amber-700 transition-colors">Our Story</a>
            <a href="#why-us" className="hover:text-amber-700 transition-colors">Why Choose Us</a>
            <a href="#reviews" className="hover:text-amber-700 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
          </nav>

          {/* Zone 3: Actions (Cart Button + WhatsApp Quick Order) */}
          <div className="flex items-center gap-3">
            {/* View Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open shopping cart"
              className="relative p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#F0E8D8] hover:bg-[#E8DFC8] text-[#291A13] transition-all flex items-center gap-2.5 font-medium text-sm border border-[#E0D4BE] active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 text-amber-800" />
              <span className="hidden sm:inline">Cart</span>
              {totalItemCount > 0 ? (
                <span className="bg-orange-600 text-white text-xs font-bold px-2 py-0.5 rounded-full tabular-nums shadow-sm animate-pulse">
                  {totalItemCount}
                </span>
              ) : (
                <span className="text-xs text-amber-900/60 hidden sm:inline tabular-nums">(0)</span>
              )}
            </button>

            {/* Direct WhatsApp Call-to-action */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello ${BUSINESS_CONFIG.name}, I want to check today's specials!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-medium shadow-md shadow-emerald-700/20 transition-all hover:shadow-lg active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Us</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-[#291A13] hover:bg-[#F0E8D8] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8DFC8] bg-[#FAF7F2] px-6 py-5 shadow-xl transition-all">
            <div className="flex flex-col gap-4 text-base font-medium text-[#291A13]">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#F0E8D8] flex items-center justify-between"
              >
                <span>Today's Menu</span>
                <ArrowRight className="w-4 h-4 text-amber-700" />
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#F0E8D8] flex items-center justify-between"
              >
                <span>About Our Kitchen</span>
                <ArrowRight className="w-4 h-4 text-amber-700" />
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#F0E8D8] flex items-center justify-between"
              >
                <span>Why Choose Us</span>
                <ArrowRight className="w-4 h-4 text-amber-700" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#F0E8D8] flex items-center justify-between"
              >
                <span>Customer Reviews</span>
                <ArrowRight className="w-4 h-4 text-amber-700" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 flex items-center justify-between"
              >
                <span>Contact & Hours</span>
                <ArrowRight className="w-4 h-4 text-amber-700" />
              </a>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneCallable}`}
                  className="w-full py-3 rounded-xl bg-[#F0E8D8] text-[#291A13] text-center font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 text-white text-center font-medium flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#FAF7F2] via-[#F6EFE3] to-[#FAF7F2]">
        
        {/* Subtle decorative background ambient glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Category indicator (Quiet unboxed text) */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-4">
                <span>Homemade in {BUSINESS_CONFIG.city}</span>
                <span aria-hidden="true">·</span>
                <span>Small Batch Kitchen</span>
                <span aria-hidden="true">·</span>
                <span>100% Pure Ghee</span>
              </div>

              {/* Catchy Tagline Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#291A13] tracking-tight leading-[1.12] mb-6 text-balance">
                Warm, comforting flavours made just like <span className="text-orange-600 italic">Maa's kitchen</span>.
              </h1>

              {/* Sub-headline description */}
              <p className="text-base sm:text-lg text-[#5A493E] leading-relaxed mb-8 max-w-2xl">
                Experience authentic Hyderabadi Dum Biryani, crisp breakfast tiffins, and artisanal snacks prepared with fresh hand-ground spices and zero artificial preservatives. Delivered steaming hot to your family table.
              </p>

              {/* Primary Call-to-action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#menu"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#about"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#F0E8D8] hover:bg-[#E8DFC8] text-[#291A13] font-medium text-base border border-[#DECDB3] transition-all text-center"
                >
                  Read Our Story
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-10 pt-8 border-t border-[#E8DFC8] w-full grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-orange-700 tabular-nums">100%</div>
                  <div className="text-xs text-[#5A493E] font-medium mt-0.5">Desi Ghee & Fresh Oils</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-orange-700 tabular-nums">45m</div>
                  <div className="text-xs text-[#5A493E] font-medium mt-0.5">Piping Hot Delivery</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-orange-700 tabular-nums">4.9★</div>
                  <div className="text-xs text-[#5A493E] font-medium mt-0.5">Over 2,500+ Reviews</div>
                </div>
              </div>

            </div>

            {/* Right Large Food Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Food Photo Container with warm borders and shadow */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-[#E8DFC8] aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={heroFoodSpread}
                    alt="Authentic homemade food spread with Hyderabadi biryani, curries and snacks"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image path fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle contrast gradient scrim for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge on image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/40 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#291A13] uppercase tracking-wide">Today's Star Dish</p>
                      <p className="text-sm font-semibold text-orange-700">Royal Hyderabadi Dum Biryani</p>
                    </div>
                    <span className="font-display font-bold text-lg text-[#291A13] tabular-nums">₹299</span>
                  </div>
                </div>

                {/* Floating Decorative Badge */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#291A13] text-[#FAF7F2] p-4 rounded-2xl shadow-xl border border-amber-800/40 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white">
                    <Heart className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-200 font-medium">Family Recipe</div>
                    <div className="text-sm font-bold">Cooked with Love</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MENU SECTION (8 ITEMS AS CARDS)                          */}
      {/* ============================================================ */}
      <section id="menu" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 tracking-wider uppercase mb-2">
            <span>Fresh From The Clay Handi</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#291A13] tracking-tight">
            Our Homemade Kitchen Menu
          </h2>
          <p className="mt-3 text-[#5A493E] text-base sm:text-lg">
            Every dish is cooked fresh upon order in traditional brass and clay vessels with pure ingredients.
          </p>
        </div>

        {/* Category Tabs (Interactive Filter Controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["All", "Biryani & Mains", "Tiffins", "Snacks & Breads", "Desserts & Drinks"].map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#291A13] text-[#FAF7F2] shadow-md shadow-black/10 scale-102"
                    : "bg-[#F0E8D8] text-[#5A493E] hover:bg-[#E8DFC8] hover:text-[#291A13]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid - 8 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredMenuItems.map((item) => {
            const inCart = cart[item.id];
            const currentQty = inCart ? inCart.quantity : 0;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DFC8] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Box */}
                <div className="relative aspect-[4/3] bg-[#EFE8DC] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle Dietary indicator badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 shadow-sm border border-black/5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.dietary === 'Veg' ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    />
                    <span className={item.dietary === 'Veg' ? 'text-emerald-800' : 'text-rose-800'}>
                      {item.dietary}
                    </span>
                  </div>

                  {item.isPopular && (
                    <div className="absolute top-3 right-3 bg-orange-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                      Chef Special
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Category breadcrumb */}
                  <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>

                  {/* Dish Name */}
                  <h3 className="font-display text-lg font-bold text-[#291A13] group-hover:text-orange-700 transition-colors leading-snug">
                    {item.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs sm:text-sm text-[#5A493E] leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {item.description}
                  </p>

                  {/* Price & Add to Cart Action */}
                  <div className="pt-3 border-t border-[#F2ECE0] flex items-center justify-between gap-2 mt-auto">
                    <div>
                      <span className="text-xs text-[#7B6A5F]">Price</span>
                      <div className="font-display font-bold text-xl text-[#291A13] tabular-nums">
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Interactive Add to Cart or Stepper */}
                    {currentQty === 0 ? (
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-[#F0E8D8] border border-[#DECDB3] rounded-xl p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-white text-[#291A13] hover:bg-rose-50 hover:text-rose-700 transition-colors flex items-center justify-center font-bold text-sm shadow-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-bold tabular-nums px-1 text-[#291A13]">
                          {currentQty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors flex items-center justify-center font-bold text-sm shadow-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Quick order banner under menu */}
        <div className="mt-12 bg-[#FAF3E8] border border-[#E4D7C0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-display text-xl font-bold text-[#291A13]">Have custom requests or party catering?</h4>
            <p className="text-sm text-[#5A493E] mt-1">We cater for family pujas, birthdays, and corporate tiffin subscriptions across {BUSINESS_CONFIG.city}.</p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello ${BUSINESS_CONFIG.name}, I want to discuss catering or bulk orders!`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#291A13] hover:bg-black text-[#FAF7F2] font-semibold text-sm shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat for Bulk Orders</span>
          </a>
        </div>

      </section>

      {/* ============================================================ */}
      {/* 3. ABOUT US SECTION (STORY OF THE BUSINESS)                  */}
      {/* ============================================================ */}
      <section id="about" className="py-16 md:py-24 bg-[#F5EFE4] border-y border-[#E8DFC8] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 tracking-wider uppercase mb-3">
                <span>Heritage & Passion</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#291A13] tracking-tight leading-tight">
                Born in a loving family kitchen with recipes perfected over three generations.
              </h2>
              
              <div className="mt-6 space-y-4 text-base sm:text-lg text-[#5A493E] leading-relaxed">
                <p>
                  {BUSINESS_CONFIG.name} was founded with one simple, steadfast belief: <strong className="text-[#291A13]">food made with genuine care has the power to heal, comfort, and unite people</strong>.
                </p>
                <p>
                  Tired of commercial takeaway kitchens loaded with synthetic taste enhancers, palm oil, and day-old frozen curries, Amma started sharing her signature Hyderabadi Dum Biryani and soft South Indian breakfast tiffins with neighbors in {BUSINESS_CONFIG.city}.
                </p>
                <p>
                  Today, while our family of happy customers has grown, our kitchen philosophy remains unchanged: every batch of spices is stone-ground by hand at dawn, only pure cow ghee and cold-pressed sesame & groundnut oils are used, and every meal is packed steaming fresh.
                </p>
              </div>

              {/* Founder quote box */}
              <div className="mt-8 p-5 bg-white rounded-2xl border-l-4 border-orange-600 shadow-sm">
                <p className="font-display italic text-[#291A13] text-base">
                  "If we wouldn't serve it to our own children at our kitchen table, it will never leave our kitchen for yours."
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                  — Amma & Family, Founders of {BUSINESS_CONFIG.name}
                </p>
              </div>

            </div>

            {/* Right Story Collage / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E0D4BF] shadow-lg relative">
                
                <h3 className="font-display text-2xl font-bold text-[#291A13] mb-6">Our Kitchen Commitments</h3>
                
                <ul className="space-y-4 text-sm text-[#4A3B32]">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-[#291A13] block">Zero Artificial Additives:</strong>
                      No MSG, no artificial colors, no commercial preservative pastes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-[#291A13] block">Cold-Pressed Oils & Desi Ghee:</strong>
                      Cooked exclusively in pure cow ghee and wooden-churned vegetable oils.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-[#291A13] block">Small-Batch Slow Cooking:</strong>
                      Never mass-produced; cooked in monitored artisanal batches for authentic richness.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-[#291A13] block">Freshly Ground Spices Daily:</strong>
                      Cardamom, cinnamon, cloves, and coriander roasted and pulverized every morning.
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-[#F0E8D8] flex items-center justify-between text-xs text-[#7B6A5F]">
                  <span>Serving {BUSINESS_CONFIG.city} with pride</span>
                  <span className="font-semibold text-orange-700">Since 2018</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHY CHOOSE US (3 ICONS)                                   */}
      {/* ============================================================ */}
      <section id="why-us" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-20">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 tracking-wider uppercase mb-2">
            <span>Our Cooking Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#291A13] tracking-tight">
            Why Food Lovers Choose Us
          </h2>
          <p className="mt-3 text-[#5A493E] text-base sm:text-lg">
            We hold ourselves to the gold standard of motherly love, hygiene, and timely delivery.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-[#E8DFC8] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start relative group"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#FAF3E8] group-hover:bg-orange-600 transition-colors flex items-center justify-center text-orange-700 group-hover:text-white shadow-sm mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Subtitle tag */}
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                  {pillar.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#291A13] mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5A493E] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Clean numbered index */}
                <div className="mt-6 pt-4 border-t border-[#F2ECE0] w-full text-xs font-semibold text-amber-900/40">
                  0{index + 1}. Quality Guarantee
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* ============================================================ */}
      {/* 5. CUSTOMER REVIEWS (3 TESTIMONIALS)                         */}
      {/* ============================================================ */}
      <section id="reviews" className="py-16 md:py-24 bg-[#F6EFE3] border-y border-[#E8DFC8] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 tracking-wider uppercase mb-2">
              <span>Community Love</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#291A13] tracking-tight">
              What Our Diners Say
            </h2>
            <p className="mt-3 text-[#5A493E] text-base sm:text-lg">
              Read real feedback from families and foodies across {BUSINESS_CONFIG.city}.
            </p>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E5DBCA] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(review.rating)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-[#4A3B32] leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-5 border-t border-[#F2ECE0] flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#291A13]">{review.name}</h4>
                    <p className="text-xs text-[#7B6A5F]">{review.location}</p>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    {review.date}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CONTACT SECTION (PHONE, ADDRESS, HOURS & WHATSAPP)        */}
      {/* ============================================================ */}
      <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-20">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 tracking-wider uppercase mb-2">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#291A13] tracking-tight">
            Order Direct or Visit Our Kitchen
          </h2>
          <p className="mt-3 text-[#5A493E] text-base sm:text-lg">
            Have questions about today’s specials or want to place an instant WhatsApp order? We are just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DFC8] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#291A13] mb-6">Contact Information</h3>
              
              <div className="space-y-6 text-sm text-[#4A3B32]">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#7B6A5F] font-semibold uppercase tracking-wider">Phone / Direct Orders</div>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneCallable}`}
                      className="text-base font-bold text-[#291A13] hover:text-orange-700 transition-colors"
                    >
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                    <div className="text-xs text-emerald-700 font-medium mt-0.5">Lines open daily for orders</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#7B6A5F] font-semibold uppercase tracking-wider">Kitchen & Pickup Address</div>
                    <p className="text-sm font-semibold text-[#291A13] mt-0.5 leading-snug">
                      {BUSINESS_CONFIG.address}
                    </p>
                    <div className="text-xs text-[#7B6A5F] mt-1">{BUSINESS_CONFIG.city}, India</div>
                  </div>
                </div>

                {/* Delivery Zone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#7B6A5F] font-semibold uppercase tracking-wider">Delivery Coverage</div>
                    <p className="text-sm font-semibold text-[#291A13] mt-0.5">
                      Delivering across Jubilee Hills, Banjara Hills, Madhapur, Hitec City, and surrounding neighborhoods.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Big WhatsApp Order Button in Contact card */}
            <div className="mt-8 pt-6 border-t border-[#F2ECE0]">
              <a
                href={generateWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/35 transition-all flex items-center justify-center gap-3 text-center active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Chat & Order on WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-[#7B6A5F] mt-2">
                Fastest response · Instant menu confirmation
              </p>
            </div>

          </div>

          {/* Opening Hours Table Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DFC8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#291A13]">Kitchen Operating Hours</h3>
                  <p className="text-xs text-[#7B6A5F] mt-1">Fresh batches prepared in accordance with these timings</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Accepting Orders</span>
                </div>
              </div>

              {/* Opening Hours Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#F0E8D8]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#FAF7F2] text-xs uppercase tracking-wider text-[#7B6A5F] border-b border-[#F0E8D8]">
                    <tr>
                      <th className="py-3 px-4 sm:px-6 font-semibold">Service Days</th>
                      <th className="py-3 px-4 sm:px-6 font-semibold">Kitchen Timings</th>
                      <th className="py-3 px-4 sm:px-6 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0E8D8]">
                    {BUSINESS_CONFIG.openingHours.map((schedule, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-medium text-[#291A13]">
                          {schedule.days}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-[#5A493E] font-mono text-xs sm:text-sm tabular-nums">
                          {schedule.time}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-right">
                          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-md">
                            {schedule.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Special notice box */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Sunday Tiffin & Biryani Special:</strong> Sunday breakfast begins early at 8:30 AM with fresh steaming Idlis, Dosas, and Vadas. Sunday Dum Biryani handis open at 12:00 PM noon.
                </div>
              </div>
            </div>

            {/* Quick action button inside table section */}
            <div className="mt-8 pt-6 border-t border-[#F2ECE0] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#7B6A5F]">Prefer to talk to Amma directly?</span>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneCallable}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F0E8D8] hover:bg-[#E8DFC8] text-[#291A13] text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-700" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* ============================================================ */}
      {/* 7. FOOTER SECTION WITH SOCIAL MEDIA LINKS                    */}
      {/* ============================================================ */}
      <footer className="bg-[#24160E] text-[#D8CCC0] pt-14 pb-12 border-t border-amber-950/60 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-amber-900/30">
            
            {/* Brand column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white text-base">
                  🍛
                </span>
                <span className="font-display text-2xl font-bold text-white tracking-tight">
                  {BUSINESS_CONFIG.name}
                </span>
              </div>
              <p className="text-sm text-[#A89A8E] leading-relaxed max-w-sm mb-6">
                Pure homemade flavours, traditional slow-cooked dum biryani, and authentic tiffins crafted daily in {BUSINESS_CONFIG.city}.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-9 h-9 rounded-xl bg-amber-950/80 hover:bg-orange-600 text-amber-200 hover:text-white transition-all flex items-center justify-center border border-amber-800/30"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-9 h-9 rounded-xl bg-amber-950/80 hover:bg-orange-600 text-amber-200 hover:text-white transition-all flex items-center justify-center border border-amber-800/30"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_CONFIG.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe on YouTube"
                  className="w-9 h-9 rounded-xl bg-amber-950/80 hover:bg-orange-600 text-amber-200 hover:text-white transition-all flex items-center justify-center border border-amber-800/30"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_CONFIG.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X Twitter"
                  className="w-9 h-9 rounded-xl bg-amber-950/80 hover:bg-orange-600 text-amber-200 hover:text-white transition-all flex items-center justify-center border border-amber-800/30"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-[#BDB0A4]">
                <li><a href="#menu" className="hover:text-white transition-colors">Our Menu & Prices</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Our Kitchen Story</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Quality Standard</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Opening Hours</a></li>
              </ul>
            </div>

            {/* Contact summary */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">Kitchen Contact</h4>
              <p className="text-sm text-[#BDB0A4] leading-relaxed mb-3">
                {BUSINESS_CONFIG.address}
              </p>
              <p className="text-sm font-semibold text-white mb-1">
                Phone: <a href={`tel:${BUSINESS_CONFIG.phoneCallable}`} className="text-orange-400 hover:underline">{BUSINESS_CONFIG.phoneDisplay}</a>
              </p>
              <p className="text-sm font-semibold text-white">
                WhatsApp: <a href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`} className="text-emerald-400 hover:underline">+{BUSINESS_CONFIG.whatsappNumber}</a>
              </p>
            </div>

          </div>

          {/* Bottom Copyright & Beginner Note */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7C70]">
            <div>
              © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
            </div>
            <div>
              Handcrafted homemade meals in {BUSINESS_CONFIG.city} · Order via WhatsApp
            </div>
          </div>

        </div>
      </footer>

      {/* ============================================================ */}
      {/* FLOATING MOBILE CART BAR (WHEN ITEMS > 0)                   */}
      {/* ============================================================ */}
      {totalItemCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-[#291A13] text-[#FAF7F2] p-4 rounded-2xl shadow-2xl flex items-center justify-between border border-amber-800/40 active:scale-98 transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white text-xs font-bold">
                {totalItemCount}
              </div>
              <div className="text-left">
                <div className="text-xs text-amber-300 font-medium">Cart Total</div>
                <div className="text-sm font-bold tabular-nums">₹{grandTotal}</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400">
              <span>View Cart & Order</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* ============================================================ */}
      {/* CART POPUP / DRAWER (MODAL OVERLAY)                          */}
      {/* ============================================================ */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          
          {/* Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md h-full bg-[#FAF7F2] shadow-2xl border-l border-[#E8DFC8] flex flex-col z-10 overflow-hidden">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#E8DFC8] bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-orange-700" />
                <h3 className="font-display text-lg font-bold text-[#291A13]">
                  Your Food Order ({totalItemCount})
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-[#5A493E] hover:bg-[#F0E8D8] transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {totalItemCount === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#7B6A5F]">
                  <div className="w-16 h-16 rounded-2xl bg-[#F0E8D8] flex items-center justify-center text-3xl mb-4">
                    🍲
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#291A13]">Your cart is currently empty</h4>
                  <p className="text-xs sm:text-sm text-[#7B6A5F] max-w-xs mt-1">
                    Explore our homemade biryani, tiffins, and snacks to add delicious dishes to your order.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-orange-600 text-white text-xs font-semibold shadow-md"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  {Object.values(cart).map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="bg-white p-3.5 rounded-2xl border border-[#E8DFC8] flex items-center gap-3 shadow-xs"
                    >
                      {/* Thumbnail */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-[#EFE8DC]"
                      />

                      {/* Title & Price */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#291A13] truncate">{item.name}</h4>
                        <div className="text-xs text-orange-700 font-semibold tabular-nums mt-0.5">
                          ₹{item.price} each · ₹{item.price * quantity}
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E0D4BF] rounded-lg p-1 shrink-0">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded bg-white text-[#291A13] hover:bg-rose-50 hover:text-rose-700 flex items-center justify-center text-xs font-bold shadow-2xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold tabular-nums px-1">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded bg-orange-600 text-white hover:bg-orange-700 flex items-center justify-center text-xs font-bold shadow-2xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Optional Delivery Information Form */}
                  <div className="pt-4 border-t border-[#E8DFC8] space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                      Delivery Details (Optional for WhatsApp)
                    </p>
                    <div>
                      <label className="text-[11px] font-semibold text-[#5A493E] block mb-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-[#DECDB3] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#5A493E] block mb-1">Delivery Address & Landmark</label>
                      <input
                        type="text"
                        placeholder="e.g. Flat 302, Green Towers, Madhapur"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-[#DECDB3] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#5A493E] block mb-1">Kitchen Note / Spice Preference</label>
                      <input
                        type="text"
                        placeholder="e.g. Medium spicy, extra mint chutney please"
                        value={orderInstructions}
                        onChange={(e) => setOrderInstructions(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-[#DECDB3] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer with Price Summary and WhatsApp Action */}
            {totalItemCount > 0 && (
              <div className="p-5 border-t border-[#E8DFC8] bg-white space-y-3">
                
                {/* Cost breakdown */}
                <div className="space-y-1.5 text-xs text-[#5A493E]">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="font-semibold tabular-nums text-[#291A13]">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eco Kitchen Packaging</span>
                    <span className="font-semibold tabular-nums text-[#291A13]">₹{packagingFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee ({BUSINESS_CONFIG.city})</span>
                    <span className="font-semibold tabular-nums text-[#291A13]">
                      {deliveryFee === 0 ? <span className="text-emerald-700">FREE</span> : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#F2ECE0] flex justify-between text-base font-bold text-[#291A13]">
                    <span>Total Amount</span>
                    <span className="text-orange-700 tabular-nums">₹{grandTotal}</span>
                  </div>
                </div>

                {/* Primary WhatsApp Order Button */}
                <a
                  href={generateWhatsAppOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold text-sm shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Order on WhatsApp (₹{grandTotal})</span>
                </a>

                {/* Clear Cart Option */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={clearCart}
                    className="text-[11px] text-rose-700 hover:underline"
                  >
                    Clear All Items
                  </button>
                  <span className="text-[11px] text-[#7B6A5F]">
                    {BUSINESS_CONFIG.deliveryNote}
                  </span>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
