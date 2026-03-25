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
              Deep expertise for complex sustainability challenges.
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl">
              We bring rigorous analytical capabilities, proprietary data, and deep industry experience to help organizations navigate the transition to a sustainable economy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List - Typography Focused Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {servicesData.map((service, index) => (
              <div key={service.id} id={service.id} className="group">
                {/* Animated Divider Line */}
                {index > 0 && (
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-slate-200 mb-16 md:mb-24"
                  />
                )}

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-16"
                >
                  {/* Left Column: Title & Subtitle */}
                  <div className="lg:col-span-5">
                    <div className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-4">
                      Practice Area {String(index + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors">
                      <Link to={`/services/${service.id}`}>{service.title}</Link>
                    </h2>
                    <h3 className="text-xl font-medium text-slate-700 mb-6 italic">
                      {service.subtitle}
                    </h3>
                  </div>

                  {/* Right Column: Description & Link */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                      {service.desc}
                    </p>
                    
                    <div>
                      <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors text-lg group-hover:gap-4 duration-300">
                        Explore this capability <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
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
