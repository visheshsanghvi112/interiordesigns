import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight, Star, ArrowDown, Play } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import ImageWithFallback from '../components/ImageWithFallback';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop"
];

const MARQUEE_TEXT = "RESIDENTIAL • COMMERCIAL • HOSPITALITY • BESPOKE FURNITURE • ARCHITECTURAL CONSULTING • SUSTAINABLE LIVING • ";

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-brand-light">
      
      {/* CREATIVE HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
        {/* Background Layer with Ken Burns Effect */}
        <div className="absolute inset-0 z-0 bg-black">
          {HERO_IMAGES.map((src, index) => (
             <div 
               key={index}
               className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
             >
               <div className={`w-full h-full ${index === currentImageIndex ? 'animate-ken-burns' : ''}`}>
                 <ImageWithFallback 
                    src={src} 
                    alt={`Hero ${index}`} 
                    className="w-full h-full object-cover opacity-60"
                 />
               </div>
             </div>
          ))}
          {/* Noise Overlay for texture */}
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
          {/* Enhanced Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute top-1/4 left-10 md:left-20 w-32 h-32 md:w-64 md:h-64 border border-white/10 rounded-full animate-float opacity-50 z-10 hidden sm:block backdrop-blur-[2px]"></div>
        <div className="absolute bottom-1/3 right-10 md:right-32 w-20 h-20 md:w-40 md:h-40 border-2 border-brand-orange/30 rounded-full animate-spin-slow z-10 hidden sm:block"></div>

        {/* Hero Content - Editorial Style */}
        <div className="relative z-20 w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pb-32 md:pb-40">
           <div className="flex flex-col items-start relative">
              
              {/* Badge */}
              <div className="absolute -top-20 right-0 md:top-0 md:right-20 animate-spin-slow hidden md:flex items-center justify-center w-32 h-32 rounded-full border border-white/20 text-white text-[10px] uppercase tracking-widest backdrop-blur-sm">
                 <div className="absolute inset-0 flex items-center justify-center rotate-45">EST 2015</div>
                 <div className="absolute inset-0 flex items-center justify-center -rotate-45">PREMIUM</div>
              </div>

              {/* Main Headline with Mixed Typography */}
              <Reveal>
                <div className="flex flex-col">
                  <span className="text-brand-orange font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-6 ml-1 font-semibold">Interior Architecture Studio</span>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] tracking-tight">
                    <span className="block text-outline opacity-70 hover:opacity-100 transition-opacity duration-500 cursor-default">SHAPE</span>
                    <span className="block italic pl-8 md:pl-24 text-white">& SHADES</span>
                    <span className="block text-3xl md:text-5xl lg:text-6xl font-light font-sans mt-6 text-gray-300 max-w-4xl leading-tight">
                      Crafting <span className="border-b border-brand-orange pb-2 text-white">soulful</span> spaces for the modern individual.
                    </span>
                  </h1>
                </div>
              </Reveal>

              {/* Action Bar */}
              <Reveal delay={0.3}>
                <div className="mt-16 flex flex-wrap items-center gap-8">
                  <Link to="/contact">
                    <button className="group relative px-10 py-4 bg-white text-brand-dark font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:pr-14 rounded-sm">
                      <span className="relative z-10">Start Project</span>
                      <div className="absolute inset-0 bg-brand-orange transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300"></span>
                      <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white" size={16} />
                    </button>
                  </Link>
                  
                  <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer">
                     <div className="w-12 h-px bg-white/30"></div>
                     <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                  </div>
                </div>
              </Reveal>
           </div>
        </div>

        {/* Marquee Strip */}
        <div className="absolute bottom-0 w-full bg-brand-dark/90 backdrop-blur-md py-4 md:py-5 overflow-hidden z-30 border-t border-white/10">
          <div className="whitespace-nowrap animate-marquee flex items-center">
            <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.3em] px-8">{MARQUEE_TEXT}</span>
            <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.3em] px-8">{MARQUEE_TEXT}</span>
            <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.3em] px-8">{MARQUEE_TEXT}</span>
            <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.3em] px-8">{MARQUEE_TEXT}</span>
          </div>
        </div>
      </section>

      {/* INTRO - ASYMMETRICAL & ARTISTIC */}
      <section className="py-24 md:py-40 relative bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-16 md:gap-32">
               {/* Left Text */}
               <div className="lg:w-2/5 sticky top-32">
                  <Reveal>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="text-6xl font-serif text-gray-200">01</span>
                       <div className="h-px bg-gray-200 w-20"></div>
                       <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Philosophy</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-brand-dark mb-8">
                       We design for the <br/><span className="italic text-gray-400 font-light">conscious</span> observer.
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-light text-lg mb-10">
                       Every corner has a voice. We listen to the architecture, the light, and your aspirations to compose a visual symphony. It's not just about furniture; it's about the feeling of arriving home.
                    </p>
                    <Link to="/about" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark border-b border-brand-dark pb-2 hover:text-brand-orange hover:border-brand-orange transition-all">
                       Read our story <MoveRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                    </Link>
                  </Reveal>
               </div>

               {/* Right Images Collage */}
               <div className="lg:w-3/5 relative min-h-[600px] w-full">
                  <Reveal delay={0.2}>
                     <div className="relative z-10 ml-auto w-full md:w-[90%] aspect-[3/4] shadow-2xl">
                        <ImageWithFallback 
                           src="https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200" 
                           className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                           alt="Philosophy Main"
                        />
                     </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                     <div className="absolute top-1/2 left-0 -translate-y-1/2 md:translate-y-1/4 w-1/2 aspect-square z-20 border-8 border-white shadow-2xl hidden md:block">
                        <ImageWithFallback 
                           src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800" 
                           className="w-full h-full object-cover"
                           alt="Detail Shot"
                        />
                         <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 shadow-sm">
                            <div className="flex justify-between items-center">
                               <span className="text-xs font-serif italic text-gray-800">Material Selection</span>
                               <ArrowRight size={12} className="text-brand-orange"/>
                            </div>
                         </div>
                     </div>
                  </Reveal>
               </div>
            </div>
         </div>
      </section>

      {/* HIGHLIGHTED SERVICES STRIP */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
         <div className="max-w-[95rem] mx-auto px-4 sm:px-6">
            <Reveal>
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                  <h2 className="text-4xl md:text-6xl font-serif">Expertise</h2>
                  <p className="text-gray-400 text-sm max-w-sm mt-4 md:mt-0 font-light leading-relaxed">Comprehensive design solutions ranging from consultation to full-scale renovation.</p>
               </div>
            </Reveal>

            {/* Grid with improved borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
               {[
                  { title: "Residential", subtitle: "Private Sanctuaries", icon: "01" },
                  { title: "Commercial", subtitle: "Brand Experience", icon: "02" },
                  { title: "Hospitality", subtitle: "Guest Impression", icon: "03" },
                  { title: "Landscape", subtitle: "Outdoor Living", icon: "04" },
               ].map((service, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                     <div className="group relative p-10 h-72 flex flex-col justify-between border-b border-r border-white/10 hover:border-white/20 transition-colors duration-500 bg-brand-dark">
                        <span className="text-3xl font-serif opacity-20 group-hover:opacity-100 group-hover:text-brand-orange transition-all duration-500">{service.icon}</span>
                        <div className="relative z-10">
                           <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                           <p className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{service.subtitle}</p>
                        </div>
                        <ArrowRight className="absolute top-10 right-10 text-white opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     </div>
                  </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* FEATURED WORK - HORIZONTAL SCROLL FEEL */}
      <section className="py-32 bg-stone-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-between items-end">
             <Reveal>
                <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs block mb-3">Portfolio</span>
                <h2 className="text-4xl md:text-6xl font-serif text-brand-dark">Selected Works</h2>
             </Reveal>
             <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-brand-dark pb-1 hover:text-brand-orange hover:border-brand-orange transition-all">
               View All <ArrowRight size={14}/>
             </Link>
         </div>

         <div className="w-full overflow-x-auto pb-12 hide-scrollbar pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2))]">
            <div className="flex gap-6 md:gap-10 w-max pr-4">
               {[
                  { title: "The Obsidian Loft", cat: "Residential", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200" },
                  { title: "Aeon Tech Hub", cat: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" },
                  { title: "Verde Retreat", cat: "Hospitality", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" },
                  { title: "Canvas Apartment", cat: "Residential", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" }
               ].map((project, i) => (
                  <div key={i} className="w-[85vw] sm:w-[60vw] md:w-[35vw] relative group cursor-pointer">
                     <Reveal delay={i * 0.1}>
                        <div className="overflow-hidden aspect-[4/3] relative rounded-sm">
                           <ImageWithFallback 
                              src={project.img} 
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                              alt={project.title}
                           />
                           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="mt-6 flex justify-between items-end border-b border-gray-200 pb-4 group-hover:border-brand-orange transition-colors">
                           <div>
                              <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-1">{project.title}</h3>
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{project.cat}</span>
                           </div>
                           <span className="text-4xl font-serif text-gray-200 group-hover:text-brand-orange transition-colors">0{i+1}</span>
                        </div>
                     </Reveal>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA - MINIMALIST */}
      <section className="py-32 md:py-48 bg-white relative overflow-hidden flex items-center justify-center">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Reveal>
               <div className="inline-block p-4 rounded-full border border-gray-100 bg-gray-50 mb-8">
                  <Star className="w-6 h-6 text-brand-orange animate-spin-slow" fill="currentColor" />
               </div>
               <h2 className="text-5xl md:text-8xl font-serif text-brand-dark mb-12 leading-[0.9] tracking-tight">
                  Your vision,<br/> our canvas.
               </h2>
               <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <Link to="/contact">
                     <button className="px-10 py-4 bg-brand-dark text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-orange hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                        Start your journey
                     </button>
                  </Link>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Or call us at <span className="text-brand-dark border-b border-gray-200">+1 (555) 000-0000</span></p>
               </div>
            </Reveal>
         </div>
         {/* Background large text - Reduced opacity for subtlety */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-gray-50 uppercase tracking-tighter pointer-events-none select-none font-serif whitespace-nowrap -z-10">
            Shape N Shades
         </div>
      </section>
    </div>
  );
};

export default Home;