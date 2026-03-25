import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';
import { useRef } from 'react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[600px] flex items-end pb-24 overflow-hidden bg-slate-950">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src={service.img} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div {...fadeIn} className="max-w-4xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-emerald-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Back to Capabilities
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 font-light max-w-3xl leading-relaxed">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-p:text-slate-700"
              >
                <p className="text-2xl md:text-3xl text-slate-900 font-light mb-12 leading-relaxed">
                  {service.desc}
                </p>
                
                {service.fullText.map((paragraph, idx) => (
                  <p key={idx} className="text-lg mb-8">{paragraph}</p>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="sticky top-32 space-y-12"
              >
                <div className="bg-slate-50 p-8 border-t-4 border-emerald-700">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Core Offerings</h3>
                  <ul className="space-y-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-slate-200 p-8">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-4">Ready to get started?</h3>
                  <p className="text-sm text-slate-600 mb-6">Speak with our experts to understand how we can help your organization achieve its sustainability goals.</p>
                  <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-emerald-900 text-white px-6 py-3 text-sm font-bold hover:bg-emerald-800 transition-colors">
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Rich Sections (McKinsey Style Scrolling) */}
      {service.richSections && (
        <section className="py-12 bg-slate-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Deep Dive</h2>
              <div className="w-24 h-1 bg-emerald-700 mt-6"></div>
            </div>
            
            <div className="space-y-32">
              {service.richSections.map((section: any, idx: number) => (
                <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Image with Parallax Reveal */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden"
                  >
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-4">
                      Insight {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      {section.content}
                    </p>
                  </motion.div>

                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Take the next step</h2>
            <p className="text-xl text-emerald-100/80 mb-10 font-light">
              Partner with us to turn sustainability into a competitive advantage.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-emerald-950 px-8 py-4 text-lg font-bold hover:bg-emerald-50 transition-colors">
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
