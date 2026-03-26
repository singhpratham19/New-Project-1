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
                We don't just deliver a strategy and walk away. ESGastraa is backed by an <strong>army of specialized service providers</strong>—from renewable energy installers and waste management experts to industrial engineers.
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Practice Clubs */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Practice Clubs</h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Explore our specialized practice areas. Each club brings together deep domain expertise, proprietary methodologies, and end-to-end execution capabilities to solve your most complex sustainability challenges.
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                title: "ESG Strategy & Reporting",
                slug: "esg-strategy-reporting",
                desc: "Navigate the complex landscape of sustainability disclosures and strategic planning. We help organizations align their business goals with global ESG frameworks, ensuring compliance with BRSR, GRI, TCFD, and SASB while driving long-term value creation.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
              },
              {
                title: "Climate & Environment",
                slug: "climate-environment",
                desc: "Accelerate your transition to a low-carbon economy. Our experts provide science-based decarbonization pathways, climate risk analysis, and comprehensive environmental management solutions to mitigate risks and seize climate opportunities.",
                img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop"
              },
              {
                title: "Social & Supply Chain",
                slug: "social-supply-chain",
                desc: "Build resilient, ethical, and inclusive value chains. We specialize in human rights due diligence, supply chain sustainability audits, and social impact assessments to ensure your operations positively impact communities and workers.",
                img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a74?q=80&w=1200&auto=format&fit=crop"
              },
              {
                title: "Governance & Sustainable Finance",
                slug: "governance-sustainable-finance",
                desc: "Strengthen corporate oversight and unlock green capital. We advise boards on ESG integration and assist organizations in improving ESG ratings, conducting investor due diligence, and structuring sustainable finance instruments.",
                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1200&auto=format&fit=crop"
              },
              {
                title: "Technology & Capacity Building",
                slug: "technology-capacity-building",
                desc: "Empower your workforce and streamline data with cutting-edge ESG technology. We offer proprietary carbon calculation tools, data management platforms, and comprehensive training programs to embed sustainability into your corporate DNA.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              }
            ].map((club, index) => (
              <div key={club.slug} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl relative group">
                    <img 
                      src={club.img} 
                      alt={club.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                    Practice Club
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                    {club.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {club.desc}
                  </p>
                  <Link 
                    to={`/services/category/${club.slug}`} 
                    className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors group w-fit"
                  >
                    Explore {club.title} Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
