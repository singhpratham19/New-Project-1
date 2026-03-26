import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { categorySlugs } from '../utils/categorySlugs';

export default function Services() {
  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-slate-950">
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop" 
            alt="Sustainability and renewable energy" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/50 border border-emerald-400/30 text-emerald-100 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Our Capabilities
            </motion.div>
            <motion.h1 variants={staggerItem} className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              From boardroom strategy to on-ground execution.
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl">
              We go beyond consulting. With an army of specialized service providers, we deliver end-to-end ESG solutions—designing the strategy and implementing every step, especially for the manufacturing sector.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* End-to-End Implementation Highlight */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Beyond Consulting: <br/><span className="text-emerald-700">End-to-End Execution</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We don't just deliver a strategy and walk away. esgAAstra is backed by an <strong>army of specialized service providers</strong>—from renewable energy installers and waste management experts to industrial engineers.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We orchestrate the entire implementation process, ensuring every step adheres to strict global ESG standards. Our turnkey solutions are specifically tailored for the complexities of the <strong>manufacturing sector</strong>, turning high-level boardroom strategies into on-the-ground operational realities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-emerald-700 pl-4">
                  <div className="text-3xl font-serif font-bold text-slate-900 mb-1">500+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Implementation Partners</div>
                </div>
                <div className="border-l-2 border-emerald-700 pl-4">
                  <div className="text-3xl font-serif font-bold text-slate-900 mb-1">100%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Turnkey Execution</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                  alt="Manufacturing Implementation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
                <div className="font-serif text-xl font-bold mb-2">Manufacturing Focus</div>
                <p className="text-emerald-100 text-sm">Deep expertise in retrofitting heavy industries, optimizing supply chains, and deploying physical ESG infrastructure.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List - McKinsey Style Grid Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {[
            "ESG Strategy & Reporting",
            "Climate & Environment",
            "Social & Supply Chain",
            "Governance & Sustainable Finance",
            "Technology & Capacity Building"
          ].map((category) => {
            const categoryServices = servicesData.filter(s => s.category === category);
            if (categoryServices.length === 0) return null;
            
            return (
              <div key={category} className="mb-20 last:mb-0">
                <div className="border-t-2 border-slate-900 pt-6 mb-12 flex items-center justify-between group">
                  <Link to={`/services/category/${categorySlugs[category]}`}>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                      {category}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h2>
                  </Link>
                  <Link to={`/services/category/${categorySlugs[category]}`} className="hidden md:flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                    View All {categoryServices.length} Services
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                  {categoryServices.map((service) => (
                    <Link to={`/services/${service.id}`} key={service.id} className="group block">
                      <div className="relative p-4 -m-4 rounded-sm transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:z-10 h-full flex flex-col">
                        <div className="aspect-[3/2] overflow-hidden mb-5">
                          <img 
                            src={service.img} 
                            alt={service.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                          {service.title}
                          <ChevronRight className="w-5 h-5 ml-1 text-blue-600" strokeWidth={3} />
                        </h3>
                        <p className="text-slate-700 text-base leading-relaxed line-clamp-4">
                          {service.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to transform your ESG strategy?</h2>
            <p className="text-xl text-emerald-100/80 mb-10 font-light">
              Schedule a comprehensive assessment with our senior partners to identify your most critical sustainability opportunities.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-emerald-950 px-8 py-4 text-lg font-bold hover:bg-emerald-50 transition-colors">
              Book a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
