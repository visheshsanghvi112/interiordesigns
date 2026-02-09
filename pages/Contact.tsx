import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Meteors } from '../components/Meteors';
import ShimmerButton from '../components/ShimmerButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-24 relative overflow-hidden flex items-center justify-center">
      {/* Meteor Background */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-brand-dark via-gray-900 to-black overflow-hidden">
         <Meteors number={40} />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Editorial Layout */}
            <div className="lg:col-span-5 text-white">
               <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                     <Sparkles size={14} className="text-brand-orange" />
                     <span className="text-xs uppercase tracking-widest font-bold text-gray-300">Open for Commissions</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                     Let's Build <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-200">Something Legendary.</span>
                  </h1>
                  <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-md">
                     Your space is a story waiting to be written. We provide the ink, the structure, and the soul. Reach out today.
                  </p>

                  <div className="space-y-8 border-l border-white/10 pl-8">
                     <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-2">Studio</h3>
                        <p className="text-xl font-serif">123 Design Avenue, Creative District</p>
                     </div>
                     <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-2">Contact</h3>
                        <p className="text-xl font-serif">hello@shapenshades.com</p>
                        <p className="text-gray-500 mt-1">+1 (555) 123-4567</p>
                     </div>
                  </div>
               </Reveal>
            </div>

            {/* Right Side: Glassmorphism Form */}
            <div className="lg:col-span-7">
               <Reveal delay={0.2}>
                  <div className="glass-dark p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                     {/* Subtle Gradient Glow inside card */}
                     <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl group-hover:bg-brand-orange/30 transition-colors duration-700"></div>
                     
                     <h2 className="text-2xl font-serif text-white mb-8">Send us a message</h2>

                     <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="relative group/input">
                              <input 
                                 type="text" 
                                 name="name" 
                                 value={formData.name}
                                 onChange={handleChange}
                                 className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-brand-orange outline-none transition-all placeholder-transparent peer"
                                 placeholder="Name"
                                 id="name"
                                 required
                              />
                              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-xs">Your Name</label>
                           </div>
                           <div className="relative group/input">
                              <input 
                                 type="tel" 
                                 name="phone" 
                                 value={formData.phone}
                                 onChange={handleChange}
                                 className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-brand-orange outline-none transition-all placeholder-transparent peer"
                                 placeholder="Phone"
                                 id="phone"
                              />
                              <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-xs">Phone Number</label>
                           </div>
                        </div>

                        <div className="relative group/input">
                           <input 
                              type="email" 
                              name="email" 
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-brand-orange outline-none transition-all placeholder-transparent peer"
                              placeholder="Email"
                              id="email"
                              required
                           />
                           <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-xs">Email Address</label>
                        </div>

                        <div className="relative group/input">
                           <textarea 
                              name="message" 
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-brand-orange outline-none transition-all placeholder-transparent peer resize-none"
                              placeholder="Message"
                              id="message"
                              required
                           ></textarea>
                           <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-xs">Tell us about your vision</label>
                        </div>

                        <div className="pt-4 flex justify-end">
                           <ShimmerButton type="submit" className="w-full md:w-auto">
                              Send Inquiry <Send size={16} className="ml-2" />
                           </ShimmerButton>
                        </div>
                     </form>
                  </div>
               </Reveal>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;