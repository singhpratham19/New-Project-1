import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

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
                We don't just deliver a strategy and walk away. AstraESG is backed by an <strong>army of specialized service providers</strong>—from renewable energy installers and waste management experts to industrial engineers.
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

      {/* Services List - End-to-End Style Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-24 md:gap-32">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-4">
                      Practice Area {String(index + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <h3 className="text-xl font-medium text-slate-700 mb-6 italic">
                      {service.subtitle}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.points.slice(0, 3).map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0"></div>
                          <span className="text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 bg-emerald-900 text-white px-6 py-3 font-bold hover:bg-emerald-800 transition-colors rounded-lg shadow-md">
                      Explore this capability <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>

                  {/* Image Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className={`absolute -bottom-8 ${isEven ? '-left-8' : '-right-8'} bg-emerald-900 text-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block z-10`}>
                      <div className="font-serif text-lg font-bold mb-2">End-to-End Approach</div>
                      <p className="text-emerald-100 text-sm leading-relaxed">From strategic planning to on-ground implementation and continuous monitoring.</p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
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
