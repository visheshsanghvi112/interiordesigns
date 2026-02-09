import React from 'react';
import { Home, Briefcase, PenTool, Box, ArrowRight, CheckCircle2, ChevronDown, DraftingCompass, Ruler, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import ImageWithFallback from '../components/ImageWithFallback';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION - Technical/Blueprint Feel */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-dark text-white overflow-hidden">
         {/* Grid Pattern Background */}
         <div className="absolute inset-0 z-0 opacity-20" 
              style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>
         
         <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-brand-orange/5 to-transparent pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-300">Comprehensive Design Solutions</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-none tracking-tight">
              <span className="text-outline-dark text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>OUR</span> <br/>
              EXPERTISE
            </h1>
            <p className="text-gray-400 max-w-xl text-lg md:text-xl font-light leading-relaxed border-l border-brand-orange pl-8">
              We don't just decorate; we calculate, curate, and construct. Explore how we transform abstract concepts into tangible realities.
            </p>
          </Reveal>
         </div>

         {/* Floating decorative icons */}
         <div className="absolute bottom-10 right-10 text-white/5 transform -rotate-12 hidden md:block">
            <DraftingCompass size={250} strokeWidth={0.5} />
         </div>
      </section>

      {/* 2. RESIDENTIAL SECTION - Organic/Warm/Texture */}
      <section className="relative py-24 md:py-40 bg-[#faf7f5] overflow-hidden">
        {/* Organic Blob Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#f0ebe6] rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
               <Reveal>
                 <span className="text-brand-orange font-bold text-xs uppercase tracking-[0.3em] mb-4 block">01 • Sanctuary</span>
                 <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-8">Residential <br/> Interiors</h2>
                 <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                   Your home is a biography written in space. We blend soft textures, warm lighting, and ergonomic flows to create a sanctuary that recharges your spirit.
                 </p>
                 
                 <div className="space-y-6">
                   {["Custom Furniture Design", "Art Curation", "Smart Home Integration"].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 group cursor-default">
                       <div className="w-8 h-px bg-gray-300 group-hover:w-12 group-hover:bg-brand-orange transition-all duration-300"></div>
                       <span className="text-sm uppercase tracking-wider text-gray-500 group-hover:text-brand-dark transition-colors font-medium">{item}</span>
                     </div>
                   ))}
                 </div>

                 <div className="mt-12">
                   <Link to="/contact">
                     <button className="text-xs font-bold uppercase tracking-widest border-b border-brand-dark pb-2 hover:text-brand-orange hover:border-brand-orange transition-all">
                       View Residential Projects
                     </button>
                   </Link>
                 </div>
               </Reveal>
            </div>

            <div className="lg:w-1/2 relative order-1 lg:order-2 w-full">
               <Reveal delay={0.2}>
                  <div className="relative z-10 shadow-2xl rounded-t-full overflow-hidden border-8 border-white h-[500px] md:h-[650px] w-full">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1200" 
                      alt="Residential" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-white p-4 shadow-xl rounded-full flex items-center justify-center z-20 animate-float">
                     <div className="text-center">
                        <span className="block text-2xl md:text-3xl font-serif font-bold text-brand-dark">100+</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">Homes</span>
                     </div>
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMERCIAL SECTION - Grid/Technical/Sharp */}
      <section className="relative py-24 md:py-40 bg-white text-brand-dark overflow-hidden">
         {/* Dot Matrix Pattern */}
         <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
               <div className="lg:w-5/12">
                 <Reveal>
                    <div className="flex items-center gap-3 mb-6">
                       <Briefcase size={18} className="text-brand-orange"/>
                       <span className="text-brand-dark font-bold text-xs uppercase tracking-[0.3em]">02 • Workspace</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Commercial & <br/>Corporate</h2>
                    <p className="text-gray-500 mb-10 leading-relaxed text-lg font-light">
                       Design that works as hard as you do. We optimize spatial dynamics to enhance productivity, enforce brand identity, and impress clientele.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-10">
                       <div className="bg-gray-50 p-6 border border-gray-100 hover:border-brand-orange transition-all duration-300 group hover:shadow-lg">
                          <Layers className="mb-4 text-gray-400 group-hover:text-brand-orange transition-colors" size={24}/>
                          <h4 className="font-bold text-sm uppercase tracking-wide">Space Planning</h4>
                       </div>
                       <div className="bg-gray-50 p-6 border border-gray-100 hover:border-brand-orange transition-all duration-300 group hover:shadow-lg">
                          <Ruler className="mb-4 text-gray-400 group-hover:text-brand-orange transition-colors" size={24}/>
                          <h4 className="font-bold text-sm uppercase tracking-wide">Ergonomics</h4>
                       </div>
                    </div>
                 </Reveal>
               </div>
               
               <div className="lg:w-7/12 relative w-full">
                  <Reveal delay={0.2}>
                     <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-4 md:space-y-6 translate-y-12">
                           <ImageWithFallback src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" className="w-full h-48 md:h-72 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-md" alt="Office 1" />
                           <ImageWithFallback src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800" className="w-full h-32 md:h-56 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-md" alt="Office 2" />
                        </div>
                        <div className="space-y-4 md:space-y-6">
                           <ImageWithFallback src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" className="w-full h-32 md:h-56 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-md" alt="Office 3" />
                           <ImageWithFallback src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800" className="w-full h-48 md:h-72 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-md" alt="Office 4" />
                        </div>
                     </div>
                  </Reveal>
               </div>
            </div>
         </div>
      </section>

      {/* 4. RENOVATION - Split Texture (Before/After Concept) */}
      <section className="relative bg-brand-dark text-white flex flex-col md:flex-row h-auto min-h-[80vh]">
         {/* Left Side - The "Structure" */}
         <div className="w-full md:w-1/2 relative p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
            <Reveal>
               <PenTool size={40} className="text-brand-orange mb-8" />
               <h2 className="text-4xl md:text-6xl font-serif mb-8">Renovation &<br/> Restoration</h2>
               <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                  We strip away the obsolete to reveal the potential. From structural reinforcements to aesthetic overhauls, we manage the chaos of construction to deliver serenity.
               </p>
               <ul className="space-y-6 text-sm font-mono text-gray-500 w-full max-w-sm">
                  <li className="flex justify-between border-b border-gray-800 pb-3"><span>DEMOLITION PLANNING</span> <span className="text-brand-orange">100%</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-3"><span>STRUCTURAL INTEGRITY</span> <span className="text-brand-orange">100%</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-3"><span>MODERNIZATION</span> <span className="text-brand-orange">100%</span></li>
               </ul>
            </Reveal>
         </div>
         
         {/* Right Side - The "Result" */}
         <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-auto group overflow-hidden">
            <ImageWithFallback 
               src="https://images.unsplash.com/photo-1503174771036-dc64f9748519?q=80&w=1200" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
               alt="Renovation"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-10 left-10 p-5 bg-white/10 backdrop-blur-md border border-white/20 text-white">
               <span className="uppercase tracking-widest text-[10px] font-bold block mb-1 text-brand-orange">Featured Project</span>
               <span className="font-serif text-xl">Old Mill Conversion</span>
            </div>
         </div>
      </section>

      {/* 5. MODULAR KITCHENS - Sleek / Minimal */}
      <section className="py-24 md:py-32 bg-stone-50 relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-20">
                <Reveal>
                   <Box className="mx-auto mb-6 text-brand-dark" size={32}/>
                   <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-4">The Culinary Lab</h2>
                   <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Modular Kitchens & Storage Solutions</p>
                </Reveal>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                   { title: "Ergonomics", desc: "Triangle workflow optimization.", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600" },
                   { title: "Durability", desc: "Heat & scratch resistant finishes.", img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=600" },
                   { title: "Aesthetics", desc: "Seamless integrated appliances.", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600" },
                ].map((item, i) => (
                   <Reveal key={i} delay={i * 0.1}>
                      <div className="group relative overflow-hidden rounded-sm cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                         <div className="aspect-[3/4] overflow-hidden">
                            <ImageWithFallback src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title}/>
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                         <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                               <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                               <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{item.desc}</p>
                            </div>
                         </div>
                      </div>
                   </Reveal>
                ))}
             </div>
          </div>
      </section>

      {/* PROCESS - BLUEPRINT TIMELINE */}
      <section className="py-24 md:py-32 bg-[#1e293b] text-white overflow-hidden relative">
         {/* Blueprint Grid */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Reveal>
               <div className="flex justify-between items-end mb-24 border-b border-white/20 pb-8">
                  <div>
                     <span className="text-brand-orange font-mono text-xs mb-2 block">WORKFLOW_V.2.0</span>
                     <h2 className="text-4xl md:text-5xl font-serif">Execution Plan</h2>
                  </div>
                  <DraftingCompass size={40} className="text-white/30 hidden md:block"/>
               </div>
            </Reveal>

            <div className="relative">
               {/* Dashed Line - Positioned to intersect with dots correctly */}
               {/* Mobile: Vertical line on left */}
               <div className="absolute left-[15px] top-0 bottom-0 w-px border-l border-dashed border-white/30 md:hidden"></div>
               
               {/* Desktop: Horizontal line */}
               <div className="hidden md:block absolute left-0 right-0 top-[14px] h-px border-t border-dashed border-white/30 w-full"></div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                  {[
                     { step: "01", title: "Discovery", desc: "Site measurement & lifestyle analysis." },
                     { step: "02", title: "Concept", desc: "Moodboards, materials & 3D visualization." },
                     { step: "03", title: "Sourcing", desc: "Procurement of bespoke furniture & decor." },
                     { step: "04", title: "Handover", desc: "Final styling and quality inspection." }
                  ].map((phase, i) => (
                     <Reveal key={i} delay={i * 0.2}>
                        <div className="relative pl-12 md:pl-0 md:pt-12 group">
                           {/* Dot on line */}
                           <div className="absolute left-[15px] top-0 w-3 h-3 bg-brand-dark border-2 border-brand-orange rounded-full -translate-x-1/2 md:left-1/2 md:top-[14px] md:-translate-y-1/2 md:-translate-x-1/2 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                           
                           <h3 className="text-6xl font-serif text-white/5 absolute -top-4 left-10 md:left-1/2 md:-translate-x-1/2 md:-top-6 select-none group-hover:text-white/10 transition-colors duration-500">{phase.step}</h3>
                           <div className="relative z-10 mt-2 md:text-center">
                              <h4 className="text-xl font-bold mb-3 text-brand-orange">{phase.title}</h4>
                              <p className="text-gray-400 text-sm font-mono leading-relaxed">{phase.desc}</p>
                           </div>
                        </div>
                     </Reveal>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* FAQ - Stylish Accordion */}
      <section className="py-24 bg-brand-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
             <Reveal>
               <h2 className="text-center text-4xl font-serif mb-16 text-brand-dark">Common Queries</h2>
             </Reveal>
             <div className="space-y-4">
                {[
                    { q: "What is the typical timeline?", a: "Timelines vary based on scope. A single room might take 4-6 weeks, while a full home renovation can take 3-6 months. We provide a detailed schedule during the consultation." },
                    { q: "Do you work with a specific budget?", a: "We work with a wide range of budgets. Transparency is key; we help you allocate your budget effectively to get the most impact where it matters." },
                    { q: "Can I use my existing furniture?", a: "Absolutely! We love incorporating cherished pieces into new designs. We can reupholster or refinish items to match the new aesthetic." },
                    { q: "Do you handle the contractors?", a: "Yes, we offer full project management. We have a trusted network of contractors and vendors, or we can work with your preferred team." }
                ].map((faq, i) => (
                    <Reveal key={i} width="100%">
                        <details className="group bg-white rounded-sm border border-gray-100 hover:border-brand-orange/30 transition-all duration-300 shadow-sm open:shadow-lg open:border-brand-orange/50">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-brand-dark select-none">
                                <span className="text-lg">{faq.q}</span>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <ChevronDown size={20} className="text-gray-400 group-hover:text-brand-orange"/>
                                </span>
                            </summary>
                            <div className="text-gray-600 font-light mt-0 px-6 pb-8 text-base leading-relaxed animate-fade-in-up border-t border-gray-50 pt-4">
                                {faq.a}
                            </div>
                        </details>
                    </Reveal>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
};

export default Services;