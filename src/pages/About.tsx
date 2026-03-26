import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Hero with Background Image */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 flex items-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2500&auto=format&fit=crop"
            alt="Sustainable Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/30"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight">
              We are a collective of experts committed to sustainable growth.
            </h1>
            <div className="w-16 h-1 bg-emerald-500 mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl leading-relaxed">
              Guiding India's corporate landscape toward a resilient, net-zero future through strategic ESG consulting and hands-on implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* McKinsey-style Split Vision Section with Image */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sticky Left Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[4/5] overflow-hidden mb-8 bg-slate-100"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1200&auto=format&fit=crop" 
                    alt="Global Strategy" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-[1.2] tracking-tight mb-4">
                  Born from a conviction the world deserves better ESG advisory.
                </motion.h2>
                <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-base text-slate-600 font-light leading-relaxed">
                  We saw a landscape filled with fragmented advice and performative reporting. We built ESGastraa to change that narrative, bringing rigorous strategy and actionable consulting to sustainability.
                </motion.p>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:col-span-7 lg:pt-8">
              <div className="space-y-0">
                {/* Problem */}
                <motion.div {...fadeIn} className="border-t-2 border-slate-900 pt-8 pb-16">
                  <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">01 / The Problem</h3>
                  <p className="text-xl md:text-2xl font-serif text-slate-900 leading-snug">
                    ESG consulting remained fragmented, performative, and disconnected from operational realities.
                  </p>
                </motion.div>

                {/* Gap */}
                <motion.div {...fadeIn} className="border-t border-slate-300 pt-8 pb-16">
                  <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">02 / The Gap</h3>
                  <p className="text-xl md:text-2xl font-serif text-slate-900 leading-snug">
                    Growth-stage enterprises and emerging market corporations were underserved — those most in need of hands-on ESG advisory and strategic implementation.
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div {...fadeIn} className="border-t border-slate-300 pt-8 pb-16">
                  <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">03 / The Solution</h3>
                  <p className="text-xl md:text-2xl font-serif text-slate-900 leading-snug">
                    ESGastraa was built as a premier ESG consultancy — combining deep strategic advisory with practical implementation to drive real-world impact.
                  </p>
                </motion.div>

                {/* Vision */}
                <motion.div {...fadeIn} className="border-t border-slate-300 pt-8 pb-16">
                  <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">04 / The Vision</h3>
                  <p className="text-xl md:text-2xl font-serif text-slate-900 leading-snug">
                    When organisations have the right strategic partners, they make better decisions — for shareholders, communities, and future generations.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Mission Image Block */}
      <section className="py-20 lg:py-28 bg-slate-50 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-2/3 aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-slate-200 z-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Office" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 shadow-2xl z-10 md:-ml-24 mt-[-3rem] md:mt-0 border-t-4 border-emerald-700"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-slate-600 font-light mb-5 leading-relaxed">
                To empower businesses to achieve sustainable growth, regulatory compliance, and long-term value creation through expert ESG consulting. We believe that profitability and sustainability are deeply intertwined.
              </p>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                Since our founding, we have partnered with over 150 enterprises, helping them navigate complex regulatory environments like SEBI's BRSR Core, while implementing operational efficiencies that drive bottom-line results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership - Clean Grid */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Leadership</h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Guided by industry veterans with decades of experience across sustainability consulting, finance, and corporate strategy.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { name: "Dr. Ananya Sharma", role: "Managing Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
              { name: "Vikram Mehta", role: "Head of Climate Strategy", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
              { name: "Priya Patel", role: "Director, ESG Reporting", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" }
            ].map((leader, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-5 bg-slate-800">
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="border-t border-slate-800 pt-4 group-hover:border-emerald-500 transition-colors duration-300">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">{leader.name}</h3>
                  <p className="text-emerald-400 font-medium tracking-wider text-xs uppercase">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial CTA with Background Image */}
      <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
            alt="Global Earth" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-slate-950/60"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-white">
              Shape the future of business.
            </h2>
            <p className="text-lg md:text-xl text-slate-200 font-light mb-10 max-w-xl mx-auto leading-relaxed">
              We are always looking for passionate, strategic minds to join our mission of driving sustainable transformation.
            </p>
            <Link to="/careers" className="inline-flex items-center gap-3 bg-white text-emerald-950 px-8 py-4 text-base font-bold hover:bg-slate-100 transition-colors rounded-none">
              Explore Open Roles <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
