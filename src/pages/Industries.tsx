import { motion } from 'motion/react';
import { ArrowRight, Factory, Landmark, HeartPulse, Laptop, Building2, ShoppingCart, Zap, Car, ShoppingBag, Truck, Signal, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const industries = [
    { name: "Manufacturing", icon: Factory, img: "https://picsum.photos/seed/manufacturing/800/600", desc: "Tackling Scope 3 emissions, resource efficiency, and supply chain decarbonization." },
    { name: "BFSI", icon: Landmark, img: "https://picsum.photos/seed/bfsi/800/600", desc: "Integrating ESG risk into lending portfolios and investment due diligence." },
    { name: "Pharma & Healthcare", icon: HeartPulse, img: "https://picsum.photos/seed/pharma/800/600", desc: "Managing waste, water usage, and ensuring ethical supply chains." },
    { name: "IT & Technology", icon: Laptop, img: "https://picsum.photos/seed/tech/800/600", desc: "Data center energy efficiency, e-waste management, and diversity initiatives." },
    { name: "Real Estate", icon: Building2, img: "https://picsum.photos/seed/realestate/800/600", desc: "Green building certifications, energy modeling, and sustainable materials." },
    { name: "FMCG", icon: ShoppingCart, img: "https://picsum.photos/seed/fmcg2/800/600", desc: "Sustainable packaging, water neutrality, and responsible sourcing." },
    { name: "Energy & Utilities", icon: Zap, img: "https://picsum.photos/seed/energy/800/600", desc: "Transitioning to renewables, grid modernization, and emissions reduction." },
    { name: "Automotive", icon: Car, img: "https://picsum.photos/seed/automotive/800/600", desc: "EV transition strategies, circular economy in parts, and sustainable mobility." },
    { name: "Retail & E-commerce", icon: ShoppingBag, img: "https://picsum.photos/seed/retail/800/600", desc: "Sustainable packaging, last-mile emissions, and ethical sourcing." },
    { name: "Logistics & Transport", icon: Truck, img: "https://picsum.photos/seed/logistics/800/600", desc: "Fleet electrification, route optimization, and alternative fuels." },
    { name: "Telecommunications", icon: Signal, img: "https://picsum.photos/seed/telecom/800/600", desc: "Network energy efficiency, digital inclusion, and e-waste reduction." },
    { name: "Agriculture & Food", icon: Wheat, img: "https://picsum.photos/seed/agriculture/800/600", desc: "Regenerative agriculture, water conservation, and food waste reduction." }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Industries
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Tailored ESG strategies that address the unique regulatory and operational challenges of your sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 border-b border-slate-200 bg-white overflow-hidden flex flex-col items-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">
          Sectors We Transform
        </p>
        <div className="w-full relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={`first-${index}`} className="flex items-center gap-3 text-slate-400 hover:text-emerald-700 transition-colors cursor-pointer">
                  <Icon className="w-8 h-8" />
                  <span className="text-xl font-serif font-bold">{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8 absolute top-0 group-hover:[animation-play-state:paused]" style={{ left: '100%' }}>
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={`second-${index}`} className="flex items-center gap-3 text-slate-400 hover:text-emerald-700 transition-colors cursor-pointer">
                  <Icon className="w-8 h-8" />
                  <span className="text-xl font-serif font-bold">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: (i % 6) * 0.1 }} className="group border border-slate-200 hover:shadow-xl transition-all cursor-pointer flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <img src={industry.img} alt={industry.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <industry.icon className="w-6 h-6 text-emerald-700" />
                    <h3 className="text-2xl font-serif font-bold text-slate-900">{industry.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 flex-1">{industry.desc}</p>
                  <Link to="/contact" className="inline-flex items-center text-sm font-bold text-emerald-700">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
