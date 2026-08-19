"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  Search, 
  ChevronRight, 
  CircleDashed, 
  Users, 
  ArrowLeft, 
  Activity, 
  Filter, 
  Heart, 
  Zap, 
  Plus, 
  MapPin, 
  Calendar, 
  Video, 
  ArrowUpRight, 
  Star, 
  CheckCircle2, 
  Play, 
  Check, 
  Instagram, 
  Dribbble, 
  Quote,
  Menu,
  X,
  Home as HomeIcon,
  Building,
  Key,
  ShieldCheck,
  Calculator,
  Percent,
  Briefcase,
  TrendingUp,
  Coffee,
  FileText,
  Clock,
  Phone,
  Mail,
  BedDouble,
  Bath,
  Ruler,
  Send
} from "lucide-react";

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Virtual Home Inspection",
      tags: [
        { icon: MapPin, label: "Jakarta Center" },
        { icon: Calendar, label: "Weekend Session" },
        { icon: Video, label: "3D Tour Online" }
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Luxury Villa Open House - Menteng",
      tags: [
        { icon: MapPin, label: "Menteng Estate" },
        { icon: Users, label: "VIP Guests" },
        { icon: ShieldCheck, label: "Certified Deed" }
      ],
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1780&auto=format&fit=crop"
    },
    {
      title: "Mortgage & Valuation Calculator",
      tags: [
        { icon: Calculator, label: "Instant Estimate" },
        { icon: Percent, label: "Low Interest Rate" },
        { icon: ShieldCheck, label: "Bank Verified" }
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
    },
    {
      title: "Private Investor Meet & Greet",
      tags: [
        { icon: Briefcase, label: "Exclusive Network" },
        { icon: TrendingUp, label: "ROI Insights" },
        { icon: Coffee, label: "Private Lounge" }
      ],
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Legal & Land Deed Advisory",
      tags: [
        { icon: FileText, label: "Notary Consultation" },
        { icon: CheckCircle2, label: "100% Legal Guarantee" },
        { icon: Clock, label: "Fast Processing" }
      ],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const products = [
    {
      name: "Skyline Penthouse",
      city: "Jakarta",
      type: "Penthouse",
      price: "$850k",
      rating: "4.9",
      beds: "5 Beds",
      baths: "4 Baths",
      area: "320 m²",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Bali Cliff Villa",
      city: "Bali",
      type: "Villa",
      price: "$1.2M",
      rating: "4.8",
      beds: "6 Beds",
      baths: "6 Baths",
      area: "480 m²",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1780&auto=format&fit=crop"
    },
    {
      name: "Menteng Modern House",
      city: "Jakarta",
      type: "House",
      price: "$650k",
      rating: "4.7",
      beds: "4 Beds",
      baths: "3 Baths",
      area: "240 m²",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "BSD Smart Home",
      city: "BSD",
      type: "Smart Home",
      price: "$420k",
      rating: "4.9",
      beds: "3 Beds",
      baths: "2 Baths",
      area: "180 m²",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
    },
    {
      name: "Cipete Garden Residence",
      city: "Jakarta",
      type: "Residence",
      price: "$540k",
      rating: "4.6",
      beds: "4 Beds",
      baths: "3 Baths",
      area: "210 m²",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      if (sidebarOpen) {
        sidebarRef.current.removeAttribute("inert");
      } else {
        sidebarRef.current.setAttribute("inert", "");
      }
    }
  }, [sidebarOpen]);

  // Handle navbar background on scroll (throttled with requestAnimationFrame)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-brand-dark focus:px-5 focus:py-2.5 focus:rounded-full focus:font-semibold focus:shadow-lg">
        Skip to main content
      </a>
      <main id="main" className="max-w-7xl mx-auto bg-white min-h-screen relative shadow-sm">
      {/* ─── MOBILE SIDEBAR DRAWER ─── */}
      <div 
        onClick={() => setSidebarOpen(false)} 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
      />
      <aside ref={sidebarRef} aria-hidden={!sidebarOpen} className={`fixed top-0 right-0 bottom-0 w-72 max-w-[80%] bg-brand-dark text-white z-[100] transition-transform duration-300 ease-out shadow-2xl p-6 flex flex-col justify-between ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center font-bold text-lg leading-none">
                g
              </div>
              <span className="font-semibold text-lg tracking-tight">granger</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} aria-label="Close menu" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 font-medium text-gray-300">
            <a href="#properties" onClick={() => setSidebarOpen(false)} className="hover:text-brand-orange transition py-2 border-b border-gray-800/50 flex items-center justify-between">
              Properties <ChevronRight className="w-4 h-4 text-gray-500" />
            </a>
            <a href="#virtual-tour" onClick={() => setSidebarOpen(false)} className="hover:text-brand-orange transition py-2 border-b border-gray-800/50 flex items-center justify-between">
              Virtual Tours <ChevronRight className="w-4 h-4 text-gray-500" />
            </a>
            <a href="#pricing" onClick={() => setSidebarOpen(false)} className="text-brand-orange transition py-2 border-b border-gray-800/50 flex items-center justify-between font-semibold">
              Pricing & Plans <ChevronRight className="w-4 h-4 text-brand-orange" />
            </a>
            <a href="#reviews" onClick={() => setSidebarOpen(false)} className="hover:text-brand-orange transition py-2 border-b border-gray-800/50 flex items-center justify-between">
              Reviews <ChevronRight className="w-4 h-4 text-gray-500" />
            </a>
            <a href="#about" onClick={() => setSidebarOpen(false)} className="hover:text-brand-orange transition py-2 flex items-center justify-between">
              About Granger <ChevronRight className="w-4 h-4 text-gray-500" />
            </a>
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-gray-800">
          <button className="w-full text-center py-2.5 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition">
            Log in
          </button>
          <button className="w-full bg-brand-orange text-white py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition shadow-lg flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Fixed Full-Width Standard Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : ''}`}>
        <nav className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full text-white transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center font-bold text-lg leading-none shadow-md">
              g
            </div>
            <span className="font-semibold text-xl tracking-tight">granger</span>
          </div>
          
          {/* Desktop & Tablet Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#properties" className="hover:text-brand-orange transition">Properties</a>
            <a href="#virtual-tour" className="hover:text-brand-orange transition">Virtual Tour</a>
            <a href="#pricing" className="text-brand-orange font-semibold">Pricing</a>
            <a href="#reviews" className="hover:text-brand-orange transition">Reviews</a>
            <a href="#about" className="hover:text-brand-orange transition">About</a>
          </div>

          {/* Right Actions & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block text-sm font-medium hover:text-white/80 transition">Log in</button>
            <button className="hidden sm:flex bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition shadow-lg items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="md:hidden p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition flex items-center justify-center"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* ─── HERO SECTION (Restored Full Height min-h-screen) ─── */}
      <section className="relative bg-gray-900 rounded-b-[3rem] overflow-hidden px-6 pt-24 pb-16 md:px-12 md:pb-24 text-white min-h-[85vh] md:min-h-screen flex flex-col justify-between">
        {/* Full Brightness Background Image Layer */}
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop"
          alt=""
          fill
          priority
          quality={72}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        
        {/* Dark Gradient Overlay (Matching navbar dark background gray-900 instead of blue) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-40% to-gray-900/95"></div>

        {/* Hero Content (Shifted higher up with description on right side above Granger title) */}
        <div className="relative z-10 mt-4 md:mt-8 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start w-full gap-6 flex-1">
          <div className="max-w-xl lg:max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4 tracking-tight drop-shadow-md text-white">
              A new species<br />of property living.
            </h2>
          </div>

          {/* Right Side Small Description (Bottom-right on mobile, right-aligned on desktop) */}
          <div className="max-w-xs text-right text-white/80 z-20 mt-auto ml-auto">
            <p className="text-xs sm:text-sm leading-relaxed text-gray-200 drop-shadow">
              Discover luxury architectural homes, smart villas, and exclusive property investments tailored for modern lifestyles.
            </p>
          </div>
        </div>


        {/* Huge Title Background (White text on all devices) */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full flex justify-center items-end pointer-events-none overflow-hidden">
          <h1 className="text-[28vw] sm:text-[26vw] md:text-[24vw] lg:text-[22vw] font-bold tracking-tighter leading-none text-white opacity-40 sm:opacity-35 drop-shadow-lg select-none uppercase text-center translate-y-[30%] whitespace-nowrap">
            Granger
          </h1>
        </div>
      </section>

      {/* ─── FLEXIBLE PROPERTY SECTION ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wider">FEATURED PROPERTIES</p>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-brand-dark">
              Explore <span className="inline-flex items-center justify-center p-2 bg-orange-100 text-brand-orange rounded-full align-middle mx-1"><HomeIcon className="w-6 h-6" /></span> our<br />flexible of property.
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium border border-gray-200">#Luxury Villa, Penthouse</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium border border-gray-200">#Smart Home, Valuation</span>
            </div>
          </div>

          {/* Property Search App UI Card */}
          <div className="bg-gray-50 rounded-4xl p-6 md:p-8 border border-gray-100 relative shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Connect to all listings</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Today&apos;s buyers will find simpler ways to discover premium homes and exclusive community estates.</p>
            </div>
            
            {/* Search Input Simulation */}
            <div className="flex items-center justify-between bg-white rounded-full p-2 pl-6 shadow-sm border border-gray-100 mb-6">
              <span className="text-gray-500 text-sm">Find Property or City...</span>
              <button aria-label="Search" className="bg-brand-dark text-white p-3 rounded-full flex items-center justify-center">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3 cursor-pointer hover:text-brand-orange transition">
                <span className="font-medium">Private Villa Booking</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3 cursor-pointer hover:text-brand-orange transition">
                <span className="font-medium text-gray-500">Virtual Property Tour</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals & Text */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 lg:mt-0">
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex gap-1 mb-4">
                <span className="w-8 h-1 bg-brand-orange rounded-full"></span>
                <span className="w-2 h-1 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-1 bg-gray-300 rounded-full"></span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Built into every residence is an ecosystem to make buying, renting, and inspecting properties effortless.</p>
              <h3 className="text-2xl font-semibold text-brand-dark leading-tight mb-4">Visionary<br />Precision Living</h3>
              <button className="text-sm font-medium flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 hover:bg-gray-50 transition">
                Learn more
              </button>
            </div>
          </div>

          {/* Property Image Card */}
          <div className="flex-1 relative min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1780&auto=format&fit=crop"
              alt="Luxury villa exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover rounded-4xl shadow-md"
            />
            
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Inspection Available
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border border-white/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500 font-medium">Menteng Villa • 5 Beds</span>
                <span className="text-sm font-bold">$1,200/mo</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-semibold">10:00 AM</span>
                <span className="text-gray-400">-</span>
                <span className="text-lg font-semibold text-gray-400">Open House</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition">
                Book Inspection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS SECTION ─── */}
      <section className="py-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wider">OUR PRODUCTS</p>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-brand-dark max-w-xl">
              Curated <span className="inline-flex items-center justify-center p-2 bg-orange-100 text-brand-orange rounded-full align-middle mx-1"><Building className="w-6 h-6" /></span> property products.
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium border border-gray-200 rounded-full px-5 py-2.5 hover:bg-gray-50 transition shrink-0">
            View All Listings <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards - Horizontal Scroll Row */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-proximity scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden shrink-0 snap-start w-[82%] sm:w-[46%] lg:w-[31%] group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden h-48 md:h-52">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 31vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                  <MapPin className="w-3 h-3 text-brand-orange" /> {p.city}
                </span>
                <span className="absolute top-3 right-3 bg-brand-orange text-brand-dark rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm">
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2 gap-3">
                  <h3 className="font-semibold text-brand-dark leading-snug">{p.name}</h3>
                  <span className="flex items-center gap-1 text-xs font-bold text-gray-800 shrink-0">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> {p.rating}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" /> {p.beds}</span>
                  <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {p.baths}</span>
                  <span className="flex items-center gap-1"><Ruler className="w-3.5 h-3.5" /> {p.area}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-[11px] text-gray-500 block">Starting at</span>
                    <span className="font-bold text-brand-dark">{p.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button aria-label={`Save ${p.name} to favorites`} className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition text-gray-500">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button aria-label={`View ${p.name} details`} className="w-9 h-9 bg-brand-orange text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ELEVATE EXPERIENCE SECTION ─── */}
      <section className="py-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="flex gap-4 text-sm font-medium text-gray-500 mb-4">
              <button className="text-brand-dark border-b-2 border-brand-dark pb-1 flex items-center gap-2">
                <CircleDashed className="w-4 h-4" /> Smart Property Match
              </button>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-brand-dark max-w-2xl">
              Elevate your <span className="inline-flex items-center justify-center p-2 bg-orange-100 text-brand-orange rounded-full align-middle mx-1"><Building className="w-6 h-6" /></span> experience with handpicked estates.
            </h2>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <p className="text-gray-500 text-right max-w-xs hidden md:block">You may not be guaranteed a good review, but our properties do.</p>
            <button aria-label="Next" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-proximity scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Info Card */}
          <div className="bg-gray-50 rounded-4xl p-8 border border-gray-100 flex flex-col justify-between aspect-square shrink-0 snap-start w-[85%] sm:w-[46%] lg:w-[31.5%]">
            <div>
              <div className="text-6xl font-light text-brand-dark tracking-tighter mb-2">01<span className="text-2xl text-gray-400">/04</span></div>
              <p className="font-medium text-brand-dark">Elevating<br />Living</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <button aria-label="Previous" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button aria-label="Next" className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center hover:bg-orange-600 shadow-md">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dark Card */}
          <div className="bg-brand-dark text-white rounded-4xl p-8 flex flex-col justify-between aspect-square shadow-xl relative overflow-hidden shrink-0 snap-start w-[85%] sm:w-[46%] lg:w-[31.5%]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent"></div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium leading-snug">
                The estate experts <span className="bg-white/10 px-2 py-0.5 rounded-md border border-white/20 text-sm align-middle inline-flex items-center gap-1"><Users className="w-4 h-4 inline" /> CRM</span> and smart software for better living.
              </p>
            </div>
            <div className="relative z-10 flex justify-between items-center mt-auto">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium font-semibold">Club</span>
              </div>
              <button className="text-xs font-semibold px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition">
                Read story
              </button>
            </div>
          </div>

          {/* Image Card */}
          <div className="rounded-4xl overflow-hidden relative aspect-square shadow-md shrink-0 snap-start w-[85%] sm:w-[46%] lg:w-[31.5%]">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
              alt="Modern interior of a luxury residence"
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 46vw, 32vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-6">
              <div className="flex justify-end w-full">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-3 shadow-lg flex items-center gap-3 w-40">
                  <div className="w-10 h-10 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center"><HomeIcon className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Estate</div>
                    <div className="text-sm font-bold text-gray-800">Available</div>
                  </div>
                </div>
              </div>
              <div className="text-white mt-auto">
                <span className="text-xs font-semibold tracking-wider uppercase mb-1 block font-mono">Integration</span>
                <h3 className="text-xl font-medium leading-tight">Luxury Home<br />Smart Partner</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROPERTY VALUE TRACKING SECTION ─── */}
      <section className="py-16 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Chart Card */}
        <div className="bg-[#F0F5F9] rounded-[2.5rem] p-3 md:p-6 relative overflow-hidden h-auto min-h-[340px] md:min-h-0 md:h-[500px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
          
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-60 mix-blend-multiply rounded-[2.5rem]"
          />

          {/* Chart UI Card Overlay */}
          <div className="relative md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white/95 backdrop-blur-xl rounded-3xl p-4 md:p-6 shadow-2xl border border-white/50 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                </div>
                <span className="font-semibold text-sm md:text-base text-gray-800">Property Value</span>
              </div>
              <div className="text-[10px] md:text-xs font-semibold px-2.5 md:px-3 py-1 bg-orange-100 text-brand-orange rounded-full">Annual</div>
            </div>
            
            <div className="mb-4 md:mb-6">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">+14.2% <span className="text-xs md:text-sm font-medium text-gray-400">ROI</span></div>
            </div>

            {/* SVG Chart */}
            <div className="h-16 md:h-24 w-full mb-4 md:mb-6 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                <path d="M0,40 Q15,35 25,20 T50,25 T75,10 T100,30" fill="none" stroke="#FF5722" strokeWidth="2" strokeDasharray="4" opacity="0.3" />
                <path d="M0,40 Q15,35 25,20 T50,25" fill="none" stroke="#FF5722" strokeWidth="2" />
              </svg>
              
              <div className="absolute bottom-[20%] left-[25%] transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-orange rounded-full border-2 border-white shadow-sm z-10"></div>
                <div className="text-[9px] md:text-[10px] text-gray-400 mt-1.5 md:mt-2">2022</div>
              </div>
              <div className="absolute bottom-[40%] left-[50%] transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-orange rounded-full border-2 border-white shadow-sm z-10 md:ring-4 md:ring-orange-100"></div>
                <div className="text-[9px] md:text-[10px] text-gray-400 mt-1.5 md:mt-2 font-bold text-brand-orange">2023</div>
              </div>
              <div className="absolute bottom-[70%] left-[75%] transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-orange rounded-full border-2 border-white shadow-sm z-10"></div>
                <div className="text-[9px] md:text-[10px] text-gray-400 mt-1.5 md:mt-2">2024</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 md:pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-[11px] md:text-xs text-gray-400 mb-1">Jakarta</div>
                <div className="font-semibold text-xs md:text-sm">+18.5 <span className="text-[9px] md:text-[10px] text-gray-400 font-normal">%</span></div>
              </div>
              <div className="text-center border-l border-r border-gray-100">
                <div className="text-[11px] md:text-xs text-gray-400 mb-1">Bali</div>
                <div className="font-semibold text-xs md:text-sm">+22.1 <span className="text-[9px] md:text-[10px] text-gray-400 font-normal">%</span></div>
              </div>
              <div className="text-center">
                <div className="text-[11px] md:text-xs text-gray-400 mb-1">BSD</div>
                <div className="font-semibold text-xs md:text-sm">+12.4 <span className="text-[9px] md:text-[10px] text-gray-400 font-normal">%</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text & Filters */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">VALUE TRACKING</p>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-brand-dark mb-8">
            Stay motivated with<br />property <span className="inline-flex items-center justify-center p-2 bg-orange-100 text-brand-orange rounded-full align-middle mx-1"><Key className="w-6 h-6" /></span> tracking.
          </h2>
          
          <div className="flex gap-3 mb-10">
            <button aria-label="Filter properties" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 shadow-sm text-brand-dark">
              <Filter className="w-4 h-4" />
            </button>
            <button aria-label="Favorites" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400">
              <Heart className="w-4 h-4" />
            </button>
            <button aria-label="Quick match" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400">
              <Zap className="w-4 h-4" />
            </button>
            <button aria-label="Add property" className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center shadow-md text-white">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-end justify-between gap-6 border-t border-gray-200 pt-8 mt-auto">
            <div className="max-w-xs">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Track property price growth in one place giving total performance detail overview.</p>
              <a href="#" className="text-sm font-semibold text-brand-dark border-b border-brand-dark pb-0.5 hover:text-brand-orange hover:border-brand-orange transition">EXPLORE APP</a>
            </div>
            
            <button aria-label="Explore app" className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 shrink-0 transform -translate-y-4">
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2 w-32 relative z-10 shrink-0">
              <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Estate expert preview" width={128} height={80} className="w-full h-20 object-cover rounded-xl" />
              <div className="absolute top-2 right-2 bg-white/90 rounded px-1.5 py-0.5 text-[10px] font-bold flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span> Live
              </div>
              <div className="text-center">
                <div className="text-[10px] text-gray-500">Estate Expert</div>
                <div className="text-xs font-semibold flex items-center justify-center gap-1">
                  <span className="text-yellow-400">★</span> Read Post
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLACK ACCORDION SECTION ─── */}
      <section className="py-16 px-6 md:px-12">
        <div className="bg-brand-dark rounded-[3rem] p-8 md:p-16 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="text-sm text-gray-400 font-medium tracking-wider uppercase">ADVANCE SAAS</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight max-w-2xl">
              To win over <span className="inline-flex items-center justify-center p-2 bg-white/10 text-white rounded-full align-middle mx-1"><HomeIcon className="w-6 h-6" /></span> property-minded buyers with <span className="inline-flex items-center justify-center p-2 bg-white/10 text-white rounded-full align-middle mx-1"><Zap className="w-6 h-6" /></span> eco technology and excellence.
            </h2>
          </div>

          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const isActive = activeAccordion === index;
              const isLast = index === accordionItems.length - 1;

              if (isActive) {
                return (
                  <div 
                    key={index} 
                    onClick={() => setActiveAccordion(index)}
                    className="bg-brand-orange rounded-3xl p-6 relative overflow-hidden transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-dark">{item.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((t, idx) => {
                            const TagIcon = t.icon;
                            return (
                              <span key={idx} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium border border-white/30 text-brand-dark flex items-center gap-1">
                                <TagIcon className="w-3 h-3" /> {t.label}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-white text-brand-orange rounded-full flex items-center justify-center shrink-0 shadow-lg hover:bg-gray-100 transition">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="absolute right-8 md:right-32 top-1/2 transform -translate-y-1/2 w-48 h-32 rounded-2xl overflow-hidden shadow-2xl hidden lg:block border-4 border-brand-orange rotate-3 hover:rotate-0 transition-transform">
                      <Image src={item.image} alt={item.title} fill sizes="192px" className="object-cover" />
                    </div>
                  </div>
                );
              }

              return (
                <div 
                  key={index} 
                  onClick={() => setActiveAccordion(index)}
                  className={`py-4 flex justify-between items-center cursor-pointer hover:text-brand-orange transition group ${isLast ? '' : 'border-b border-gray-800'}`}
                >
                  <span className="text-lg md:text-xl font-medium">{item.title}</span>
                  <Plus className="w-5 h-5 text-gray-500 group-hover:text-white transition" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── REVIEW & CONTACT SECTION ─── */}
      <section className="py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Review Card */}
        <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Client Review</p>
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-brand-dark mb-8">
              &quot;From the first viewing to the final handover, Granger handled everything with total precision. The valuation tool predicted the market perfectly.&quot;
            </p>
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"><Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" alt="Client photo" width={40} height={40} className="w-full h-full object-cover" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"><Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1970&auto=format&fit=crop" alt="Client photo" width={40} height={40} className="w-full h-full object-cover" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"><Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" alt="Client photo" width={40} height={40} className="w-full h-full object-cover" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-orange text-brand-dark flex items-center justify-center text-[11px] font-bold">+2k</div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-brand-dark text-brand-orange rounded-full flex items-center justify-center font-bold text-sm">DC</div>
              <div>
                <div className="font-semibold text-sm text-brand-dark">David Chandra</div>
                <div className="text-xs text-gray-500">Investor, Jakarta</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 text-xs font-bold text-brand-dark">
              <Quote className="w-3 h-3 fill-current text-brand-orange" /> Verified Buyer
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-brand-dark text-white rounded-[2.5rem] p-8 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-10 w-56 h-56 bg-brand-blue/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 h-full flex flex-col">
            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-4">Contact</p>
            <h3 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-8">
              Let&apos;s talk about<br />your next home.
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-brand-orange" /></span>
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider">Phone</div>
                  <div className="text-sm font-medium">+62 812 3456 7890</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-brand-orange" /></span>
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider">Email</div>
                  <div className="text-sm font-medium">hello@granger.id</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-brand-orange" /></span>
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider">Office</div>
                  <div className="text-sm font-medium">Pluit - Penjaringan, Jakarta</div>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input type="text" placeholder="Your name" className="flex-1 bg-white/10 border border-white/15 rounded-full px-5 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-brand-orange transition" />
                <input type="email" placeholder="Email address" className="flex-1 bg-white/10 border border-white/15 rounded-full px-5 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-brand-orange transition" />
              </div>
              <button className="w-full bg-brand-orange text-brand-dark rounded-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 hover:text-white transition shadow-lg">
                Send Message <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS SECTION ─── */}
      <section className="py-16 px-6 md:px-12 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-100 rounded-full -translate-x-1/2 -translate-y-1/4 -z-10"></div>
        
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-brand-dark max-w-sm">
            What <span className="inline-flex items-center justify-center p-2 bg-orange-100 text-brand-orange rounded-full align-middle mx-1"><HomeIcon className="w-6 h-6" /></span> buyers are honestly saying right now
          </h2>
          <div className="flex gap-2">
            <button className="text-sm font-medium border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 flex items-center gap-2">
              <Star className="w-4 h-4 fill-current text-yellow-400 border-none" /> 4.9 Ratings
            </button>
            <button className="text-sm font-medium border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 flex items-center gap-2">
              Evaluate on App
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Testimonial Card */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-6">Review</div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-dark mb-8">
                &quot;The Granger property tracker keeps my investment portfolio on track, and the agent network makes buying seamless. It&apos;s the perfect mix of luxury and convenience.&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm font-bold text-gray-800">5.0</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" alt="User avatar" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Samantha Chen</div>
                  <div className="text-xs text-gray-500">Property Buyer</div>
                </div>
              </div>
              <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center text-xs shadow-sm">
                <Quote className="w-3 h-3 fill-current" />
              </div>
            </div>
          </div>

          {/* Video/Image Testimonial Card */}
          <div className="bg-gray-100 rounded-[2.5rem] relative overflow-hidden h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1973&auto=format&fit=crop"
              alt="Luxury residence for VIP inspection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-semibold shadow-sm w-max">
                <MapPin className="w-3 h-3 text-brand-blue" /> Menteng Estate...
              </div>
              <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-semibold shadow-sm w-max">
                <CheckCircle2 className="w-3 h-3 text-green-500" /> Deed Verified
              </div>
            </div>

            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#D2E823] rounded-full shadow-lg blur-[1px]"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <h3 className="text-3xl font-medium mb-2 drop-shadow-md">VIP Inspection</h3>
              <p className="text-sm text-white/80 mb-4 drop-shadow-md">Private Agent • Legal Tips</p>
              <div className="flex justify-center mb-6">
                <div className="bg-white text-brand-dark rounded-full px-4 py-2 font-bold shadow-lg flex items-center gap-2">
                  $250 <span className="text-xs text-gray-500 font-normal">/ visit</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-white text-brand-dark rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition cursor-pointer">
              <Play className="w-5 h-5 ml-1 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRE-FOOTER BANNER ─── */}
      <section className="px-6 md:px-12 pb-12">
        <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="w-32 h-32 rounded-[2rem] overflow-hidden relative shrink-0 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2069&auto=format&fit=crop"
              alt=""
              fill
              sizes="128px"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-red-900/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2 text-center">
              <span className="text-xs font-semibold mb-1">Explore Map</span>
              <div className="w-8 h-8 bg-white/30 backdrop-blur rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-dark mb-4">
              We&apos;re doing everything<br />for future living.
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-medium text-gray-500">
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> Seamless Integration</span>
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> Friendly UI/UX</span>
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> 24/7 Support</span>
            </div>
          </div>

          <div className="flex items-center gap-8 shrink-0">
            <div className="text-right hidden sm:block">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                <div className="text-gray-400">Estates</div>
                <div className="font-bold text-gray-800">10k+</div>
                <div className="text-gray-400">Deals</div>
                <div className="font-bold text-gray-800">5k+</div>
                <div className="text-gray-400">Rating</div>
                <div className="font-bold text-gray-800">4.9 ★</div>
              </div>
            </div>
            <button aria-label="Learn more" className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 md:px-12 py-12 border-t border-gray-100 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="text-sm font-semibold mb-1">Our Office - Jakarta</div>
            <div className="text-xs text-gray-500">Pluit - Penjaringan</div>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-brand-dark transition">Find Property</a>
            <a href="#" className="hover:text-brand-dark transition">Estate System Builder</a>
          </div>
        </div>

        <div className="w-full text-center relative border-b border-gray-200 pb-8 mb-8">
          <span className="text-xs text-gray-500 absolute top-0 left-0 uppercase tracking-widest">Privacy Policy</span>
          <span className="text-xs text-gray-500 absolute top-0 left-1/2 transform -translate-x-1/2 uppercase tracking-widest">2026 ©</span>
          <span className="text-xs text-gray-500 absolute top-0 right-0 uppercase tracking-widest">Terms & Conditions</span>
          
          <h1 className="text-[15vw] font-bold tracking-tighter leading-none text-brand-dark mt-10 select-none">
            Granger
          </h1>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-dark flex items-center gap-1"><Instagram className="w-4 h-4" /> @Granger.Property</a>
            <a href="#" className="hover:text-brand-dark flex items-center gap-1"><Dribbble className="w-4 h-4" /> Dribbble Pro</a>
          </div>
          <div>Designed by Maulan</div>
        </div>
      </footer>
      </main>
    </>
  );
}
