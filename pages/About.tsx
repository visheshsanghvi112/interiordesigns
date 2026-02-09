import React from 'react';
import { Users, Award, Clock, Leaf, Lightbulb, ShieldCheck } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Header with Pattern */}
      <section className="bg-stone-100 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal width="100%">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Ethos</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">About Shape N Shades</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Where architecture meets artistry. We are a team of passionate designers dedicated to redefining spaces through rigorous detail and bold imagination.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="grid grid-cols-2 gap-6 relative">
                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-brand-orange/20 -z-10 translate-x-4 translate-y-4"></div>
                
                <Reveal delay={0.1}>
                  <div className="h-48 md:h-80 w-full mt-12 shadow-lg rounded-sm overflow-hidden">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Office" />
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                   <div className="h-48 md:h-80 w-full shadow-lg rounded-sm overflow-hidden">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Designer working" />
                   </div>
                </Reveal>
             </div>
             
             <div>
                <Reveal>
                  <h3 className="text-brand-orange font-bold uppercase tracking-wider text-xs md:text-sm mb-3">Our Story</h3>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Designing with Purpose Since 2015</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base font-light">
                    Shape N Shades Designs was founded on a simple premise: Interior design should be accessible, functional, and deeply personal. What started as a small consultancy has grown into a full-service interior design firm known for its distinctive style and client-centric approach.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed text-base font-light">
                    Our name reflects our core methodology. <strong className="text-brand-dark font-semibold">Shape</strong> represents the structural integrity, flow, and furniture lines. <strong className="text-brand-dark font-semibold">Shade</strong> embodies the palette, lighting, and textures that provide warmth and depth. Together, they create harmony.
                  </p>
                </Reveal>
                
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                  <Reveal delay={0.2}>
                    <div className="text-center md:text-left">
                      <h4 className="text-3xl md:text-5xl font-bold text-brand-dark font-serif">150+</h4>
                      <span className="text-gray-400 text-xs uppercase tracking-wider mt-2 block">Projects</span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <div className="text-center md:text-left">
                      <h4 className="text-3xl md:text-5xl font-bold text-brand-dark font-serif">10</h4>
                      <span className="text-gray-400 text-xs uppercase tracking-wider mt-2 block">Years</span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="text-center md:text-left">
                      <h4 className="text-3xl md:text-5xl font-bold text-brand-dark font-serif">100%</h4>
                      <span className="text-gray-400 text-xs uppercase tracking-wider mt-2 block">Satisfaction</span>
                    </div>
                  </Reveal>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#0c0a09] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Why We Are Different</h2>
              <div className="w-16 h-px bg-brand-orange mx-auto mt-6"></div>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <Reveal delay={0.1} width="100%">
              <div className="group bg-white/5 p-8 md:p-10 rounded-sm text-center border border-white/10 hover:border-brand-orange hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Users className="text-brand-orange group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">Client-Centric</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">We don't just design for you; we design with you. Your inputs are the foundation of our blueprints.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2} width="100%">
              <div className="group bg-white/5 p-8 md:p-10 rounded-sm text-center border border-white/10 hover:border-brand-orange hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Leaf className="text-brand-orange group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">Sustainable</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">Eco-conscious material selection and energy-efficient designs that respect the planet.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3} width="100%">
              <div className="group bg-white/5 p-8 md:p-10 rounded-sm text-center border border-white/10 hover:border-brand-orange hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Lightbulb className="text-brand-orange group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">Innovation</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">Blending traditional craftsmanship with modern smart-home technology for future-ready spaces.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <Reveal>
                <div className="inline-block p-3 rounded-full bg-brand-light mb-6">
                    <ShieldCheck className="text-brand-dark" size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Ready to transform your space?</h2>
                <p className="text-gray-500 mb-10 text-lg font-light">
                    Every great project begins with a conversation. Let's discuss your ideas, budget, and timeline.
                </p>
                <Link to="/contact">
                    <button className="px-10 py-4 bg-brand-dark text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-orange hover:shadow-xl transition-all duration-300">
                        Get in Touch
                    </button>
                </Link>
            </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;